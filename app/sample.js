export const xmlObject = {
  "MESSAGE": {
      "ABOUT_VERSIONS": {
          "ABOUT_VERSION": {
              "AboutVersionIdentifier": "FNM 3.0",
              "CreatedDatetime": "2017-01-25T09:07:33"
          }
      },
      "DEAL_SETS": {
          "DEAL_SET": {
              "DEALS": {
                  "DEAL": {
                      "COLLATERALS": {
                          "COLLATERAL": {
                              "PROPERTIES": {
                                  "PROPERTY": {
                                      "ADDRESS": {
                                          "AddressLineText": "123 Main Street",
                                          "CityName": "Anytown",
                                          "PostalCode": 20191,
                                          "StateCode": "VA"
                                      },
                                      "FLOOD_DETERMINATION": {
                                          "FLOOD_DETERMINATION_DETAIL": {
                                              "SpecialFloodHazardAreaIndicator": false
                                          }
                                      },
                                      "PROJECT": {
                                          "PROJECT_DETAIL": {
                                              "PUDIndicator": false,
                                              "ProjectClassificationIdentifier": "G"
                                          }
                                      },
                                      "PROPERTY_DETAIL": {
                                          "AttachmentType": "Detached",
                                          "ConstructionMethodType": "SiteBuilt",
                                          "FinancedUnitCount": 1,
                                          "PropertyEstateType": "FeeSimple",
                                          "PropertyFloodInsuranceIndicator": false,
                                          "PropertyStructureBuiltYear": 1998,
                                          "PropertyUsageType": "PrimaryResidence"
                                      },
                                      "PROPERTY_VALUATIONS": {
                                          "PROPERTY_VALUATION": {
                                              "PROPERTY_VALUATION_DETAIL": {
                                                  "PropertyValuationAmount": 200000,
                                                  "PropertyValuationMethodType": "None"
                                              }
                                          }
                                      }
                                  }
                              }
                          }
                      },
                      "LOANS": {
                          "COMBINED_LTVS": {
                              "COMBINED_LTV": {
                                  "CombinedLTVRatioPercent": 80
                              }
                          },
                          "LOAN": [
                              {
                                  "AMORTIZATION": {
                                      "AMORTIZATION_RULE": {
                                          "LoanAmortizationPeriodCount": 360,
                                          "LoanAmortizationPeriodType": "Month",
                                          "LoanAmortizationType": "Fixed"
                                      }
                                  },
                                  "FORM_SPECIFIC_CONTENTS": {
                                      "FORM_SPECIFIC_CONTENT": {
                                          "URLA": {
                                              "URLA_DETAIL": {
                                                  "BorrowerPaidDiscountPointsTotalAmount": 0,
                                                  "PurchasePriceAmount": 200000
                                              }
                                          }
                                      }
                                  },
                                  "HMDA_LOAN": {
                                      "HMDARateSpreadPercent": 1.6,
                                      "HMDA_HOEPALoanStatusIndicator": false
                                  },
                                  "INTEREST_CALCULATION": {
                                      "INTEREST_CALCULATION_RULES": {
                                          "INTEREST_CALCULATION_RULE": {
                                              "InterestCalculationPeriodType": "Month",
                                              "InterestCalculationType": "Simple"
                                          }
                                      }
                                  },
                                  "LOAN_DETAIL": {
                                      "ApplicationReceivedDate": "2016-12-21",
                                      "AssumabilityIndicator": false,
                                      "BalloonIndicator": false,
                                      "BorrowerCount": 1,
                                      "BuydownTemporarySubsidyIndicator": false,
                                      "CapitalizedLoanIndicator": false,
                                      "ConstructionLoanIndicator": false,
                                      "ConvertibleIndicator": false,
                                      "EscrowIndicator": false,
                                      "InterestOnlyIndicator": false,
                                      "LoanAffordableIndicator": false,
                                      "PrepaymentPenaltyIndicator": false,
                                      "RelocationLoanIndicator": false,
                                      "SharedEquityIndicator": false,
                                      "TotalMortgagedPropertiesCount": 0
                                  },
                                  "LOAN_LEVEL_CREDIT": {
                                      "LOAN_LEVEL_CREDIT_DETAIL": {
                                          "LoanLevelCreditScoreValue": 730
                                      }
                                  },
                                  "LOAN_STATE": {
                                      "LoanStateDate": "2017-01-15",
                                      "LoanStateType": "AtClosing"
                                  },
                                  "LTV": {
                                      "BaseLTVRatioPercent": 80,
                                      "LTVRatioPercent": 80
                                  },
                                  "MATURITY": {
                                      "MATURITY_RULE": {
                                          "LoanMaturityDate": "2047-02-01",
                                          "LoanMaturityPeriodCount": 360,
                                          "LoanMaturityPeriodType": "Month"
                                      }
                                  },
                                  "PAYMENT": {
                                      "PAYMENT_RULE": {
                                          "InitialPrincipalAndInterestPaymentAmount": 959.28,
                                          "PaymentFrequencyType": "Monthly",
                                          "ScheduledFirstPaymentDate": "2017-03-01"
                                      }
                                  },
                                  "QUALIFICATION": {
                                      "BorrowerReservesMonthlyPaymentCount": 2,
                                      "TotalLiabilitiesMonthlyPaymentAmount": 2500,
                                      "TotalMonthlyIncomeAmount": 12500,
                                      "TotalMonthlyProposedHousingExpenseAmount": 1125
                                  },
                                  "SELECTED_LOAN_PRODUCT": {
                                      "PRICE_LOCKS": {
                                          "PRICE_LOCK": {
                                              "PriceLockDatetime": "2017-01-05"
                                          }
                                      }
                                  },
                                  "TERMS_OF_MORTGAGE": {
                                      "LienPriorityType": "FirstLien",
                                      "LoanPurposeType": "Purchase",
                                      "MortgageType": "Conventional",
                                      "NoteAmount": 160000,
                                      "NoteDate": "2017-01-15",
                                      "NoteRatePercent": 6
                                  },
                                  "UNDERWRITING": {
                                      "AUTOMATED_UNDERWRITINGS": {
                                          "AUTOMATED_UNDERWRITING": {
                                              "AutomatedUnderwritingCaseIdentifier": 9876543210,
                                              "AutomatedUnderwritingRecommendationDescription": "ApproveEligible",
                                              "AutomatedUnderwritingSystemType": "DesktopUnderwriter"
                                          }
                                      },
                                      "UNDERWRITING_DETAIL": {
                                          "LoanManualUnderwritingIndicator": false
                                      }
                                  }
                              },
                              {
                                  "INVESTOR_FEATURES": {
                                      "INVESTOR_FEATURE": {
                                          "InvestorFeatureIdentifier": 801
                                      }
                                  },
                                  "INVESTOR_LOAN_INFORMATION": {
                                      "InvestorCollateralProgramIdentifier": "PropertyInspectionWaiver",
                                      "InvestorOwnershipPercent": 100,
                                      "InvestorRemittanceType": "ActualInterestActualPrincipal"
                                  },
                                  "LOAN_DETAIL": {
                                      "MortgageModificationIndicator": false
                                  },
                                  "LOAN_IDENTIFIERS": {
                                      "LOAN_IDENTIFIER": [
                                          {
                                              "InvestorCommitmentIdentifier": 123456
                                          },
                                          {
                                              "MERS_MINIdentifier": 987654321123456000
                                          },
                                          {
                                              "SellerLoanIdentifier": 123456789
                                          }
                                      ]
                                  },
                                  "LOAN_PROGRAMS": {
                                      "LOAN_PROGRAM": {
                                          "LoanProgramIdentifier": "LoanFirstTimeHomebuyer"
                                      }
                                  },
                                  "LOAN_STATE": {
                                      "LoanStateDate": "2017-01-25",
                                      "LoanStateType": "Current"
                                  },
                                  "MI_DATA": {
                                      "MI_DATA_DETAIL": {
                                          "PrimaryMIAbsenceReasonType": "NoMIBasedOnOriginalLTV"
                                      }
                                  },
                                  "PAYMENT": {
                                      "PAYMENT_SUMMARY": {
                                          "LastPaidInstallmentDueDate": "2017-02-01",
                                          "UPBAmount": 160000
                                      }
                                  },
                                  "SERVICING": {
                                      "DELINQUENCY_SUMMARY": {
                                          "DelinquentPaymentsOverPastTwelveMonthsCount": 0
                                      }
                                  }
                              }
                          ]
                      },
                      "PARTIES": {
                          "PARTY": [
                              {
                                  "INDIVIDUAL": {
                                      "NAME": {
                                          "FirstName": "John",
                                          "LastName": "Smith",
                                          "MiddleName": "Q",
                                          "SuffixName": "JR"
                                      }
                                  },
                                  "ROLES": {
                                      "ROLE": {
                                          "BORROWER": {
                                              "BORROWER_DETAIL": {
                                                  "BorrowerAgeAtApplicationYearsCount": 44,
                                                  "BorrowerBirthDate": "1972-01-02",
                                                  "BorrowerClassificationType": "Primary",
                                                  "BorrowerMailToAddressSameAsPropertyIndicator": true,
                                                  "BorrowerQualifyingIncomeAmount": 12500
                                              },
                                              "CREDIT_SCORES": {
                                                  "CREDIT_SCORE": {
                                                      "CREDIT_SCORE_DETAIL": {
                                                          "CreditReportIdentifier": 5432109876,
                                                          "CreditRepositorySourceIndicator": true,
                                                          "CreditRepositorySourceType": "Equifax",
                                                          "CreditScoreValue": 730
                                                      }
                                                  }
                                              },
                                              "DECLARATION": {
                                                  "DECLARATION_DETAIL": {
                                                      "BankruptcyIndicator": false,
                                                      "BorrowerFirstTimeHomebuyerIndicator": true,
                                                      "CitizenshipResidencyType": "USCitizen",
                                                      "LoanForeclosureOrJudgmentIndicator": false
                                                  }
                                              },
                                              "EMPLOYERS": {
                                                  "EMPLOYER": {
                                                      "EMPLOYMENT": {
                                                          "EmploymentBorrowerSelfEmployedIndicator": false
                                                      }
                                                  }
                                              },
                                              "GOVERNMENT_MONITORING": {
                                                  "EXTENSION": {
                                                      "ULDD:OTHER": {
                                                          "ULDD:GOVERNMENT_MONITORING_EXTENSION": {
                                                              "ULDD:HMDA_ETHNICITIES": {
                                                                  "ULDD:HMDA_ETHNICITY": {
                                                                      "ULDD:HMDAEthnicityType": "HispanicOrLatino"
                                                                  }
                                                              },
                                                              "ULDD:HMDA_ETHNICITY_ORIGINS": {
                                                                  "ULDD:HMDA_ETHNICITY_ORIGIN": {
                                                                      "ULDD:HMDAEthnicityOriginType": "Other",
                                                                      "ULDD:HMDAEthnicityOriginTypeOtherDescription": "Brazilian"
                                                                  }
                                                              }
                                                          }
                                                      }
                                                  },
                                                  "GOVERNMENT_MONITORING_DETAIL": {
                                                      "EXTENSION": {
                                                          "ULDD:OTHER": {
                                                              "ULDD:GOVERNMENT_MONITORING_DETAIL_EXTENSION": {
                                                                  "ULDD:HMDAEthnicityCollectedBasedOnVisualObservationOrSurnameIndicator": false,
                                                                  "ULDD:HMDAEthnicityRefusalIndicator": false,
                                                                  "ULDD:HMDAGenderCollectedBasedOnVisualObservationOrNameIndicator": false,
                                                                  "ULDD:HMDAGenderRefusalIndicator": false,
                                                                  "ULDD:HMDAGenderType": "Male",
                                                                  "ULDD:HMDARaceCollectedBasedOnVisualObservationOrSurnameIndicator": false,
                                                                  "ULDD:HMDARaceRefusalIndicator": false
                                                              }
                                                          }
                                                      }
                                                  },
                                                  "HMDA_RACES": {
                                                      "HMDA_RACE": {
                                                          "EXTENSION": {
                                                              "ULDD:OTHER": {
                                                                  "ULDD:HMDA_RACE_EXTENSION": {
                                                                      "ULDD:HMDA_RACE_DETAIL": {
                                                                          "ULDD:HMDARaceType": "White"
                                                                      }
                                                                  }
                                                              }
                                                          }
                                                      }
                                                  }
                                              }
                                          },
                                          "ROLE_DETAIL": {
                                              "PartyRoleType": "Borrower"
                                          }
                                      }
                                  },
                                  "TAXPAYER_IDENTIFIERS": {
                                      "TAXPAYER_IDENTIFIER": {
                                          "TaxpayerIdentifierType": "SocialSecurityNumber",
                                          "TaxpayerIdentifierValue": 888123456
                                      }
                                  }
                              },
                              {
                                  "ROLES": {
                                      "PARTY_ROLE_IDENTIFIERS": {
                                          "PARTY_ROLE_IDENTIFIER": {
                                              "PartyRoleIdentifier": 99999398668
                                          }
                                      },
                                      "ROLE": {
                                          "ROLE_DETAIL": {
                                              "PartyRoleType": "DocumentCustodian"
                                          }
                                      }
                                  }
                              },
                              {
                                  "ROLES": {
                                      "PARTY_ROLE_IDENTIFIERS": {
                                          "PARTY_ROLE_IDENTIFIER": {
                                              "PartyRoleIdentifier": 777777
                                          }
                                      },
                                      "ROLE": {
                                          "ROLE_DETAIL": {
                                              "PartyRoleType": "LoanOriginationCompany"
                                          }
                                      }
                                  }
                              },
                              {
                                  "ROLES": {
                                      "PARTY_ROLE_IDENTIFIERS": {
                                          "PARTY_ROLE_IDENTIFIER": {
                                              "PartyRoleIdentifier": 555555
                                          }
                                      },
                                      "ROLE": {
                                          "LOAN_ORIGINATOR": {
                                              "LoanOriginatorType": "Lender"
                                          },
                                          "ROLE_DETAIL": {
                                              "PartyRoleType": "LoanOriginator"
                                          }
                                      }
                                  }
                              },
                              {
                                  "ROLES": {
                                      "PARTY_ROLE_IDENTIFIERS": {
                                          "PARTY_ROLE_IDENTIFIER": {
                                              "PartyRoleIdentifier": 999999999
                                          }
                                      },
                                      "ROLE": {
                                          "ROLE_DETAIL": {
                                              "PartyRoleType": "LoanSeller"
                                          }
                                      }
                                  }
                              },
                              {
                                  "LEGAL_ENTITY": {
                                      "LEGAL_ENTITY_DETAIL": {
                                          "FullName": "XYZ Bank, NA"
                                      }
                                  },
                                  "ROLES": {
                                      "ROLE": {
                                          "ROLE_DETAIL": {
                                              "PartyRoleType": "NotePayTo"
                                          }
                                      }
                                  }
                              },
                              {
                                  "ROLES": {
                                      "PARTY_ROLE_IDENTIFIERS": {
                                          "PARTY_ROLE_IDENTIFIER": {
                                              "PartyRoleIdentifier": 999999999
                                          }
                                      },
                                      "ROLE": {
                                          "ROLE_DETAIL": {
                                              "PartyRoleType": "Payee"
                                          }
                                      }
                                  }
                              },
                              {
                                  "ROLES": {
                                      "PARTY_ROLE_IDENTIFIERS": {
                                          "PARTY_ROLE_IDENTIFIER": {
                                              "PartyRoleIdentifier": 999999999
                                          }
                                      },
                                      "ROLE": {
                                          "ROLE_DETAIL": {
                                              "PartyRoleType": "Servicer"
                                          }
                                      }
                                  }
                              }
                          ]
                      }
                  }
              }
          },
          "PARTIES": {
              "PARTY": {
                  "ROLES": {
                      "PARTY_ROLE_IDENTIFIERS": {
                          "PARTY_ROLE_IDENTIFIER": {
                              "PartyRoleIdentifier": "ABC Doc Prep"
                          }
                      },
                      "ROLE": {
                          "ROLE_DETAIL": {
                              "PartyRoleType": "LoanDeliveryFilePreparer"
                          }
                      }
                  }
              }
          }
      }
  }
}