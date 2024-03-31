import { Component, OnInit } from "@angular/core";
import { IValidationResponse } from "./interfaces/ivalidation-response";
import { Observable } from "rxjs";
import { ValidationService } from "./services/validation.service";
import { ConfigurationService } from "./services/configuration.service";
import { IValidationRequest } from "./interfaces/ivalidation-request";

const VALIDATION = "validation";
const CONFIGURATION = "configuration (AI/ML)";
const HOW_IT_WORKS = "How it works?";
const ABOUT_ME = "About Me";

interface INavigationItem {
  value: string;
  icon: string;
  disabled: boolean;
}
interface IValidationTypeItem {
  label: string;
  value: VALIDATION_TYPES;
  disabled: boolean;
}
enum VALIDATION_TYPES {
  YOUTUBE = "youtube",
  TEXT = "simpletext",
  DEFAULT = "",
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "arnav-project";
  localWordsToBlock: string[] = [];
  cloudWordsToBlock: string[] = [];
  whiteListUrls: string[] = [];
  localYoutubeUrls: string[] = [];

  navigationItems: INavigationItem[] = [
    { value: VALIDATION, icon: "assignment", disabled: false },
    { value: CONFIGURATION, icon: "settings", disabled: false },
    { value: HOW_IT_WORKS, icon: "science", disabled: true },
    { value: ABOUT_ME, icon: "sentiment_satisfied_alt", disabled: true },
  ];

  validationTypes: IValidationTypeItem[] = [
    { label: "Youtube", value: VALIDATION_TYPES.YOUTUBE, disabled: false },
    { label: "Text", value: VALIDATION_TYPES.TEXT, disabled: false },
    {
      label: "Music comes later",
      value: VALIDATION_TYPES.DEFAULT,
      disabled: true,
    },
    {
      label: "Saving comes later",
      value: VALIDATION_TYPES.DEFAULT,
      disabled: true,
    },
  ];
  selectedValidationType: VALIDATION_TYPES = this.validationTypes[0].value;
  isConfigPage = false;
  isValidationPage = true;
  private validationResponse: IValidationResponse;

  constructor(
    private validationService: ValidationService,
    private configurationService: ConfigurationService
  ) {}

  ngOnInit(): void {
    this.onPageSelected(this.navigationItems[0]);
    this.getConfigHandler();
    // Called after the constructor and called  after the first ngOnChanges()
  }

  getConfigHandler(): void {
    this.configurationService
      .getConfigs()
      .subscribe((configurationResponse) => {
        console.log(configurationResponse);
        this.cloudWordsToBlock = configurationResponse["expanded-bad-words"];
        this.whiteListUrls = configurationResponse.whitelisturls;
        console.log(configurationResponse);
      });
  }

  onPageSelected(navItem: INavigationItem): void {
    const selectedPage = navItem.value;
    this.isConfigPage = selectedPage === CONFIGURATION;
    this.isValidationPage = selectedPage === VALIDATION;
    if (this.isConfigPage) {
      this.getConfigHandler();
    }
    if (this.isValidationPage) {
      this.selectedValidationType = this.validationTypes[0].value;
      console.log(this.validationTypes[0]);
    }
  }

  onValidateText(validationTextElement: any): void {
    // capture value
    const inputValue = validationTextElement.value;
    // reset value
    validationTextElement.value = "";
    const request: IValidationRequest = {
      value: inputValue,
      reqtype: this.selectedValidationType,
    };
    console.log(this.selectedValidationType);
    this.validationService.validateQuery(request).subscribe((response) => {
      this.validationResponse = response;
      console.log(this.validationResponse);
    });
  }
  onAddBlockWordToLocal(validationTextElement: any): void {
    const value: string = validationTextElement.value;
    if (!value || !value.trim()) {
      return;
    }
    validationTextElement.value = "";
    this.localWordsToBlock.push(value);
  }
  onAddBlockedWordsToCloud(): void {
    this.configurationService
      .addWordsToBlock(this.localWordsToBlock)
      .subscribe((result) => {
        console.log("kdkdkkd...", result);
        //      this.cloudWordsToBlock = result;
        this.localWordsToBlock = [];
        this.getConfigHandler();
      });
  }

  onAddYoutubeUrls(urlInput: any): void {
    const value = urlInput.value;
    if (!value || !value.trim) {
      return;
    }
    urlInput.value = "";
    this.localYoutubeUrls.push(value);
  }

  onAddYoutubeUrlsToCloud(): void {
    this.configurationService
      .addWhiteListUrl(this.localYoutubeUrls)
      .subscribe((result) => {
        this.whiteListUrls = result;
        this.localYoutubeUrls = [];
      });
  }

  validationTypeChanged(item: IValidationTypeItem): void {
    if (!item.disabled) {
      this.selectedValidationType = item.value;
    }
  }
}
