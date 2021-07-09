import { Types } from "./APACSInterfaces";

export interface TreeChild {
    "strClassID": string,
    "sysAddrID": string
}

// export enum Actions {
//     PrintInfo,
//     AddObject
// }

export type Actions = "getInfo" | "addObject" | "delObject" | "testQuery" | "editObject" | "changeActivity" | "commands" | "events";

export interface Action {
    object: Types;
    action: Actions;
}


// export type Types =
//     TApcRoot
//     | TApcFolder
//     | TApcServiceRegistry
//     | TApcPC
//     | TApcSecurityFolder
//     | TApcSecurityGroup
//     | TApcVisEscortExtension
//     | TSupAC2ControllerGroup
//     | TApcFile
//     | TApcObjLink
//     | TApcTASchedule
//     | TApcTAShift
//     | TApcWorkZone
//     | TApcCardHolder
//     | TApcAccountExtension
//     | TApcAccount
//     | TSupAC2BioLiteN2
//     | TSupAC2WDMCfg
//     | TSupAC2BioStationA2
//     | TSupAC2CardReaderCfg
//     | TApcPermissions
//     | TApcUser
//     | TApcVirtualReader
//     | TApcTAIntervalType
//     | TApcTAJob
//     | TApcTAStructException
//     | TApcJobTitle
//     | TApcDepartment
//     | TApcAccount2HolderLink
//     | TApcCHMainPhoto
//     | TApcTAJob2HolderLink
//     | TSupAC2InputTTL
//     | TSupAC2AccessList
//     | TSupAC2Tamper
//     | TSupAC2AL
//     | TSupAC2ReaderCntr
//     | TSupAC2WiegandFormatsList
//     | TSupAC2WiegandFormat
//     | TSupAC2Relay
//     | TSupAC2Door
//     | TSupAC2TZ
//     | TApcApplRecord
//     | TApcTAShiftMException
//     | TSupAC2AccessListElem
//     | TSupAC2ALElem
//     | TSupAC2DoorForcedOpenStatus
//     | TSupAC2DoorHeldOpenStatus
//     | TSupAC2DoorContactStatus
//     | TSupAC2DoorLockStatus;

// export interface Config {
//     "strClassID": string,
//     "sysAddrID": string,
//     "strName": string,
//     "strAlias": string,
//     "dtLastModifyTime": string,
//     "dtCreateTime": string,
//     "IsActive": boolean,
//     "strDesc": string
// }

// export interface TApcFolder {
//     "strClassID": string,
//     "sysAddrID": string,
//     "strName": string,
//     "strAlias": string,
//     "dtLastModifyTime": string,
//     "dtCreateTime": string,
//     "IsActive": boolean,
//     "strDesc": string
// }

// export interface TApcCardHolder {
//     "strClassID": string,
//     "sysAddrID": string,
//     "strName": string,
//     "strAlias": string,
//     "dtLastModifyTime": string,
//     "dtCreateTime": string,
//     "IsActive": boolean,
//     "strDesc": string,
//     "fUnlockReader": boolean,
//     "bFingerAuthMode": number,
//     "fHostCheckBeforeGrant": boolean,
//     "dwNumber": number,
//     "strAdd15": string,
//     "strMiddleName": string,
//     "fAllowPINCmds": boolean,
//     "strAdd3": string,
//     "fActive": boolean,
//     "bIdAuthMode": number,
//     "bCardAuthMode": number,
//     "strPIN": string,
//     "strAdd8": string,
//     "strPhoneNumber": string,
//     "strAdd12": string,
//     "strAdd1": string,
//     "bFaceAuthGroup": number,
//     "bSecurityLevel": number,
//     "strAdd19": string,
//     "bStatus": number,
//     "strAdd10": string,
//     "strAdd7": string,
//     "bGender": number,
//     "bThreatLevel": number,
//     "strAdd20": string,
//     "strAdd17": string,
//     "strAdd4": string,
//     "fUseLongTimes": boolean,
//     "fHostCheckBeforeDenied": boolean,
//     "tEveryDayDeactTime": string,
//     "tEveryDayActTime": string,
//     "strAdd16": string,
//     "strAdd5": string,
//     "strEMailAddress": string,
//     "fAPBExempt": boolean,
//     "strAdd2": string,
//     "strAdd14": string,
//     "bAdminLevel": number,
//     "dtActDateTime": string,
//     "bEmployee": number,
//     "strAdd13": string,
//     "strLastName": string,
//     "strFirstName": string,
//     "fSoftAPB": boolean,
//     "fEnterClosedAPB": boolean,
//     "strAdd9": string,
//     "fPINExempt": boolean,
//     "dtDeactDateTime": string,
//     "blobOwnSG": string,
//     "strAdd11": string,
//     "strAdd6": string,
//     "strSGList": string,
//     "strAdd18": string,
//     "SysAddrVisEscortExt": string,
//     "SysAddrDepartment": string,
//     "SysAddrJobTitle": string,
//     "SysAddrCompany": string,
//     "SysAddrRef1": string,
//     "SysAddrRef2": string,
//     "SysAddrBadgeModel": string,
//     "SysAddrSegment": string
// }
//
//
// export interface TApcRoot {
//     strClassID: string,
//     sysAddrID: string,
//     nSiteID: number,
//     strName: string,
//     strDesc: string,
//     IsActive: boolean,
//     dtCreateTime: string,
//     dtLastModifyTime: string,
//     strAlias: string
// }
//
// export interface TApcFolder {
//     strClassID: string,
//     sysAddrID: string,
//     strName: string,
//     strDesc: string,
//     IsActive: boolean,
//     dtCreateTime: string,
//     dtLastModifyTime: string,
//     strAlias: string
// }
//
// export interface TApcSecurityFolder {
//     strClassID: string,
//     sysAddrID: string,
//     strName: string,
//     strDesc: string,
//     IsActive: boolean,
//     dtCreateTime: string,
//     dtLastModifyTime: string,
//     strAlias: string
// }
//
// export interface TApcServiceRegistry {
//     strClassID: string,
//     sysAddrID: string,
//     blobXML: string,
//     strName: string,
//     strDesc: string,
//     IsActive: boolean,
//     dtCreateTime: string,
//     dtLastModifyTime: string,
//     strAlias: string
// }
//
// export interface TApcPC {
//     strClassID: string,
//     sysAddrID: string,
//     strIPPortName: string,
//     strIPName: string,
//     wPCID: number,
//     strName: string,
//     strDesc: string,
//     IsActive: boolean,
//     dtCreateTime: string,
//     dtLastModifyTime: string,
//     strAlias: string
// }
//
// export interface TApcSecurityGroup {
//     strClassID: string,
//     sysAddrID: string,
//     strName: string,
//     strAlias: string,
//     dtLastModifyTime: string,
//     dtCreateTime: string,
//     IsActive: boolean,
//     strDesc: string,
//     blobProperties: object
// }
//
// export interface TSupAC2ControllerGroup {
//     strClassID: string,
//     sysAddrID: string,
//     strName: string,
//     strDesc: string,
//     IsActive: boolean,
//     dtCreateTime: string,
//     dtLastModifyTime: string,
//     strAlias: string
// }
//
// export interface TApcVisEscortExtension {
//     strClassID: string,
//     sysAddrID: string,
//     strName: string,
//     strAlias: string,
//     dtLastModifyTime: string,
//     dtCreateTime: string,
//     IsActive: boolean,
//     strDesc: string,
//     blobVisEscortCntr: object
// }
//
// export interface TApcFile {
//     strClassID: string,
//     sysAddrID: string,
//     strName: string,
//     strDesc: string,
//     IsActive: boolean,
//     dtCreateTime: string,
//     dtLastModifyTime: string,
//     strAlias: string,
//     blobData: string
// }
//
// export interface TApcObjLink {
//     strClassID: string,
//     sysAddrID: string,
//     strName: string,
//     strDesc: string,
//     IsActive: boolean,
//     dtCreateTime: string,
//     dtLastModifyTime: string,
//     strAlias: string,
//     SysAddrObj: string
// }
//
// export interface TApcTASchedule {
//     strClassID: string,
//     sysAddrID: string,
//     strName: string,
//     strDesc: string,
//     IsActive: boolean,
//     dtCreateTime: string,
//     dtLastModifyTime: string,
//     strAlias: string,
//     nLength: number,
//     blobShifts: string
// }
//
// export interface TApcTAShift {
//     strClassID: string,
//     sysAddrID: string,
//     strName: string,
//     strDesc: string,
//     IsActive: boolean,
//     dtCreateTime: string,
//     dtLastModifyTime: string,
//     strAlias: string,
//     nLunch: number,
//     nTruancyTol: number,
//     nAbsenceTol: number,
//     dtShiftStart: string,
//     blobIntervalTemplates: string,
//     nReworkTol: number,
//     nInLateTol: number,
//     nOutEarlyTol: number,
//     nAllowedAbsLength: number
// }
//
// export interface TApcWorkZone {
//     strClassID: string,
//     sysAddrID: string,
//     strName: string,
//     strDesc: string,
//     IsActive: boolean,
//     dtCreateTime: string,
//     dtLastModifyTime: string,
//     strAlias: string,
//     blobPointsOut: string,
//     blobPointsIn: string
// }
//
// export interface TApcCardHolder {
//     strClassID: string,
//     sysAddrID: string,
//     strName: string,
//     strAlias: string,
//     dtLastModifyTime: string,
//     dtCreateTime: string,
//     IsActive: boolean,
//     strDesc: string,
//     fUnlockReader: boolean,
//     bFingerAuthMode: number,
//     fHostCheckBeforeGrant: boolean,
//     dwNumber: number,
//     strAdd15: string,
//     strMiddleName: string,
//     fAllowPINCmds: boolean,
//     strAdd3: string,
//     fActive: boolean,
//     bIdAuthMode: number,
//     bCardAuthMode: number,
//     strPIN: string,
//     strAdd8: string,
//     strPhoneNumber: string,
//     strAdd12: string,
//     strAdd1: string,
//     bFaceAuthGroup: number,
//     bSecurityLevel: number,
//     strAdd19: string,
//     bStatus: number,
//     strAdd10: string,
//     strAdd7: string,
//     bGender: number,
//     bThreatLevel: number,
//     strAdd20: string,
//     strAdd17: string,
//     strAdd4: string,
//     fUseLongTimes: boolean,
//     fHostCheckBeforeDenied: boolean,
//     tEveryDayDeactTime: string,
//     tEveryDayActTime: string,
//     strAdd16: string,
//     strAdd5: string,
//     strEMailAddress: string,
//     fAPBExempt: boolean,
//     strAdd2: string,
//     strAdd14: string,
//     bAdminLevel: number,
//     dtActDateTime: string,
//     bEmployee: number,
//     strAdd13: string,
//     strLastName: string,
//     strFirstName: string,
//     fSoftAPB: boolean,
//     fEnterClosedAPB: boolean,
//     strAdd9: string,
//     fPINExempt: boolean,
//     dtDeactDateTime: string,
//     blobOwnSG: string,
//     strAdd11: string,
//     strAdd6: string,
//     strSGList: string,
//     strAdd18: string,
//     SysAddrVisEscortExt: string,
//     SysAddrDepartment: string,
//     SysAddrJobTitle: string,
//     SysAddrCompany: string,
//     SysAddrRef1: string,
//     SysAddrRef2: string,
//     SysAddrBadgeModel: string,
//     SysAddrSegment: string
// }
//
// export interface TApcAccountExtension {
//     strClassID: string,
//     sysAddrID: string,
//     strName: string,
//     strAlias: string,
//     dtLastModifyTime: string,
//     dtCreateTime: string,
//     IsActive: boolean,
//     strDesc: string,
//     blobSettings: object
// }
//
// export interface TApcAccount {
//     strClassID: string,
//     sysAddrID: string,
//     strName: string,
//     strAlias: string,
//     dtLastModifyTime: string,
//     dtCreateTime: string,
//     IsActive: boolean,
//     strDesc: string,
//     fUnlockReader: boolean,
//     nAdd5: number,
//     strAdd2: string,
//     fAPBExempt: boolean,
//     fHostCheckBeforeGrant: boolean,
//     nAdd4: number,
//     strAdd3: string,
//     fAllowPINCmds: boolean,
//     fActive: boolean,
//     dtActDateTime: string,
//     strPIN: string,
//     nAdd6: number,
//     strAdd1: string,
//     fSoftAPB: boolean,
//     fEnterClosedAPB: boolean,
//     bIssueCode: number,
//     fPINExempt: boolean,
//     dtDeactDateTime: string,
//     fUseOwnSG: boolean,
//     blobOwnSG: string,
//     strSGList: string,
//     bStatus: number,
//     bThreatLevel: number,
//     fUseLongTimes: boolean,
//     fHostCheckBeforeDenied: boolean,
//     tEveryDayDeactTime: string,
//     tEveryDayActTime: string,
//     u64FC: number,
//     u64CardNumber: number,
//     SysAddrVisEscortExt: string,
//     SysAddrAccExt: string,
//     SysAddrBadgeModel: string,
//     SysAddrTemplate: string
// }
//
// export interface TSupAC2BioLiteN2 {
//     strClassID: string,
//     sysAddrID: string,
//     wPort: number,
//     SysAddrAuthCfg_ModeTZ_Biomentric_and_PIN: string,
//     fDisplayCfg_UseVoice: boolean,
//     SysAddrCardCfg_MifareConfig: string,
//     strTNACfg_Label_3: string,
//     fIpCfg_UseServerMode: boolean,
//     SysAddrWDMSettings: string,
//     bFingerCfg_ScanTimeout: number,
//     bTimezoneMode: number,
//     SysAddrTNACfg_TZ_10: string,
//     fFingerCfg_ControlQuality: boolean,
//     bFingerCfg_Sensitivity: number,
//     bCardCfg_DataType: number,
//     bFingerCfg_LFDLevel: number,
//     strTNACfg_Label_10: string,
//     strTNACfg_Label_6: string,
//     SysAddrWiegandCfg_MainFormatsList: string,
//     dwPollTimeout: number,
//     fFingerCfg_SmartSensorMode: boolean,
//     SysAddrTNACfg_TZ_6: string,
//     bCurrStatus: number,
//     SysAddrAuthCfg_ModeTZ_ID_and_PIN: string,
//     SysAddrTNACfg_TZ_9: string,
//     fWiegandCfg_UseFailCode: boolean,
//     SysAddrAuthCfg_ModeTZ_Card_and_Biometric: string,
//     SysAddrAuthCfg_ModeTZ_ID_and_Biometric: string,
//     SysAddrAuthCfg_ModeTZ_Card: string,
//     bDisplayCfg_SoundVolume: number,
//     bFingerCfg_FastMode: number,
//     strTNACfg_Label_14: string,
//     strTNACfg_Label_2: string,
//     fAuthCfg_UseFullAccess: boolean,
//     bAuthCfg_GlobalAPB_FailAction: number,
//     bWiegandCfg_WiegandMode: number,
//     dwReconnectTimeout: number,
//     fActivate: boolean,
//     wDisplayCfg_MsgTimeout: number,
//     SysAddrTNACfg_TZ_13: string,
//     SysAddrTNACfg_TZ_2: string,
//     bTNACfg_TNAMode: number,
//     fRS485Cfg_UseResistance_0: boolean,
//     SysAddrAuthCfg_ModeTZ_ID_and_Biometric_and_PIN: string,
//     bCardCfg_UseWiegandFormat: number,
//     SysAddrCardCfg_IClassConfig: string,
//     strTNACfg_Label_11: string,
//     strTNACfg_Label_5: string,
//     bDisplayCfg_BgTheme: number,
//     SysAddrTNACfg_TZ_7: string,
//     SysAddrWiegandCfg_InputFormatsList: string,
//     strTNACfg_Label_13: string,
//     strTNACfg_Label_7: string,
//     bRS485Cfg_Mode: number,
//     fDisplayCfg_DisplayDateTime: boolean,
//     nTimezoneMode_Value: number,
//     strTNACfg_Label_8: string,
//     SysAddrTNACfg_TZ_14: string,
//     SysAddrTNACfg_TZ_1: string,
//     bAuthCfg_ConfigureMode: number,
//     SysAddrCardCfg_DesfireConfig: string,
//     strTNACfg_Label_15: string,
//     strTNACfg_Label_1: string,
//     SysAddrTNACfg_TZ_8: string,
//     fTNACfg_TNARequired: boolean,
//     bRS485Cfg_BaudRate_0: number,
//     bWiegandCfg_FailCode: number,
//     bAuthCfg_MatchTimeout: number,
//     SysAddrTNACfg_TZ_12: string,
//     SysAddrTNACfg_TZ_3: string,
//     bFingerCfg_SecurityLevel: number,
//     bAuthCfg_AuthTimeout: number,
//     fAuthCfg_UsePrivateAuth: boolean,
//     strTNACfg_Label_4: string,
//     SysAddrWiegandCfg_CSNFormat: string,
//     bAuthCfg_SimpleMode_Biometric: number,
//     SysAddrTNACfg_TZ_4: string,
//     bCardCfg_ByteOrder: number,
//     bDisplayCfg_BacklightTimeout: number,
//     fSystemCfg_DeleteIfTampered: boolean,
//     wIpCfg_ServerPort: number,
//     wWiegandCfg_OutPulseInterval: number,
//     bTNACfg_TNAKey: number,
//     SysAddrAuthCfg_ModeTZ_Card_and_PIN: string,
//     bDisplayCfg_TimeFormat: number,
//     bDisplayCfg_Language: number,
//     bFingerCfg_TemplateFormat: number,
//     strTNACfg_Label_12: string,
//     strTNACfg_Label_0: string,
//     strIpCfg_ServerIPAddr: string,
//     wWiegandCfg_OutPulseWidth: number,
//     fWiegandCfg_UseWiegandBypass: boolean,
//     bDisplayCfg_BacklightEnabled: number,
//     bDisplayCfg_DateFormat: number,
//     SysAddrCardCfg_CardReader: string,
//     strTNACfg_Label_9: string,
//     SysAddrTNACfg_TZ_15: string,
//     SysAddrTNACfg_TZ_0: string,
//     strIPAddress: string,
//     SysAddrAuthCfg_ModeTZ_ID_and_Biometric_or_PIN: string,
//     SysAddrAuthCfg_ModeTZ_Card_and_Biometric_or_PIN: string,
//     bAuthCfg_SimpleMode_Card: number,
//     bDisplayCfg_MenuAutoLocking: number,
//     SysAddrAuthCfg_ModeTZ_Biomentric: string,
//     fFingerCfg_ShowImage: boolean,
//     SysAddrTNACfg_TZ_5: string,
//     dwID: number,
//     bDisplayCfg_SoundMode: number,
//     fCardCfg_UseSecondaryKey: boolean,
//     SysAddrTNACfg_TZ_11: string,
//     bUploadUsersMode: number,
//     bAuthCfg_SimpleMode_ID: number,
//     SysAddrAuthCfg_ModeTZ_Card_and_Biometric_and_PIN: string,
//     wDisplayCfg_MenuTimeout: number,
//     strName: string,
//     strDesc: string,
//     IsActive: boolean,
//     dtCreateTime: string,
//     dtLastModifyTime: string,
//     strAlias: string
// }
//
// export interface TSupAC2BioStationA2 {
//     strClassID: string,
//     sysAddrID: string,
//     wPort: number,
//     SysAddrAuthCfg_ModeTZ_Biomentric_and_PIN: string,
//     fDisplayCfg_UseVoice: boolean,
//     SysAddrCardCfg_MifareConfig: string,
//     strTNACfg_Label_3: string,
//     fIpCfg_UseServerMode: boolean,
//     SysAddrWDMSettings: string,
//     bFingerCfg_ScanTimeout: number,
//     bTimezoneMode: number,
//     SysAddrTNACfg_TZ_10: string,
//     fFingerCfg_ControlQuality: boolean,
//     bFingerCfg_Sensitivity: number,
//     bCardCfg_DataType: number,
//     bFingerCfg_LFDLevel: number,
//     strTNACfg_Label_10: string,
//     strTNACfg_Label_6: string,
//     SysAddrWiegandCfg_MainFormatsList: string,
//     dwPollTimeout: number,
//     fFingerCfg_SmartSensorMode: boolean,
//     SysAddrTNACfg_TZ_6: string,
//     bCurrStatus: number,
//     SysAddrAuthCfg_ModeTZ_ID_and_PIN: string,
//     SysAddrTNACfg_TZ_9: string,
//     fWiegandCfg_UseFailCode: boolean,
//     SysAddrAuthCfg_ModeTZ_Card_and_Biometric: string,
//     SysAddrAuthCfg_ModeTZ_ID_and_Biometric: string,
//     SysAddrAuthCfg_ModeTZ_Card: string,
//     bDisplayCfg_SoundVolume: number,
//     bFingerCfg_FastMode: number,
//     strTNACfg_Label_14: string,
//     strTNACfg_Label_2: string,
//     fAuthCfg_UseFullAccess: boolean,
//     bAuthCfg_GlobalAPB_FailAction: number,
//     bWiegandCfg_WiegandMode: number,
//     dwReconnectTimeout: number,
//     fActivate: boolean,
//     wDisplayCfg_MsgTimeout: number,
//     SysAddrTNACfg_TZ_13: string,
//     SysAddrTNACfg_TZ_2: string,
//     bTNACfg_TNAMode: number,
//     fRS485Cfg_UseResistance_0: boolean,
//     SysAddrAuthCfg_ModeTZ_ID_and_Biometric_and_PIN: string,
//     bCardCfg_UseWiegandFormat: number,
//     SysAddrCardCfg_IClassConfig: string,
//     strTNACfg_Label_11: string,
//     strTNACfg_Label_5: string,
//     bDisplayCfg_BgTheme: number,
//     SysAddrTNACfg_TZ_7: string,
//     bRS485Cfg_Mode: number,
//     fDisplayCfg_DisplayDateTime: boolean,
//     nTimezoneMode_Value: number,
//     strTNACfg_Label_8: string,
//     SysAddrTNACfg_TZ_14: string,
//     SysAddrTNACfg_TZ_1: string,
//     bAuthCfg_ConfigureMode: number,
//     SysAddrCardCfg_DesfireConfig: string,
//     strTNACfg_Label_15: string,
//     strTNACfg_Label_1: string,
//     SysAddrTNACfg_TZ_8: string,
//     fTNACfg_TNARequired: boolean,
//     bRS485Cfg_BaudRate_0: number,
//     bWiegandCfg_FailCode: number,
//     bAuthCfg_MatchTimeout: number,
//     SysAddrTNACfg_TZ_12: string,
//     SysAddrTNACfg_TZ_3: string,
//     bFingerCfg_SecurityLevel: number,
//     bAuthCfg_AuthTimeout: number,
//     fAuthCfg_UsePrivateAuth: boolean,
//     strTNACfg_Label_4: string,
//     SysAddrWiegandCfg_CSNFormat: string,
//     bAuthCfg_SimpleMode_Biometric: number,
//     SysAddrTNACfg_TZ_4: string,
//     bCardCfg_ByteOrder: number,
//     bDisplayCfg_BacklightTimeout: number,
//     fSystemCfg_DeleteIfTampered: boolean,
//     wIpCfg_ServerPort: number,
//     wWiegandCfg_OutPulseInterval: number,
//     bTNACfg_TNAKey: number,
//     SysAddrAuthCfg_ModeTZ_Card_and_PIN: string,
//     bAuthCfg_FaceDetectionLevel: number,
//     bDisplayCfg_TimeFormat: number,
//     bDisplayCfg_Language: number,
//     bFingerCfg_TemplateFormat: number,
//     strTNACfg_Label_12: string,
//     strTNACfg_Label_0: string,
//     strIpCfg_ServerIPAddr: string,
//     wWiegandCfg_OutPulseWidth: number,
//     fWiegandCfg_UseWiegandBypass: boolean,
//     bDisplayCfg_BacklightEnabled: number,
//     bDisplayCfg_DateFormat: number,
//     SysAddrCardCfg_CardReader: string,
//     strTNACfg_Label_9: string,
//     SysAddrTNACfg_TZ_15: string,
//     SysAddrTNACfg_TZ_0: string,
//     strIPAddress: string,
//     SysAddrAuthCfg_ModeTZ_ID_and_Biometric_or_PIN: string,
//     SysAddrAuthCfg_ModeTZ_Card_and_Biometric_or_PIN: string,
//     bAuthCfg_SimpleMode_Card: number,
//     bDisplayCfg_MenuAutoLocking: number,
//     SysAddrAuthCfg_ModeTZ_Biomentric: string,
//     fFingerCfg_ShowImage: boolean,
//     SysAddrTNACfg_TZ_5: string,
//     dwID: number,
//     bDisplayCfg_SoundMode: number,
//     fCardCfg_UseSecondaryKey: boolean,
//     SysAddrTNACfg_TZ_11: string,
//     bUploadUsersMode: number,
//     bAuthCfg_SimpleMode_ID: number,
//     SysAddrAuthCfg_ModeTZ_Card_and_Biometric_and_PIN: string,
//     wDisplayCfg_MenuTimeout: number,
//     SysAddrWiegandCfg_InputFormatsList: string,
//     strTNACfg_Label_13: string,
//     strTNACfg_Label_7: string,
//     strName: string,
//     strDesc: string,
//     IsActive: boolean,
//     dtCreateTime: string,
//     dtLastModifyTime: string,
//     strAlias: string
// }
//
// export interface TSupAC2WDMCfg {
//     strClassID: string,
//     sysAddrID: string,
//     strWebDrvManagerIP: string,
//     wWebDrvManagerPort: number,
//     strName: string,
//     strDesc: string,
//     IsActive: boolean,
//     dtCreateTime: string,
//     dtLastModifyTime: string,
//     strAlias: string
// }
//
// export interface TSupAC2CardReaderCfg {
//     strClassID: string,
//     sysAddrID: string,
//     dwCardOperationMask: number,
//     strName: string,
//     strDesc: string,
//     IsActive: boolean,
//     dtCreateTime: string,
//     dtLastModifyTime: string,
//     strAlias: string
// }
//
// export interface TApcPermissions {
//     strClassID: string,
//     sysAddrID: string,
//     strName: string,
//     strDesc: string,
//     IsActive: boolean,
//     dtCreateTime: string,
//     dtLastModifyTime: string,
//     strAlias: string
// }
//
// export interface TApcUser {
//     strClassID: string,
//     sysAddrID: string,
//     strName: string,
//     strDesc: string,
//     IsActive: boolean,
//     dtCreateTime: string,
//     dtLastModifyTime: string,
//     strAlias: string,
//     bLoginMode: number,
//     strWinDomain: string,
//     strWinLogin: string,
//     strWinSID: string,
//     strUserLogin: string,
//     fIsUserActive: boolean,
//     strUserPassword: string,
//     sysAddrPermissions: string
// }
//
// export interface TApcTAIntervalType {
//     strClassID: string,
//     sysAddrID: string,
//     strName: string,
//     strDesc: string,
//     IsActive: boolean,
//     dtCreateTime: string,
//     dtLastModifyTime: string,
//     strAlias: string,
//     fCountWT: boolean,
//     fPresence: boolean,
//     fObligatory: boolean
// }
//
// export interface TApcVirtualReader {
//     strClassID: string,
//     sysAddrID: string,
//     strName: string,
//     strDesc: string,
//     IsActive: boolean,
//     dtCreateTime: string,
//     dtLastModifyTime: string,
//     strAlias: string
// }
//
// export interface TApcTAJob {
//     strClassID: string,
//     sysAddrID: string,
//     strName: string,
//     strDesc: string,
//     IsActive: boolean,
//     dtCreateTime: string,
//     dtLastModifyTime: string,
//     strAlias: string,
//     dtStartDate: string,
//     SysAddrSchedule: string,
//     SysAddrWorkZone: string
// }
//
// export interface TApcTAStructException {
//     strClassID: string,
//     sysAddrID: string,
//     strName: string,
//     strDesc: string,
//     IsActive: boolean,
//     dtCreateTime: string,
//     dtLastModifyTime: string,
//     strAlias: string,
//     dScheduleStart: string,
//     dtEnd: string,
//     dtStart: string,
//     SysAddrScheduleSysAddr: string
// }
//
// export interface TApcDepartment {
//     strClassID: string,
//     sysAddrID: string,
//     strName: string,
//     strDesc: string,
//     IsActive: boolean,
//     dtCreateTime: string,
//     dtLastModifyTime: string,
//     strAlias: string
// }
//
// export interface TApcJobTitle {
//     strClassID: string,
//     sysAddrID: string,
//     strName: string,
//     strDesc: string,
//     IsActive: boolean,
//     dtCreateTime: string,
//     dtLastModifyTime: string,
//     strAlias: string
// }
//
// export interface TApcAccount2HolderLink {
//     strClassID: string,
//     sysAddrID: string,
//     strName: string,
//     strAlias: string,
//     dtLastModifyTime: string,
//     dtCreateTime: string,
//     IsActive: boolean,
//     strDesc: string,
//     SysAddrAccount: string
// }
//
// export interface TApcTAJob2HolderLink {
//     strClassID: string,
//     sysAddrID: string,
//     strName: string,
//     strDesc: string,
//     IsActive: boolean,
//     dtCreateTime: string,
//     dtLastModifyTime: string,
//     strAlias: string,
//     fFinished: boolean,
//     dtEnd: string,
//     dtStart: string,
//     fUseScheduleStart: boolean,
//     dtScheduleStart: string,
//     SysAddrJobSysAddr: string
// }
//
// export interface TApcCHMainPhoto {
//     strClassID: string,
//     sysAddrID: string,
//     strName: string,
//     strAlias: string,
//     dtLastModifyTime: string,
//     dtCreateTime: string,
//     IsActive: boolean,
//     strDesc: string,
//     binBufPhoto: string
// }
//
// export interface TSupAC2InputTTL {
//     strClassID: string,
//     sysAddrID: string,
//     dwID: number,
//     strName: string,
//     strDesc: string,
//     IsActive: boolean,
//     dtCreateTime: string,
//     dtLastModifyTime: string,
//     strAlias: string
// }
//
// export interface TSupAC2Tamper {
//     strClassID: string,
//     sysAddrID: string,
//     dwID: number,
//     strName: string,
//     strDesc: string,
//     IsActive: boolean,
//     dtCreateTime: string,
//     dtLastModifyTime: string,
//     strAlias: string
// }
//
// export interface TSupAC2ReaderCntr {
//     strClassID: string,
//     sysAddrID: string,
//     dwID: number,
//     strName: string,
//     strDesc: string,
//     IsActive: boolean,
//     dtCreateTime: string,
//     dtLastModifyTime: string,
//     strAlias: string
// }
//
// export interface TSupAC2AccessList {
//     strClassID: string,
//     sysAddrID: string,
//     dwID: number,
//     strName: string,
//     strDesc: string,
//     IsActive: boolean,
//     dtCreateTime: string,
//     dtLastModifyTime: string,
//     strAlias: string
// }
//
// export interface TSupAC2AL {
//     strClassID: string,
//     sysAddrID: string,
//     dwID: number,
//     strName: string,
//     strDesc: string,
//     IsActive: boolean,
//     dtCreateTime: string,
//     dtLastModifyTime: string,
//     strAlias: string
// }
//
// export interface TSupAC2WiegandFormatsList {
//     strClassID: string,
//     sysAddrID: string,
//     SysAddrFormat_4: string,
//     SysAddrFormat_14: string,
//     SysAddrFormat_5: string,
//     SysAddrFormat_13: string,
//     SysAddrFormat_2: string,
//     dwID: number,
//     SysAddrFormat_12: string,
//     SysAddrFormat_3: string,
//     SysAddrFormat_11: string,
//     SysAddrFormat_8: string,
//     SysAddrFormat_0: string,
//     SysAddrFormat_10: string,
//     SysAddrFormat_9: string,
//     SysAddrFormat_1: string,
//     SysAddrFormat_6: string,
//     SysAddrFormat_7: string,
//     strName: string,
//     strDesc: string,
//     IsActive: boolean,
//     dtCreateTime: string,
//     dtLastModifyTime: string,
//     strAlias: string
// }
//
// export interface TSupAC2WiegandFormat {
//     strClassID: string,
//     sysAddrID: string,
//     bParityPosition_3: number,
//     bParityLength_1: number,
//     bParityStartingBit_1: number,
//     wCardNumberLength: number,
//     bCardNumberStartingBit: number,
//     bParityPosition_2: number,
//     bParityLength_2: number,
//     bParityStartingBit_0: number,
//     bFacilityLength: number,
//     wLength: number,
//     bParityType_0: number,
//     bParityLength_3: number,
//     bParityStartingBit_3: number,
//     bFormatType: number,
//     dwID: number,
//     bParityType_1: number,
//     bParityStartingBit_2: number,
//     bFacilityStartingBit: number,
//     bParityType_2: number,
//     bParityType_3: number,
//     bParityPosition_1: number,
//     bParityPosition_0: number,
//     bParityLength_0: number,
//     strName: string,
//     strDesc: string,
//     IsActive: boolean,
//     dtCreateTime: string,
//     dtLastModifyTime: string,
//     strAlias: string
// }
//
// export interface TSupAC2TZ {
//     strClassID: string,
//     sysAddrID: string,
//     SysAddrHoliday0: string,
//     blobIntervalBlobsHoliday2: string,
//     SysAddrHoliday1: string,
//     bNumOfDays: number,
//     dStartDate: string,
//     blobIntervalBlobsHoliday3: string,
//     blobDaysTimeIntervalBlobs: string,
//     bTZType: number,
//     dwID: number,
//     blobIntervalBlobsHoliday0: string,
//     blobIntervalBlobsHoliday1: string,
//     SysAddrHoliday2: string,
//     SysAddrHoliday3: string,
//     strName: string,
//     strDesc: string,
//     IsActive: boolean,
//     dtCreateTime: string,
//     dtLastModifyTime: string,
//     strAlias: string
// }
//
// export interface TSupAC2Relay {
//     strClassID: string,
//     sysAddrID: string,
//     dwID: number,
//     strName: string,
//     strDesc: string,
//     IsActive: boolean,
//     dtCreateTime: string,
//     dtLastModifyTime: string,
//     strAlias: string
// }
//
// export interface TSupAC2Door {
//     strClassID: string,
//     sysAddrID: string,
//     SysAddrDualAuthApprovalGroup_5: string,
//     dwHeldOpenTimeout: number,
//     SysAddrDualAuthApprovalGroup_10: string,
//     SysAddrDualAuthApprovalGroup_4: string,
//     fInstantLock: boolean,
//     bDoorSensorSwitchType: number,
//     SysAddrRelay: string,
//     dwID: number,
//     SysAddrDualAuthApprovalGroup_11: string,
//     SysAddrDualAuthApprovalGroup_3: string,
//     SysAddrEntryDevice: string,
//     SysAddrDualAuthApprovalGroup_12: string,
//     SysAddrDualAuthApprovalGroup_2: string,
//     dwDualAuthTimeout: number,
//     bDualAuthDevice: number,
//     SysAddrDualAuthApprovalGroup_13: string,
//     SysAddrDualAuthApprovalGroup_9: string,
//     SysAddrDualAuthApprovalGroup_1: string,
//     SysAddrExitButton: string,
//     SysAddrDoorSensor: string,
//     SysAddrExitDevice: string,
//     bCurrStatus: number,
//     SysAddrDualAuthApprovalGroup_14: string,
//     SysAddrDualAuthApprovalGroup_8: string,
//     SysAddrDualAuthApprovalGroup_0: string,
//     fDualAuthApprovalEnabled: boolean,
//     bExitButtonSwitchType: number,
//     SysAddrDualAuthApprovalGroup_15: string,
//     SysAddrDualAuthApprovalGroup_7: string,
//     fUnconditionalLock: boolean,
//     dwAutoLockTimeout: number,
//     SysAddrDualAuthApprovalGroup_6: string,
//     SysAddrDualAuthTZ: string,
//     strName: string,
//     strDesc: string,
//     IsActive: boolean,
//     dtCreateTime: string,
//     dtLastModifyTime: string,
//     strAlias: string
// }
//
// export interface TApcApplRecord {
//     strClassID: string,
//     sysAddrID: string,
//     strName: string,
//     strDesc: string,
//     IsActive: boolean,
//     dtCreateTime: string,
//     dtLastModifyTime: string,
//     strAlias: string,
//     strApplType: string,
//     fAllowMultiInstance: boolean,
//     fActive: boolean,
//     bReconnectType: number,
//     fAutoReconnect: boolean
// }
//
// export interface TApcTAShiftMException {
//     strClassID: string,
//     sysAddrID: string,
//     strName: string,
//     strDesc: string,
//     IsActive: boolean,
//     dtCreateTime: string,
//     dtLastModifyTime: string,
//     strAlias: string,
//     fCount: boolean,
//     fChangeType: boolean,
//     fSimpleSettings: boolean,
//     strComment: string,
//     dtEnd: string,
//     dtStart: string,
//     SysAddrType: string
// }
//
// export interface TSupAC2AccessListElem {
//     strClassID: string,
//     sysAddrID: string,
//     dwID: number,
//     SysAddrAL: string,
//     strName: string,
//     strDesc: string,
//     IsActive: boolean,
//     dtCreateTime: string,
//     dtLastModifyTime: string,
//     strAlias: string
// }
//
// export interface TSupAC2ALElem {
//     strClassID: string,
//     sysAddrID: string,
//     dwID: number,
//     SysAddrDoor: string,
//     SysAddrTZ: string,
//     strName: string,
//     strDesc: string,
//     IsActive: boolean,
//     dtCreateTime: string,
//     dtLastModifyTime: string,
//     strAlias: string
// }
//
// export interface TSupAC2DoorContactStatus {
//     strClassID: string,
//     sysAddrID: string,
//     bCurrStatus: number,
//     strName: string,
//     strDesc: string,
//     IsActive: boolean,
//     dtCreateTime: string,
//     dtLastModifyTime: string,
//     strAlias: string
// }
//
// export interface TSupAC2DoorHeldOpenStatus {
//     strClassID: string,
//     sysAddrID: string,
//     bCurrStatus: number,
//     strName: string,
//     strDesc: string,
//     IsActive: boolean,
//     dtCreateTime: string,
//     dtLastModifyTime: string,
//     strAlias: string
// }
//
// export interface TSupAC2DoorLockStatus {
//     strClassID: string,
//     sysAddrID: string,
//     bCurrStatus: number,
//     strName: string,
//     strDesc: string,
//     IsActive: boolean,
//     dtCreateTime: string,
//     dtLastModifyTime: string,
//     strAlias: string
// }
//
// export interface TSupAC2DoorForcedOpenStatus {
//     strClassID: string,
//     sysAddrID: string,
//     bCurrStatus: number,
//     strName: string,
//     strDesc: string,
//     IsActive: boolean,
//     dtCreateTime: string,
//     dtLastModifyTime: string,
//     strAlias: string
// }
