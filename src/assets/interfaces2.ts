// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcAbstrObjExt\Registrar\tApcFile.xml
export interface TApcFile {
    strClassID: String;
    sysAddrID: String;
    blobData: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcAbstrObjExt\Registrar\tApcTAJob2HolderLink.xml
export interface TApcTAJob2HolderLink {
    strClassID: String;
    sysAddrID: String;
    dtStart: String;
    dtEnd: String;
    SysAddrJobSysAddr: String;
    fFinished: Boolean;
    fUseScheduleStart: Boolean;
    dtScheduleStart: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcAbstrObjExt\Registrar\tApcTAShiftMException.xml
export interface TApcTAShiftMException {
    strClassID: String;
    sysAddrID: String;
    dtStart: String;
    dtEnd: String;
    fChangeType: Boolean;
    SysAddrType: String;
    strComment: String;
    fCount: Boolean;
    fSimpleSettings: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcAbstrObjExt\Registrar\tApcTAStructException.xml
export interface TApcTAStructException {
    strClassID: String;
    sysAddrID: String;
    dtStart: String;
    dtEnd: String;
    SysAddrScheduleSysAddr: String;
    dScheduleStart: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcAbstrObjExt\Registrar\tApcTATimeMException.xml
export interface TApcTATimeMException {
    strClassID: String;
    sysAddrID: String;
    dtStart: String;
    dtEnd: String;
    fChangeType: Boolean;
    SysAddrType: String;
    strComment: String;
    fPlus: Boolean;
    tTime: String;
    fNoTolerance: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4AccessPoint.xml
export interface TApcASP4AccessPoint {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bNumber: Number;
    bInitMode: Number;
    SysAddrZone1: String;
    SysAddrZone2: String;
    wShortStrikeTime: Number;
    wLongStrikeTime: Number;
    wShortHeldOpenTime: Number;
    wLongHeldOpenTime: Number;
    fHeldOpenMask: Boolean;
    fForcedOpenMask: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4AL.xml
export interface TApcASP4AL {
    strClassID: String;
    sysAddrID: String;
    wNumber: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4ALElem.xml
export interface TApcASP4ALElem {
    strClassID: String;
    sysAddrID: String;
    SysAddrALObject: String;
    SysAddrTZ: String;
    fHostGrantFlag: Boolean;
    bHostGrantValue: Number;
    fHostDenyFlag: Boolean;
    bHostDenyValue: Number;
    fSoftAPBFlag: Boolean;
    bSoftAPBValue: Number;
    fAPBExemptFlag: Boolean;
    bAPBExemptValue: Number;
    fEnterClosedAreaFlag: Boolean;
    bEnterClosedAreaValue: Number;
    fVisitorEscortFlag: Boolean;
    bVisitorEscortValue: Number;
    fUnlockReaderFlag: Boolean;
    bUnlockReaderValue: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4APBZone.xml
export interface TApcASP4APBZone {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    wNumber: Number;
    fCloseZone: Boolean;
    fAPBExempt: Boolean;
    bThreatLevel: Number;
    dwTimedAPB: Number;
    wMinOccupancy: Number;
    wMaxOccupancy: Number;
    wLimitOccupancy: Number;
    wRequiredOccupancy: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4CardFormatList.xml
export interface TApcASP4CardFormatList {
    strClassID: String;
    sysAddrID: String;
    bNumber: Number;
    SysAddrFormat_0: String;
    SysAddrFormat_1: String;
    SysAddrFormat_2: String;
    SysAddrFormat_3: String;
    SysAddrFormat_4: String;
    SysAddrFormat_5: String;
    SysAddrFormat_6: String;
    SysAddrFormat_7: String;
    SysAddrFormat_8: String;
    SysAddrFormat_9: String;
    SysAddrFormat_10: String;
    SysAddrFormat_11: String;
    SysAddrFormat_12: String;
    SysAddrFormat_13: String;
    SysAddrFormat_14: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4CmnInput.xml
export interface TApcASP4CmnInput {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bNumber: Number;
    fMaskedFlag: Boolean;
    bNormalState: Number;
    fConfiguredFlag: Boolean;
    fLatchedFlag: Boolean;
    fAckFlag: Boolean;
    bAckReptTO: Number;
    dwEntranceDelay: Number;
    dwExitDelay: Number;
    SysAddrMaskTZ: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4ContrInput.xml
export interface TApcASP4ContrInput {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bNumber: Number;
    fMaskedFlag: Boolean;
    bNormalState: Number;
    fAckFlag: Boolean;
    bAckReptTO: Number;
    SysAddrMaskTZ: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4DoorContact.xml
export interface TApcASP4DoorContact {
    strClassID: String;
    sysAddrID: String;
    SysAddrHWComponent: String;
    bNumber: Number;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4EPB.xml
export interface TApcASP4EPB {
    strClassID: String;
    sysAddrID: String;
    SysAddrHWComponent: String;
    bNumber: Number;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4Holiday.xml
export interface TApcASP4Holiday {
    strClassID: String;
    sysAddrID: String;
    wNumber: Number;
    dHolidayDate: String;
    blobHolidayTypes: String;
    fPermanent: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4HolidayType.xml
export interface TApcASP4HolidayType {
    strClassID: String;
    sysAddrID: String;
    wNumber: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4HWInterf.xml
export interface TApcASP4HWInterf {
    strClassID: String;
    sysAddrID: String;
    fActivate: Boolean;
    dwSerialPort1Baud: Number;
    bSerialPort1Mode: Number;
    bTXDSettleDelay1: Number;
    bContrTO1: Number;
    wPollTO1: Number;
    bInterCharTO1: Number;
    wOfflineTO1: Number;
    dwSerialPort2Baud: Number;
    bSerialPort2Mode: Number;
    bTXDSettleDelay2: Number;
    bContrTO2: Number;
    wPollTO2: Number;
    bInterCharTO2: Number;
    wOfflineTO2: Number;
    bCurrStatus: Number;
    strNodeName: String;
    bNodeID: Number;
    fEnableWillGrantEvent: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4MasterBoard.xml
export interface TApcASP4MasterBoard {
    strClassID: String;
    sysAddrID: String;
    fActivate: Boolean;
    bCurrStatus: Number;
    bNodeID: Number;
    bHostAccessTO: Number;
    bDuressOffset: Number;
    fCardActivateDT: Boolean;
    fCardDeactivateDT: Boolean;
    fEveryDayActTime: Boolean;
    fEveryDayDeactTime: Boolean;
    fALActivateDT: Boolean;
    fALDeactivateDT: Boolean;
    fThreatLevel: Boolean;
    fPIN: Boolean;
    fUseFastPIN: Boolean;
    fIssueCode: Boolean;
    fUseZoneAPB: Boolean;
    fUseTimeAPB: Boolean;
    fUseEscortVisitorMode: Boolean;
    fUseUseLimit: Boolean;
    fUseCardNumber: Boolean;
    bPermissionCount: Number;
    SysAddrResetAPBTimeZone: String;
    wInitialThreatLevel: Number;
    fCardFormat: Boolean;
    fFlags: Boolean;
    fAlternativeTimeFlag: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4OSDPDevice.xml
export interface TApcASP4OSDPDevice {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bNumber: Number;
    fActivate: Boolean;
    bPortNumber: Number;
    bDeviceLogicAddr: Number;
    fUseSecureConnection: Boolean;
    fDisableSCBKD: Boolean;
    strSecuredModePwd: String;
    strAltSecuredModePwd: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4OSDPInput.xml
export interface TApcASP4OSDPInput {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bNumber: Number;
    fMaskedFlag: Boolean;
    bNormalState: Number;
    fConfiguredFlag: Boolean;
    fLatchedFlag: Boolean;
    fAckFlag: Boolean;
    bAckReptTO: Number;
    dwEntranceDelay: Number;
    dwExitDelay: Number;
    SysAddrMaskTZ: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4OSDPRelay.xml
export interface TApcASP4OSDPRelay {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bNumber: Number;
    fPulseAtTZStart: Boolean;
    fPulseAtTZEnd: Boolean;
    fTurnOnWhileTZActive: Boolean;
    fConfigured: Boolean;
    SysAddrControlTZ: String;
    wPulseDuration: Number;
    fInitialState: Boolean;
    fRelayOffTerminatesPulse: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4Reader.xml
export interface TApcASP4Reader {
    strClassID: String;
    sysAddrID: String;
    bNumber: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4ReaderWrap.xml
export interface TApcASP4ReaderWrap {
    strClassID: String;
    sysAddrID: String;
    bNumber: Number;
    bCurrStatus: Number;
    bThreatLevel: Number;
    dwTimedAPB: Number;
    bNextTO: Number;
    bSignalType: Number;
    bNumOfCards: Number;
    bReaderMode: Number;
    bUseLimit: Number;
    fUseCardFormatList: Boolean;
    SysAddrCardFormatList: String;
    fDenyAccessUnderDuress: Boolean;
    fHostRequestOnDeny: Boolean;
    fHostRequestOnNotInFile: Boolean;
    fHostRequestOnGrant: Boolean;
    fDenyOnHostRequestTimeout: Boolean;
    fSabbathMode: Boolean;
    fDisableKeyEcho: Boolean;
    fDisableAccessPointCtrl: Boolean;
    fEnableHeldOpenAlarm: Boolean;
    SysAddrReaderLink: String;
    bReaderDir: Number;
    blobFacilityStrikes: String;
    dwCypherCode: Number;
    SysAddrCtrlTimeZone: String;
    bTZStartMode: Number;
    bTZEndMode: Number;
    dwLockTimeout: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4Relay.xml
export interface TApcASP4Relay {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bNumber: Number;
    fPulseAtTZStart: Boolean;
    fPulseAtTZEnd: Boolean;
    fTurnOnWhileTZActive: Boolean;
    fConfigured: Boolean;
    SysAddrControlTZ: String;
    wPulseDuration: Number;
    fInitialState: Boolean;
    fRelayOffTerminatesPulse: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4RelayModule.xml
export interface TApcASP4RelayModule {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bNumber: Number;
    fPulseAtTZStart: Boolean;
    fPulseAtTZEnd: Boolean;
    fTurnOnWhileTZActive: Boolean;
    fConfigured: Boolean;
    SysAddrControlTZ: String;
    wPulseDuration: Number;
    fInitialState: Boolean;
    fRelayOffTerminatesPulse: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4RelayWrap.xml
export interface TApcASP4RelayWrap {
    strClassID: String;
    sysAddrID: String;
    SysAddrHWComponent: String;
    bNumber: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4Script.xml
export interface TApcASP4Script {
    strClassID: String;
    sysAddrID: String;
    blobScript: String;
    wNumber: Number;
    fAutoStart: Boolean;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4Socket.xml
export interface TApcASP4Socket {
    strClassID: String;
    sysAddrID: String;
    strIPAddress: String;
    wPort: Number;
    dwReadTO: Number;
    dwReconnectTO: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4Strike.xml
export interface TApcASP4Strike {
    strClassID: String;
    sysAddrID: String;
    bNumber: Number;
    fFireStrike: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4TimeZone.xml
export interface TApcASP4TimeZone {
    strClassID: String;
    sysAddrID: String;
    wNumber: Number;
    dStartDate: String;
    bCycleLength: Number;
    blobIntervalsBlob: String;
    blobHolidayIntervals: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4VGroup.xml
export interface TApcASP4VGroup {
    strClassID: String;
    sysAddrID: String;
    wNumber: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4VGroupList.xml
export interface TApcASP4VGroupList {
    strClassID: String;
    sysAddrID: String;
    bNumber: Number;
    SysAddrVisitorGroup0: String;
    SysAddrVisitorGroup1: String;
    SysAddrVisitorGroup2: String;
    SysAddrVisitorGroup3: String;
    SysAddrVisitorGroup4: String;
    SysAddrVisitorGroup5: String;
    SysAddrVisitorGroup6: String;
    SysAddrVisitorGroup7: String;
    SysAddrVisitorGroup8: String;
    SysAddrVisitorGroup9: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4WCardFormat.xml
export interface TApcASP4WCardFormat {
    strClassID: String;
    sysAddrID: String;
    bNumber: Number;
    wLength: Number;
    bFacilityStartingBit: Number;
    bFacilityLength: Number;
    bCardNumberStartingBit: Number;
    wCardNumberLength: Number;
    dwFacilityCodeValue: Number;
    bBitsCountEvenParity: Number;
    bBitsCountOddParity: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4ZoneGroup.xml
export interface TApcASP4ZoneGroup {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    wNumber: Number;
    SysAddrParentZone: String;
    fMaskedFlag: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4ZoneGroupElem.xml
export interface TApcASP4ZoneGroupElem {
    strClassID: String;
    sysAddrID: String;
    SysAddrInputLink: String;
    wNumber: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcAxisDriver\Registrar\tApcAxisCamera.xml
export interface TApcAxisCamera {
    strClassID: String;
    sysAddrID: String;
    dwNumber: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcAxisDriver\Registrar\tApcAxisServer.xml
export interface TApcAxisServer {
    strClassID: String;
    sysAddrID: String;
    strIpAddress: String;
    strUserName: String;
    strPassword: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidInput.xml
export interface TApcBolidInput {
    strClassID: String;
    sysAddrID: String;
    bInputNum: Number;
    wCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidPotok_3N.xml
export interface TApcBolidPotok_3N {
    strClassID: String;
    sysAddrID: String;
    dwAddress: Number;
    wCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidRelay.xml
export interface TApcBolidRelay {
    strClassID: String;
    sysAddrID: String;
    bRelayNum: Number;
    bDelay: Number;
    wCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidRIP_12_2A_RS.xml
export interface TApcBolidRIP_12_2A_RS {
    strClassID: String;
    sysAddrID: String;
    dwAddress: Number;
    wCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidRIP_12_RS.xml
export interface TApcBolidRIP_12_RS {
    strClassID: String;
    sysAddrID: String;
    dwAddress: Number;
    wCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidRIP_24_2A_RS.xml
export interface TApcBolidRIP_24_2A_RS {
    strClassID: String;
    sysAddrID: String;
    dwAddress: Number;
    wCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidRupor.xml
export interface TApcBolidRupor {
    strClassID: String;
    sysAddrID: String;
    dwAddress: Number;
    wCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidRuporv01.xml
export interface TApcBolidRuporv01 {
    strClassID: String;
    sysAddrID: String;
    dwAddress: Number;
    wCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidRupor_200.xml
export interface TApcBolidRupor_200 {
    strClassID: String;
    sysAddrID: String;
    dwAddress: Number;
    wCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidS2000KSPult.xml
export interface TApcBolidS2000KSPult {
    strClassID: String;
    sysAddrID: String;
    bPultNumber: Number;
    wCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidS2000MPult.xml
export interface TApcBolidS2000MPult {
    strClassID: String;
    sysAddrID: String;
    bPultNumber: Number;
    wCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidS2000Pult.xml
export interface TApcBolidS2000Pult {
    strClassID: String;
    sysAddrID: String;
    bPultNumber: Number;
    wCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidS2000_2.xml
export interface TApcBolidS2000_2 {
    strClassID: String;
    sysAddrID: String;
    dwAddress: Number;
    wCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidS2000_4.xml
export interface TApcBolidS2000_4 {
    strClassID: String;
    sysAddrID: String;
    dwAddress: Number;
    wCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidS2000_Adem.xml
export interface TApcBolidS2000_Adem {
    strClassID: String;
    sysAddrID: String;
    dwAddress: Number;
    wCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidS2000_ASPT.xml
export interface TApcBolidS2000_ASPT {
    strClassID: String;
    sysAddrID: String;
    dwAddress: Number;
    wCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidS2000_BI.xml
export interface TApcBolidS2000_BI {
    strClassID: String;
    sysAddrID: String;
    dwAddress: Number;
    wCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidS2000_BIv01.xml
export interface TApcBolidS2000_BIv01 {
    strClassID: String;
    sysAddrID: String;
    dwAddress: Number;
    wCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidS2000_BKI.xml
export interface TApcBolidS2000_BKI {
    strClassID: String;
    sysAddrID: String;
    dwAddress: Number;
    wCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidS2000_IT.xml
export interface TApcBolidS2000_IT {
    strClassID: String;
    sysAddrID: String;
    dwAddress: Number;
    wCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidS2000_K.xml
export interface TApcBolidS2000_K {
    strClassID: String;
    sysAddrID: String;
    dwAddress: Number;
    wCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidS2000_KC.xml
export interface TApcBolidS2000_KC {
    strClassID: String;
    sysAddrID: String;
    dwAddress: Number;
    wCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidS2000_KDL.xml
export interface TApcBolidS2000_KDL {
    strClassID: String;
    sysAddrID: String;
    dwAddress: Number;
    wCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidS2000_KDL_2I.xml
export interface TApcBolidS2000_KDL_2I {
    strClassID: String;
    sysAddrID: String;
    dwAddress: Number;
    wCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidS2000_KPB.xml
export interface TApcBolidS2000_KPB {
    strClassID: String;
    sysAddrID: String;
    dwAddress: Number;
    wCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidS2000_PCN.xml
export interface TApcBolidS2000_PCN {
    strClassID: String;
    sysAddrID: String;
    dwAddress: Number;
    wCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidS2000_PGE.xml
export interface TApcBolidS2000_PGE {
    strClassID: String;
    sysAddrID: String;
    dwAddress: Number;
    wCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidS2000_PT.xml
export interface TApcBolidS2000_PT {
    strClassID: String;
    sysAddrID: String;
    dwAddress: Number;
    wCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidSerialPort.xml
export interface TApcBolidSerialPort {
    strClassID: String;
    sysAddrID: String;
    bPortNumber: Number;
    bProtocolType: Number;
    bConverterType: Number;
    dwBaudRate: Number;
    bPriority: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidSignal10.xml
export interface TApcBolidSignal10 {
    strClassID: String;
    sysAddrID: String;
    dwAddress: Number;
    wCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidSignal20.xml
export interface TApcBolidSignal20 {
    strClassID: String;
    sysAddrID: String;
    dwAddress: Number;
    wCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidSignal20M.xml
export interface TApcBolidSignal20M {
    strClassID: String;
    sysAddrID: String;
    dwAddress: Number;
    wCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidSignal20P.xml
export interface TApcBolidSignal20P {
    strClassID: String;
    sysAddrID: String;
    dwAddress: Number;
    wCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidSignal20ser02.xml
export interface TApcBolidSignal20ser02 {
    strClassID: String;
    sysAddrID: String;
    dwAddress: Number;
    wCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidSocketDrv.xml
export interface TApcBolidSocketDrv {
    strClassID: String;
    sysAddrID: String;
    strIPServer: String;
    dwPortServer: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidUO_4S.xml
export interface TApcBolidUO_4S {
    strClassID: String;
    sysAddrID: String;
    dwAddress: Number;
    wCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidXMLRPCSettings.xml
export interface TApcBolidXMLRPCSettings {
    strClassID: String;
    sysAddrID: String;
    fActivate: Boolean;
    strLogin: String;
    strPassword: String;
    wCallbackEventPort: Number;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcISSExt\Registrar\tApcISSCam.xml
export interface TApcISSCam {
    strClassID: String;
    sysAddrID: String;
    dwNumber: Number;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcISSExt\Registrar\tApcISSGrabber.xml
export interface TApcISSGrabber {
    strClassID: String;
    sysAddrID: String;
    dwNumber: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcISSExt\Registrar\tApcISSSocketDrv.xml
export interface TApcISSSocketDrv {
    strClassID: String;
    sysAddrID: String;
    fActivate: Boolean;
    strIPServer: String;
    strPassword: String;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcITVExt\Registrar\tApcITVCam.xml
export interface TApcITVCam {
    strClassID: String;
    sysAddrID: String;
    dwNumber: Number;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcITVExt\Registrar\tApcITVCamZone.xml
export interface TApcITVCamZone {
    strClassID: String;
    sysAddrID: String;
    dwNumber: Number;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcITVExt\Registrar\tApcITVGrabber.xml
export interface TApcITVGrabber {
    strClassID: String;
    sysAddrID: String;
    dwNumber: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcITVExt\Registrar\tApcITVSocketDrv.xml
export interface TApcITVSocketDrv {
    strClassID: String;
    sysAddrID: String;
    fActivate: Boolean;
    strIPServer: String;
    strPassword: String;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelACU100.xml
export interface TApcSatelACU100 {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bAddress: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelAdmin.xml
export interface TApcSatelAdmin {
    strClassID: String;
    sysAddrID: String;
    strUserName: String;
    bUserNum: Number;
    strAccCode: String;
    strPhoneCode: String;
    bUserType: Number;
    fArm: Boolean;
    fDisarm: Boolean;
    fACOwnPartn: Boolean;
    fACOwnObj: Boolean;
    fACSystem: Boolean;
    fArmDeffer: Boolean;
    fCodeChange: Boolean;
    fUsetEdit: Boolean;
    fZoneBypass: Boolean;
    fClockSet: Boolean;
    fTroubleView: Boolean;
    fEventView: Boolean;
    fZoneReset: Boolean;
    fOptionChange: Boolean;
    fTests: Boolean;
    fDownload: Boolean;
    fAlwaysDisarm: Boolean;
    fVocMsgClear: Boolean;
    fUseGuardX: Boolean;
    fAccBlockPartn: Boolean;
    fEnter1Code: Boolean;
    fEnter2Code: Boolean;
    fOutControl: Boolean;
    fClearLatchOut: Boolean;
    bUserTime: Number;
    bUserSchedule: Number;
    fUseProxCard: Boolean;
    strProxCardNum: String;
    fUseDallasCard: Boolean;
    strDallasCardNum: String;
    fUseTime: Boolean;
    bPartBlockTime: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelCA64ADR.xml
export interface TApcSatelCA64ADR {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bAddress: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelCA64DR.xml
export interface TApcSatelCA64DR {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bAddress: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelCA64E.xml
export interface TApcSatelCA64E {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bAddress: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelCA64Ei.xml
export interface TApcSatelCA64Ei {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bAddress: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelCA64EPS.xml
export interface TApcSatelCA64EPS {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bAddress: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelCA64EPSi.xml
export interface TApcSatelCA64EPSi {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bAddress: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelCA64O.xml
export interface TApcSatelCA64O {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bAddress: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelCA64OPS.xml
export interface TApcSatelCA64OPS {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bAddress: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelCA64PP.xml
export interface TApcSatelCA64PP {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bAddress: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelCA64PTSA.xml
export interface TApcSatelCA64PTSA {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bAddress: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelCA64SM.xml
export interface TApcSatelCA64SM {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bAddress: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelCA64SR.xml
export interface TApcSatelCA64SR {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bAddress: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelContrInput.xml
export interface TApcSatelContrInput {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bInputNum: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelDoorInput.xml
export interface TApcSatelDoorInput {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bInputNum: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelETHM1.xml
export interface TApcSatelETHM1 {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bAddress: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelExtenderLink.xml
export interface TApcSatelExtenderLink {
    strClassID: String;
    sysAddrID: String;
    SysAddrExtender: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelInput.xml
export interface TApcSatelInput {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bInputNum: Number;
    bRealInputNum: Number;
    bInputType: Number;
    fActive: Boolean;
    fConfigured: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelInputLink.xml
export interface TApcSatelInputLink {
    strClassID: String;
    sysAddrID: String;
    SysAddrInput: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelInputR.xml
export interface TApcSatelInputR {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bInputNum: Number;
    bRealInputNum: Number;
    bInputType: Number;
    fActive: Boolean;
    fConfigured: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelInputsGroup.xml
export interface TApcSatelInputsGroup {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bAddress: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelIntegra128.xml
export interface TApcSatelIntegra128 {
    strClassID: String;
    sysAddrID: String;
    fActivate: Boolean;
    bCurrStatus: Number;
    bUniqueID: Number;
    bControlMode: Number;
    bCfgMode: Number;
    SysAddrControlUser: String;
    SysAddrCfgUser: String;
    fUsePrefix: Boolean;
    strStdPrefix: String;
    wFirstCodeTO: Number;
    fLoadCfg: Boolean;
    dwLastEvIndex: Number;
    blobEventsRead: String;
    blobInputExtOrder: String;
    blobRelayExtOrder: String;
    blobCurrUserCode: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelIntegra128WRL.xml
export interface TApcSatelIntegra128WRL {
    strClassID: String;
    sysAddrID: String;
    fActivate: Boolean;
    bCurrStatus: Number;
    bUniqueID: Number;
    bControlMode: Number;
    bCfgMode: Number;
    SysAddrControlUser: String;
    SysAddrCfgUser: String;
    fUsePrefix: Boolean;
    strStdPrefix: String;
    wFirstCodeTO: Number;
    fLoadCfg: Boolean;
    dwLastEvIndex: Number;
    blobEventsRead: String;
    blobInputExtOrder: String;
    blobRelayExtOrder: String;
    blobCurrUserCode: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelIntegra24.xml
export interface TApcSatelIntegra24 {
    strClassID: String;
    sysAddrID: String;
    fActivate: Boolean;
    bCurrStatus: Number;
    bUniqueID: Number;
    bControlMode: Number;
    bCfgMode: Number;
    SysAddrControlUser: String;
    SysAddrCfgUser: String;
    fUsePrefix: Boolean;
    strStdPrefix: String;
    wFirstCodeTO: Number;
    fLoadCfg: Boolean;
    dwLastEvIndex: Number;
    blobEventsRead: String;
    blobInputExtOrder: String;
    blobRelayExtOrder: String;
    blobCurrUserCode: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelIntegra32.xml
export interface TApcSatelIntegra32 {
    strClassID: String;
    sysAddrID: String;
    fActivate: Boolean;
    bCurrStatus: Number;
    bUniqueID: Number;
    bControlMode: Number;
    bCfgMode: Number;
    SysAddrControlUser: String;
    SysAddrCfgUser: String;
    fUsePrefix: Boolean;
    strStdPrefix: String;
    wFirstCodeTO: Number;
    fLoadCfg: Boolean;
    dwLastEvIndex: Number;
    blobEventsRead: String;
    blobInputExtOrder: String;
    blobRelayExtOrder: String;
    blobCurrUserCode: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelIntegra64.xml
export interface TApcSatelIntegra64 {
    strClassID: String;
    sysAddrID: String;
    fActivate: Boolean;
    bCurrStatus: Number;
    bUniqueID: Number;
    bControlMode: Number;
    bCfgMode: Number;
    SysAddrControlUser: String;
    SysAddrCfgUser: String;
    fUsePrefix: Boolean;
    strStdPrefix: String;
    wFirstCodeTO: Number;
    fLoadCfg: Boolean;
    dwLastEvIndex: Number;
    blobEventsRead: String;
    blobInputExtOrder: String;
    blobRelayExtOrder: String;
    blobCurrUserCode: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelINTENT.xml
export interface TApcSatelINTENT {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bAddress: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelINTIORS.xml
export interface TApcSatelINTIORS {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bAddress: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelINTIT.xml
export interface TApcSatelINTIT {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bAddress: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelINTKLCD.xml
export interface TApcSatelINTKLCD {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bAddress: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelINTKLCDR.xml
export interface TApcSatelINTKLCDR {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bAddress: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelINTORS.xml
export interface TApcSatelINTORS {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bAddress: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelINTRS.xml
export interface TApcSatelINTRS {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bAddress: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelINTRX.xml
export interface TApcSatelINTRX {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bAddress: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelINTS.xml
export interface TApcSatelINTS {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bAddress: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelINTSCR.xml
export interface TApcSatelINTSCR {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bAddress: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelINTSZ.xml
export interface TApcSatelINTSZ {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bAddress: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelJamInput.xml
export interface TApcSatelJamInput {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bInputNum: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelObject.xml
export interface TApcSatelObject {
    strClassID: String;
    sysAddrID: String;
    bObjNum: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelPartition.xml
export interface TApcSatelPartition {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bPartitionNum: Number;
    bPartitionType: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelPartitionLink.xml
export interface TApcSatelPartitionLink {
    strClassID: String;
    sysAddrID: String;
    SysAddrPartition: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelRelay.xml
export interface TApcSatelRelay {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bRelayNum: Number;
    bRealRelayNum: Number;
    bRelayType: Number;
    fConfigured: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelSerialPort.xml
export interface TApcSatelSerialPort {
    strClassID: String;
    sysAddrID: String;
    strPortName: String;
    dwBoudRate: Number;
    bByteSize: Number;
    bParity: Number;
    bNumStopBits: Number;
    bFlowControl: Number;
    dwReadTo: Number;
    dwReadToMultiplier: Number;
    dwReadToConstant: Number;
    dwWriteToMultiplier: Number;
    dwWriteToConstant: Number;
    dwInQueue: Number;
    dwOutQueue: Number;
    dwMaxReadTO: Number;
    dwMaxWriteTO: Number;
    dwDelayBeforeSend: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelService.xml
export interface TApcSatelService {
    strClassID: String;
    sysAddrID: String;
    strUserName: String;
    bUserNum: Number;
    strAccCode: String;
    strPhoneCode: String;
    bUserType: Number;
    fArm: Boolean;
    fDisarm: Boolean;
    fACOwnPartn: Boolean;
    fACOwnObj: Boolean;
    fACSystem: Boolean;
    fArmDeffer: Boolean;
    fCodeChange: Boolean;
    fUsetEdit: Boolean;
    fZoneBypass: Boolean;
    fClockSet: Boolean;
    fTroubleView: Boolean;
    fEventView: Boolean;
    fZoneReset: Boolean;
    fOptionChange: Boolean;
    fTests: Boolean;
    fDownload: Boolean;
    fAlwaysDisarm: Boolean;
    fVocMsgClear: Boolean;
    fUseGuardX: Boolean;
    fAccBlockPartn: Boolean;
    fEnter1Code: Boolean;
    fEnter2Code: Boolean;
    fOutControl: Boolean;
    fClearLatchOut: Boolean;
    bUserTime: Number;
    bUserSchedule: Number;
    fUseProxCard: Boolean;
    strProxCardNum: String;
    fUseDallasCard: Boolean;
    strDallasCardNum: String;
    fUseTime: Boolean;
    bPartBlockTime: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelStatusInput.xml
export interface TApcSatelStatusInput {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bInputNum: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelUser.xml
export interface TApcSatelUser {
    strClassID: String;
    sysAddrID: String;
    strUserName: String;
    bUserNum: Number;
    strAccCode: String;
    strPhoneCode: String;
    bUserType: Number;
    fArm: Boolean;
    fDisarm: Boolean;
    fACOwnPartn: Boolean;
    fACOwnObj: Boolean;
    fACSystem: Boolean;
    fArmDeffer: Boolean;
    fCodeChange: Boolean;
    fUsetEdit: Boolean;
    fZoneBypass: Boolean;
    fClockSet: Boolean;
    fTroubleView: Boolean;
    fEventView: Boolean;
    fZoneReset: Boolean;
    fOptionChange: Boolean;
    fTests: Boolean;
    fDownload: Boolean;
    fAlwaysDisarm: Boolean;
    fVocMsgClear: Boolean;
    fUseGuardX: Boolean;
    fAccBlockPartn: Boolean;
    fEnter1Code: Boolean;
    fEnter2Code: Boolean;
    fOutControl: Boolean;
    fClearLatchOut: Boolean;
    bUserTime: Number;
    bUserSchedule: Number;
    fUseProxCard: Boolean;
    strProxCardNum: String;
    fUseDallasCard: Boolean;
    strDallasCardNum: String;
    fUseTime: Boolean;
    bPartBlockTime: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelUserLink.xml
export interface TApcSatelUserLink {
    strClassID: String;
    sysAddrID: String;
    SysAddrUser: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelVirtualExtender.xml
export interface TApcSatelVirtualExtender {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bAddress: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelWRLInputsGroup.xml
export interface TApcSatelWRLInputsGroup {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bAddress: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelWRLRelaysGroup.xml
export interface TApcSatelWRLRelaysGroup {
    strClassID: String;
    sysAddrID: String;
    bCurrStatus: Number;
    bAddress: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSecurityManager\Registrar\tApcAccount.xml
export interface TApcAccount {
    strClassID: String;
    sysAddrID: String;
    fActive: Boolean;
    bStatus: Number;
    strSGList: String;
    blobOwnSG: String;
    dtActDateTime: String;
    dtDeactDateTime: String;
    tEveryDayActTime: String;
    tEveryDayDeactTime: String;
    fHostCheckBeforeDenied: Boolean;
    fHostCheckBeforeGrant: Boolean;
    fAPBExempt: Boolean;
    fUseLongTimes: Boolean;
    strPIN: String;
    fPINExempt: Boolean;
    fAllowPINCmds: Boolean;
    fEnterClosedAPB: Boolean;
    fSoftAPB: Boolean;
    bThreatLevel: Number;
    SysAddrBadgeModel: String;
    SysAddrVisEscortExt: String;
    fUnlockReader: Boolean;
    fUseOwnSG: Boolean;
    SysAddrTemplate: String;
    u64CardNumber: Number;
    u64FC: Number;
    bIssueCode: Number;
    SysAddrAccExt: String;
    strAdd1: String;
    strAdd2: String;
    strAdd3: String;
    nAdd4: Number;
    nAdd5: Number;
    nAdd6: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSecurityManager\Registrar\tApcAccountExtension.xml
export interface TApcAccountExtension {
    strClassID: String;
    sysAddrID: String;
    blobSettings: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSecurityManager\Registrar\tApcCardHolder.xml
export interface TApcCardHolder {
    strClassID: String;
    sysAddrID: String;
    fActive: Boolean;
    bStatus: Number;
    strSGList: String;
    blobOwnSG: String;
    dtActDateTime: String;
    dtDeactDateTime: String;
    tEveryDayActTime: String;
    tEveryDayDeactTime: String;
    fHostCheckBeforeDenied: Boolean;
    fHostCheckBeforeGrant: Boolean;
    fAPBExempt: Boolean;
    fUseLongTimes: Boolean;
    strPIN: String;
    fPINExempt: Boolean;
    fAllowPINCmds: Boolean;
    fEnterClosedAPB: Boolean;
    fSoftAPB: Boolean;
    bThreatLevel: Number;
    SysAddrBadgeModel: String;
    SysAddrVisEscortExt: String;
    fUnlockReader: Boolean;
    strFirstName: String;
    strMiddleName: String;
    strLastName: String;
    bGender: Number;
    SysAddrDepartment: String;
    SysAddrJobTitle: String;
    SysAddrCompany: String;
    SysAddrSegment: String;
    strPhoneNumber: String;
    strEMailAddress: String;
    strAdd1: String;
    strAdd2: String;
    strAdd3: String;
    strAdd4: String;
    strAdd5: String;
    strAdd6: String;
    strAdd7: String;
    strAdd8: String;
    strAdd9: String;
    strAdd10: String;
    strAdd11: String;
    strAdd12: String;
    strAdd13: String;
    strAdd14: String;
    strAdd15: String;
    strAdd16: String;
    strAdd17: String;
    strAdd18: String;
    strAdd19: String;
    strAdd20: String;
    SysAddrRef1: String;
    SysAddrRef2: String;
    dwNumber: Number;
    bEmployee: Number;
    bAdminLevel: Number;
    bSecurityLevel: Number;
    bFingerAuthMode: Number;
    bCardAuthMode: Number;
    bIdAuthMode: Number;
    bFaceAuthGroup: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSecurityManager\Registrar\tApcClientFactory.xml
// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSecurityManager\Registrar\tApcSecurityGroup.xml
export interface TApcSecurityGroup {
    strClassID: String;
    sysAddrID: String;
    blobProperties: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSecurityManager\Registrar\tApcSecurityManagerCheck.xml
// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSecurityManager\Registrar\tApcSecurityManagerDBInfo.xml
// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSecurityManager\Registrar\tApcSecurityManagerDBInfoNumTypes.xml
// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSecurityManager\Registrar\tApcSecurityManagerTypeInfo.xml
// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSecurityManager\Registrar\tApcSupremaBioData.xml
export interface TApcSupremaBioData {
    strClassID: String;
    sysAddrID: String;
    blobBioData: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSecurityManager\Registrar\tApcVisEscortExtension.xml
export interface TApcVisEscortExtension {
    strClassID: String;
    sysAddrID: String;
    blobVisEscortCntr: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSrvMainObjectExt\Registrar\tApcMainObjDBInfo.xml
// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSrvMainObjectExt\Registrar\tApcMainObjDBInfoNumTypes.xml
// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSrvMainObjectExt\Registrar\tApcMainObjTypeInfo.xml
// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSrvMainObjectExt\Registrar\tApcPC.xml
export interface TApcPC {
    strClassID: String;
    sysAddrID: String;
    strIPName: String;
    strIPPortName: String;
    wPCID: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSrvMainObjectExt\Registrar\tApcRoot.xml
export interface TApcRoot {
    strClassID: String;
    sysAddrID: String;
    nSiteID: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSrvMainObjectExt\Registrar\tApcServiceRegistry.xml
export interface TApcServiceRegistry {
    strClassID: String;
    sysAddrID: String;
    blobXML: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcV100.xml
export interface TApcV100 {
    strClassID: String;
    sysAddrID: String;
    bAddress: Number;
    strEEPROMFileName: String;
    bCurrStatus: Number;
    fMasterSlave: Boolean;
    fEnableVisualAlarms: Boolean;
    blobCardFrmtTable: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcV1000.xml
export interface TApcV1000 {
    strClassID: String;
    sysAddrID: String;
    fActivate: Boolean;
    dwPollInterval: Number;
    wInternalID: Number;
    bPollDelay: Number;
    bResponseTimeout: Number;
    bNumberPrimaryPolls: Number;
    bMaxTries: Number;
    dwMaxNumCards: Number;
    fAutoRestartTasks: Boolean;
    fLoadEEPROM: Boolean;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcV200.xml
export interface TApcV200 {
    strClassID: String;
    sysAddrID: String;
    bAddress: Number;
    strEEPROMFileName: String;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcV2000.xml
export interface TApcV2000 {
    strClassID: String;
    sysAddrID: String;
    fActivate: Boolean;
    dwPollInterval: Number;
    wInternalID: Number;
    bPollDelay: Number;
    bResponseTimeout: Number;
    bNumberPrimaryPolls: Number;
    bMaxTries: Number;
    dwMaxNumCards: Number;
    fAutoRestartTasks: Boolean;
    fLoadEEPROM: Boolean;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcV300.xml
export interface TApcV300 {
    strClassID: String;
    sysAddrID: String;
    bAddress: Number;
    strEEPROMFileName: String;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVAL.xml
export interface TApcVAL {
    strClassID: String;
    sysAddrID: String;
    wALNum: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVALElem.xml
export interface TApcVALElem {
    strClassID: String;
    sysAddrID: String;
    SysAddrReaderGroup: String;
    SysAddrShedule: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVAPB.xml
export interface TApcVAPB {
    strClassID: String;
    sysAddrID: String;
    bAPBNum: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVAutomation.xml
export interface TApcVAutomation {
    strClassID: String;
    sysAddrID: String;
    wPeerNotifyTO: Number;
    wSchedPollTO: Number;
    blobData: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVAuxInput.xml
export interface TApcVAuxInput {
    strClassID: String;
    sysAddrID: String;
    bInputNum: Number;
    fNotifyOnChange: Boolean;
    bCurrStatus: Number;
    bHRUL: Number;
    bHRLL: Number;
    bLRUL: Number;
    bLRLL: Number;
    bDebounce: Number;
    fActive: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVCardFormat.xml
export interface TApcVCardFormat {
    strClassID: String;
    sysAddrID: String;
    dwFormatNum: Number;
    strControllerPath: String;
    blobFormat: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVCardSet.xml
export interface TApcVCardSet {
    strClassID: String;
    sysAddrID: String;
    bCardSetNum: Number;
    fUseFixField0: Boolean;
    fUseFixField1: Boolean;
    fUseFixField2: Boolean;
    fUseFixField3: Boolean;
    fUseFixField4: Boolean;
    fUseFixField5: Boolean;
    fUseFixField6: Boolean;
    fUseFixField7: Boolean;
    dwFixFieldValue0: Number;
    dwFixFieldValue1: Number;
    dwFixFieldValue2: Number;
    dwFixFieldValue3: Number;
    dwFixFieldValue4: Number;
    dwFixFieldValue5: Number;
    dwFixFieldValue6: Number;
    dwFixFieldValue7: Number;
    SysAddrFormat: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVContrInput.xml
export interface TApcVContrInput {
    strClassID: String;
    sysAddrID: String;
    bInputNum: Number;
    fNotifyOnChange: Boolean;
    bCurrStatus: Number;
    bHRUL: Number;
    bHRLL: Number;
    bLRUL: Number;
    bLRLL: Number;
    bDebounce: Number;
    fActive: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVCtrlGroup.xml
export interface TApcVCtrlGroup {
    strClassID: String;
    sysAddrID: String;
    dwCtrlGrpNum: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVCtrlObjLink.xml
export interface TApcVCtrlObjLink {
    strClassID: String;
    sysAddrID: String;
    bState: Number;
    SysAddrCtrlObj: String;
    fInverse: Boolean;
    bTransitionType: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVDoorInput.xml
export interface TApcVDoorInput {
    strClassID: String;
    sysAddrID: String;
    bInputNum: Number;
    fNotifyOnChange: Boolean;
    bCurrStatus: Number;
    bHRUL: Number;
    bHRLL: Number;
    bLRUL: Number;
    bLRLL: Number;
    bDebounce: Number;
    fActive: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVEDGE.xml
export interface TApcVEDGE {
    strClassID: String;
    sysAddrID: String;
    fActivate: Boolean;
    dwPollInterval: Number;
    wInternalID: Number;
    bPollDelay: Number;
    bResponseTimeout: Number;
    bNumberPrimaryPolls: Number;
    bMaxTries: Number;
    dwMaxNumCards: Number;
    fAutoRestartTasks: Boolean;
    fLoadEEPROM: Boolean;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVElevRelayGroup.xml
export interface TApcVElevRelayGroup {
    strClassID: String;
    sysAddrID: String;
    bElevRelayGroupNum: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVElevRelayGroupElem.xml
export interface TApcVElevRelayGroupElem {
    strClassID: String;
    sysAddrID: String;
    SysAddrRelay: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVertXSocket.xml
export interface TApcVertXSocket {
    strClassID: String;
    sysAddrID: String;
    strIPName: String;
    strIPPortName: String;
    dwReadTO: Number;
    dwWriteTO: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVHolidayGroup.xml
export interface TApcVHolidayGroup {
    strClassID: String;
    sysAddrID: String;
    dwHolidayGroupNum: Number;
    blobHolidays: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVHolidayGroupElem.xml
export interface TApcVHolidayGroupElem {
    strClassID: String;
    sysAddrID: String;
    SysAddrHoldayGroup: String;
    tStartTime0: String;
    tStartTime1: String;
    tStartTime2: String;
    tStartTime3: String;
    tStartTime4: String;
    tStartTime5: String;
    tEndTime0: String;
    tEndTime1: String;
    tEndTime2: String;
    tEndTime3: String;
    tEndTime4: String;
    tEndTime5: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVInputCtrlObjLink.xml
export interface TApcVInputCtrlObjLink {
    strClassID: String;
    sysAddrID: String;
    bState: Number;
    SysAddrCtrlObj: String;
    fInverse: Boolean;
    bTransitionType: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVKeyPad.xml
export interface TApcVKeyPad {
    strClassID: String;
    sysAddrID: String;
    dwKeyPadNum: Number;
    blobRaw2DigitTransl: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVReader.xml
export interface TApcVReader {
    strClassID: String;
    sysAddrID: String;
    dwRdrNum: Number;
    bNumberOnPanel: Number;
    bPriority: Number;
    bInitMode: Number;
    SysAddrNoPINTZ: String;
    fAllowPINCmds: Boolean;
    bHardwareType: Number;
    fIsElevator: Boolean;
    bAPBMode: Number;
    wAPBTime: Number;
    bActOnAPBViol: Number;
    SysAddrAPBEntering: String;
    SysAddrAPBLeaving: String;
    fSendRequestToHost: Boolean;
    bMaxPINLength: Number;
    bPINTO: Number;
    bEndCode: Number;
    bClearCode: Number;
    bTryLimit: Number;
    bLockoutTO: Number;
    SysAddrKeyPad: String;
    wGrantAccTime: Number;
    wGrantAccExtTime: Number;
    wMinOpenTime: Number;
    wHeldOpenTime: Number;
    wFloorSelectTO: Number;
    fInvertFloorRelays: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVReaderCtrlObj.xml
export interface TApcVReaderCtrlObj {
    strClassID: String;
    sysAddrID: String;
    SysAddrCtrlObj: String;
    bFunc: Number;
    bParam: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVReaderElev.xml
export interface TApcVReaderElev {
    strClassID: String;
    sysAddrID: String;
    dwRdrNum: Number;
    bNumberOnPanel: Number;
    bPriority: Number;
    bInitMode: Number;
    SysAddrNoPINTZ: String;
    fAllowPINCmds: Boolean;
    bHardwareType: Number;
    fIsElevator: Boolean;
    bAPBMode: Number;
    wAPBTime: Number;
    bActOnAPBViol: Number;
    SysAddrAPBEntering: String;
    SysAddrAPBLeaving: String;
    fSendRequestToHost: Boolean;
    bMaxPINLength: Number;
    bPINTO: Number;
    bEndCode: Number;
    bClearCode: Number;
    bTryLimit: Number;
    bLockoutTO: Number;
    SysAddrKeyPad: String;
    wGrantAccTime: Number;
    wGrantAccExtTime: Number;
    wMinOpenTime: Number;
    wHeldOpenTime: Number;
    wFloorSelectTO: Number;
    fInvertFloorRelays: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVReaderGroup.xml
export interface TApcVReaderGroup {
    strClassID: String;
    sysAddrID: String;
    dwRdrGroupNum: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVReaderGroupElem.xml
export interface TApcVReaderGroupElem {
    strClassID: String;
    sysAddrID: String;
    SysAddrReader: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVReaderGrpCtrlObj.xml
export interface TApcVReaderGrpCtrlObj {
    strClassID: String;
    sysAddrID: String;
    SysAddrCtrlObj: String;
    bFunc: Number;
    bParam: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVReaderInput.xml
export interface TApcVReaderInput {
    strClassID: String;
    sysAddrID: String;
    bInputNum: Number;
    fNotifyOnChange: Boolean;
    bCurrStatus: Number;
    fBeepOnAlarm: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVRelay.xml
export interface TApcVRelay {
    strClassID: String;
    sysAddrID: String;
    bRelayNum: Number;
    wPulseTime: Number;
    bInitMode: Number;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVRelayCtrlObj.xml
export interface TApcVRelayCtrlObj {
    strClassID: String;
    sysAddrID: String;
    SysAddrCtrlObj: String;
    bFunc: Number;
    bParam: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVRelayGrpCtrlObj.xml
export interface TApcVRelayGrpCtrlObj {
    strClassID: String;
    sysAddrID: String;
    SysAddrCtrlObj: String;
    bFunc: Number;
    bParam: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVRexInput.xml
export interface TApcVRexInput {
    strClassID: String;
    sysAddrID: String;
    bInputNum: Number;
    fNotifyOnChange: Boolean;
    bCurrStatus: Number;
    bHRUL: Number;
    bHRLL: Number;
    bLRUL: Number;
    bLRLL: Number;
    bDebounce: Number;
    fActive: Boolean;
    fUnlockDoor: Boolean;
    wOpenTime: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVShedule.xml
export interface TApcVShedule {
    strClassID: String;
    sysAddrID: String;
    dwSheduleNum: Number;
    tDay0_StartTime0: String;
    tDay0_StartTime1: String;
    tDay0_StartTime2: String;
    tDay0_StartTime3: String;
    tDay0_StartTime4: String;
    tDay0_StartTime5: String;
    tDay1_StartTime0: String;
    tDay1_StartTime1: String;
    tDay1_StartTime2: String;
    tDay1_StartTime3: String;
    tDay1_StartTime4: String;
    tDay1_StartTime5: String;
    tDay2_StartTime0: String;
    tDay2_StartTime1: String;
    tDay2_StartTime2: String;
    tDay2_StartTime3: String;
    tDay2_StartTime4: String;
    tDay2_StartTime5: String;
    tDay3_StartTime0: String;
    tDay3_StartTime1: String;
    tDay3_StartTime2: String;
    tDay3_StartTime3: String;
    tDay3_StartTime4: String;
    tDay3_StartTime5: String;
    tDay4_StartTime0: String;
    tDay4_StartTime1: String;
    tDay4_StartTime2: String;
    tDay4_StartTime3: String;
    tDay4_StartTime4: String;
    tDay4_StartTime5: String;
    tDay5_StartTime0: String;
    tDay5_StartTime1: String;
    tDay5_StartTime2: String;
    tDay5_StartTime3: String;
    tDay5_StartTime4: String;
    tDay5_StartTime5: String;
    tDay6_StartTime0: String;
    tDay6_StartTime1: String;
    tDay6_StartTime2: String;
    tDay6_StartTime3: String;
    tDay6_StartTime4: String;
    tDay6_StartTime5: String;
    tDay0_EndTime0: String;
    tDay0_EndTime1: String;
    tDay0_EndTime2: String;
    tDay0_EndTime3: String;
    tDay0_EndTime4: String;
    tDay0_EndTime5: String;
    tDay1_EndTime0: String;
    tDay1_EndTime1: String;
    tDay1_EndTime2: String;
    tDay1_EndTime3: String;
    tDay1_EndTime4: String;
    tDay1_EndTime5: String;
    tDay2_EndTime0: String;
    tDay2_EndTime1: String;
    tDay2_EndTime2: String;
    tDay2_EndTime3: String;
    tDay2_EndTime4: String;
    tDay2_EndTime5: String;
    tDay3_EndTime0: String;
    tDay3_EndTime1: String;
    tDay3_EndTime2: String;
    tDay3_EndTime3: String;
    tDay3_EndTime4: String;
    tDay3_EndTime5: String;
    tDay4_EndTime0: String;
    tDay4_EndTime1: String;
    tDay4_EndTime2: String;
    tDay4_EndTime3: String;
    tDay4_EndTime4: String;
    tDay4_EndTime5: String;
    tDay5_EndTime0: String;
    tDay5_EndTime1: String;
    tDay5_EndTime2: String;
    tDay5_EndTime3: String;
    tDay5_EndTime4: String;
    tDay5_EndTime5: String;
    tDay6_EndTime0: String;
    tDay6_EndTime1: String;
    tDay6_EndTime2: String;
    tDay6_EndTime3: String;
    tDay6_EndTime4: String;
    tDay6_EndTime5: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplAAN100Contr.xml
export interface TAplAAN100Contr {
    strClassID: String;
    sysAddrID: String;
    fActivate: Boolean;
    bAddress: Number;
    dwPollInterval: Number;
    wHostLostTO: Number;
    wInterCharTO: Number;
    wReplyLine: Number;
    wClear2SendDelay: Number;
    wReceiveDelay: Number;
    dwMaxNumCards: Number;
    bCardLenType: Number;
    bPinType: Number;
    fStoreExpireDate: Boolean;
    fStoreActivationDate: Boolean;
    fStoreAPBLocation: Boolean;
    fSearchByPin: Boolean;
    fUse6AccLevels: Boolean;
    fUseReaderExclList: Boolean;
    fUse16CharName: Boolean;
    fUse2DigitIssueCode: Boolean;
    fUsePrecAcc: Boolean;
    fUseBioTemplate: Boolean;
    fUseTimedAPB: Boolean;
    fUseActTime: Boolean;
    fUseDeactTime: Boolean;
    fUseVisitorEscort: Boolean;
    fUse32AccLevels: Boolean;
    fUseZoneGrpNames: Boolean;
    bDuressOffsetCode: Number;
    fDisableDuressReport: Boolean;
    scClockCorrection: Number;
    SysAddrResetAPBTZ: String;
    b2CardControlTO: Number;
    fDisableGrandReaderOnCmd: Boolean;
    fNeedZoneGroupAuth: Boolean;
    fNeedSpecCmdAuth: Boolean;
    bTimedAPBSettings: Number;
    fDenyCardIfInGrandCycle: Boolean;
    fUseNetProtocol: Boolean;
    bHostAccReqTO: Number;
    fActTimeEachDay: Boolean;
    strPhone1: String;
    strPhone2: String;
    bRegS0: Number;
    bRegS6: Number;
    bRegS7: Number;
    bRegS8: Number;
    bRegS9: Number;
    bRegS10: Number;
    bCallRetryCount: Number;
    bTimeBetweenRetry: Number;
    wAAMDialSiteAddress: Number;
    wHostDialSiteAddress: Number;
    fRestrictCommand: Boolean;
    fCallback: Boolean;
    SysAddrDayNightTZ: String;
    SysAddrRegularCallTZ1: String;
    SysAddrRegularCallTZ2: String;
    bCurrStatus: Number;
    bModePort_2: Number;
    bModePort_3: Number;
    bModePort_4: Number;
    bModePort_5: Number;
    bTXDDrvDelay_2: Number;
    bTXDDrvDelay_3: Number;
    bTXDDrvDelay_4: Number;
    bTXDDrvDelay_5: Number;
    bReceiveDelay_2: Number;
    bReceiveDelay_3: Number;
    bReceiveDelay_4: Number;
    bReceiveDelay_5: Number;
    bInterCharTO_2: Number;
    bInterCharTO_3: Number;
    bInterCharTO_4: Number;
    bInterCharTO_5: Number;
    bReplyTO_2: Number;
    bReplyTO_3: Number;
    bReplyTO_4: Number;
    bReplyTO_5: Number;
    wPollInterval_2: Number;
    wPollInterval_3: Number;
    wPollInterval_4: Number;
    wPollInterval_5: Number;
    wOffPollInterval_2: Number;
    wOffPollInterval_3: Number;
    wOffPollInterval_4: Number;
    wOffPollInterval_5: Number;
    bUndefCurrColor: Number;
    bUndefNextColor: Number;
    bUndefPulseTime: Number;
    bSafeCurrColor: Number;
    bSafeNextColor: Number;
    bSafePulseTime: Number;
    bFaultCurrColor: Number;
    bFaultNextColor: Number;
    bFaultPulseTime: Number;
    bAlarmCurrColor: Number;
    bAlarmNextColor: Number;
    bAlarmPulseTime: Number;
    bAccGrantCurrColor: Number;
    bAccGrantNextColor: Number;
    bAccGrantPulseTime: Number;
    bAccDenyCurrColor: Number;
    bAccDenyNextColor: Number;
    bAccDenyPulseTime: Number;
    bAccDuressCurrColor: Number;
    bAccDuressNextColor: Number;
    bAccDuressPulseTime: Number;
    bMaskedCurrColor: Number;
    bMaskedNextColor: Number;
    bMaskedPulseTime: Number;
    bUseCustomTime: Number;
    nCustomTimeZone: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplAAN32Contr.xml
export interface TAplAAN32Contr {
    strClassID: String;
    sysAddrID: String;
    fActivate: Boolean;
    bAddress: Number;
    dwPollInterval: Number;
    wHostLostTO: Number;
    wInterCharTO: Number;
    wReplyLine: Number;
    wClear2SendDelay: Number;
    wReceiveDelay: Number;
    dwMaxNumCards: Number;
    bCardLenType: Number;
    bPinType: Number;
    fStoreExpireDate: Boolean;
    fStoreActivationDate: Boolean;
    fStoreAPBLocation: Boolean;
    fSearchByPin: Boolean;
    fUse6AccLevels: Boolean;
    fUseReaderExclList: Boolean;
    fUse16CharName: Boolean;
    fUse2DigitIssueCode: Boolean;
    fUsePrecAcc: Boolean;
    fUseBioTemplate: Boolean;
    fUseTimedAPB: Boolean;
    fUseActTime: Boolean;
    fUseDeactTime: Boolean;
    fUseVisitorEscort: Boolean;
    fUse32AccLevels: Boolean;
    fUseZoneGrpNames: Boolean;
    bDuressOffsetCode: Number;
    fDisableDuressReport: Boolean;
    scClockCorrection: Number;
    SysAddrResetAPBTZ: String;
    b2CardControlTO: Number;
    fDisableGrandReaderOnCmd: Boolean;
    fNeedZoneGroupAuth: Boolean;
    fNeedSpecCmdAuth: Boolean;
    bTimedAPBSettings: Number;
    fDenyCardIfInGrandCycle: Boolean;
    fUseNetProtocol: Boolean;
    bHostAccReqTO: Number;
    fActTimeEachDay: Boolean;
    strPhone1: String;
    strPhone2: String;
    bRegS0: Number;
    bRegS6: Number;
    bRegS7: Number;
    bRegS8: Number;
    bRegS9: Number;
    bRegS10: Number;
    bCallRetryCount: Number;
    bTimeBetweenRetry: Number;
    wAAMDialSiteAddress: Number;
    wHostDialSiteAddress: Number;
    fRestrictCommand: Boolean;
    fCallback: Boolean;
    SysAddrDayNightTZ: String;
    SysAddrRegularCallTZ1: String;
    SysAddrRegularCallTZ2: String;
    bCurrStatus: Number;
    bModePort_2: Number;
    bModePort_3: Number;
    bModePort_4: Number;
    bModePort_5: Number;
    bTXDDrvDelay_2: Number;
    bTXDDrvDelay_3: Number;
    bTXDDrvDelay_4: Number;
    bTXDDrvDelay_5: Number;
    bReceiveDelay_2: Number;
    bReceiveDelay_3: Number;
    bReceiveDelay_4: Number;
    bReceiveDelay_5: Number;
    bInterCharTO_2: Number;
    bInterCharTO_3: Number;
    bInterCharTO_4: Number;
    bInterCharTO_5: Number;
    bReplyTO_2: Number;
    bReplyTO_3: Number;
    bReplyTO_4: Number;
    bReplyTO_5: Number;
    wPollInterval_2: Number;
    wPollInterval_3: Number;
    wPollInterval_4: Number;
    wPollInterval_5: Number;
    wOffPollInterval_2: Number;
    wOffPollInterval_3: Number;
    wOffPollInterval_4: Number;
    wOffPollInterval_5: Number;
    bUndefCurrColor: Number;
    bUndefNextColor: Number;
    bUndefPulseTime: Number;
    bSafeCurrColor: Number;
    bSafeNextColor: Number;
    bSafePulseTime: Number;
    bFaultCurrColor: Number;
    bFaultNextColor: Number;
    bFaultPulseTime: Number;
    bAlarmCurrColor: Number;
    bAlarmNextColor: Number;
    bAlarmPulseTime: Number;
    bAccGrantCurrColor: Number;
    bAccGrantNextColor: Number;
    bAccGrantPulseTime: Number;
    bAccDenyCurrColor: Number;
    bAccDenyNextColor: Number;
    bAccDenyPulseTime: Number;
    bAccDuressCurrColor: Number;
    bAccDuressNextColor: Number;
    bAccDuressPulseTime: Number;
    bMaskedCurrColor: Number;
    bMaskedNextColor: Number;
    bMaskedPulseTime: Number;
    bUseCustomTime: Number;
    nCustomTimeZone: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMC6IntervalTZ.xml
export interface TAplMC6IntervalTZ {
    strClassID: String;
    sysAddrID: String;
    bNumber: Number;
    bIntervalUsed: Number;
    bStartHour0: Number;
    bStartHour1: Number;
    bStartHour2: Number;
    bStartHour3: Number;
    bStartHour4: Number;
    bStartHour5: Number;
    bStartMinute0: Number;
    bStartMinute1: Number;
    bStartMinute2: Number;
    bStartMinute3: Number;
    bStartMinute4: Number;
    bStartMinute5: Number;
    fDayOfWeekMo0: Boolean;
    fDayOfWeekMo1: Boolean;
    fDayOfWeekMo2: Boolean;
    fDayOfWeekMo3: Boolean;
    fDayOfWeekMo4: Boolean;
    fDayOfWeekMo5: Boolean;
    fDayOfWeekTu0: Boolean;
    fDayOfWeekTu1: Boolean;
    fDayOfWeekTu2: Boolean;
    fDayOfWeekTu3: Boolean;
    fDayOfWeekTu4: Boolean;
    fDayOfWeekTu5: Boolean;
    fDayOfWeekWe0: Boolean;
    fDayOfWeekWe1: Boolean;
    fDayOfWeekWe2: Boolean;
    fDayOfWeekWe3: Boolean;
    fDayOfWeekWe4: Boolean;
    fDayOfWeekWe5: Boolean;
    fDayOfWeekTh0: Boolean;
    fDayOfWeekTh1: Boolean;
    fDayOfWeekTh2: Boolean;
    fDayOfWeekTh3: Boolean;
    fDayOfWeekTh4: Boolean;
    fDayOfWeekTh5: Boolean;
    fDayOfWeekFr0: Boolean;
    fDayOfWeekFr1: Boolean;
    fDayOfWeekFr2: Boolean;
    fDayOfWeekFr3: Boolean;
    fDayOfWeekFr4: Boolean;
    fDayOfWeekFr5: Boolean;
    fDayOfWeekSa0: Boolean;
    fDayOfWeekSa1: Boolean;
    fDayOfWeekSa2: Boolean;
    fDayOfWeekSa3: Boolean;
    fDayOfWeekSa4: Boolean;
    fDayOfWeekSa5: Boolean;
    fDayOfWeekSu0: Boolean;
    fDayOfWeekSu1: Boolean;
    fDayOfWeekSu2: Boolean;
    fDayOfWeekSu3: Boolean;
    fDayOfWeekSu4: Boolean;
    fDayOfWeekSu5: Boolean;
    bEndMinute0: Number;
    bEndMinute1: Number;
    bEndMinute2: Number;
    bEndMinute3: Number;
    bEndMinute4: Number;
    bEndMinute5: Number;
    bEndHour0: Number;
    bEndHour1: Number;
    bEndHour2: Number;
    bEndHour3: Number;
    bEndHour4: Number;
    bEndHour5: Number;
    fHoliday1_0: Boolean;
    fHoliday1_1: Boolean;
    fHoliday1_2: Boolean;
    fHoliday1_3: Boolean;
    fHoliday1_4: Boolean;
    fHoliday1_5: Boolean;
    fHoliday2_0: Boolean;
    fHoliday2_1: Boolean;
    fHoliday2_2: Boolean;
    fHoliday2_3: Boolean;
    fHoliday2_4: Boolean;
    fHoliday2_5: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCAL.xml
export interface TAplMCAL {
    strClassID: String;
    sysAddrID: String;
    bALNumber: Number;
    fAllowCmd0: Boolean;
    fAllowCmd1: Boolean;
    fAllowCmd2: Boolean;
    fAllowCmd3: Boolean;
    fAllowCmd4: Boolean;
    fAllowCmd5: Boolean;
    fAllowCmd6: Boolean;
    fAllowCmd7: Boolean;
    fAllowCmd8: Boolean;
    fAllowCmd9: Boolean;
    fAllowCmd10: Boolean;
    fAllowCmd11: Boolean;
    fAllowCmd12: Boolean;
    fAllowCmd13: Boolean;
    fAllowCmd14: Boolean;
    fAllowCmd15: Boolean;
    fAllowCmd16: Boolean;
    fAllowCmd17: Boolean;
    fAllowCmd18: Boolean;
    fAllowCmd19: Boolean;
    fAllowCmd20: Boolean;
    fAllowCmd21: Boolean;
    fAllowCmd22: Boolean;
    fAllowCmd23: Boolean;
    fAllowCmd24: Boolean;
    fAllowCmd25: Boolean;
    fAllowCmd26: Boolean;
    fAllowCmd27: Boolean;
    fAllowCmd28: Boolean;
    fAllowCmd29: Boolean;
    fAllowCmd30: Boolean;
    fAllowCmd31: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCAlarmInput.xml
export interface TAplMCAlarmInput {
    strClassID: String;
    sysAddrID: String;
    bInputNum: Number;
    fImmediateDialAtDay: Boolean;
    fImmediateDialAtNight: Boolean;
    bCurrStatus: Number;
    fInitMasked: Boolean;
    SysAddrMaskTZ: String;
    fLatched: Boolean;
    wEntryDelay: Number;
    wExitDelay: Number;
    fInitConfigured: Boolean;
    fNormalOpen: Boolean;
    fNormalOpenTamper: Boolean;
    bDigitAddress: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCAlarmPanelAIO16.xml
export interface TAplMCAlarmPanelAIO16 {
    strClassID: String;
    sysAddrID: String;
    bLUNType: Number;
    bLUNNumber: Number;
    bNumberOnPanel: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCAlarmPanelAIO168.xml
export interface TAplMCAlarmPanelAIO168 {
    strClassID: String;
    sysAddrID: String;
    bLUNType: Number;
    bLUNNumber: Number;
    bNumberOnPanel: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCAlarmPanelAIO8.xml
export interface TAplMCAlarmPanelAIO8 {
    strClassID: String;
    sysAddrID: String;
    bLUNType: Number;
    bLUNNumber: Number;
    bNumberOnPanel: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCAlarmPanelAPA15.xml
export interface TAplMCAlarmPanelAPA15 {
    strClassID: String;
    sysAddrID: String;
    bLUNType: Number;
    bLUNNumber: Number;
    bNumberOnPanel: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCAlarmPanelAPA16.xml
export interface TAplMCAlarmPanelAPA16 {
    strClassID: String;
    sysAddrID: String;
    bLUNType: Number;
    bLUNNumber: Number;
    bNumberOnPanel: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCAlarmPanelAPD16.xml
export interface TAplMCAlarmPanelAPD16 {
    strClassID: String;
    sysAddrID: String;
    bLUNType: Number;
    bLUNNumber: Number;
    bNumberOnPanel: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCAlarmRelay.xml
export interface TAplMCAlarmRelay {
    strClassID: String;
    sysAddrID: String;
    bRelayNum: Number;
    wPulseTime: Number;
    bInitMode: Number;
    SysAddrCtrlTZ: String;
    bPulseTimeResolution: Number;
    bCurrStatus: Number;
    fAllowResetPulse: Boolean;
    fOfflineMode: Boolean;
    fCOML: Boolean;
    fANYF: Boolean;
    fCTMP: Boolean;
    fPFL: Boolean;
    bLinkInput0: Number;
    bLinkInput1: Number;
    bLinkInput2: Number;
    bLinkInput3: Number;
    bLinkInput4: Number;
    bLinkInput5: Number;
    bLinkInput6: Number;
    bLinkInput7: Number;
    bLinkInput8: Number;
    bLinkInput9: Number;
    bLinkInput10: Number;
    bLinkInput11: Number;
    bLinkInput12: Number;
    bLinkInput13: Number;
    bLinkInput14: Number;
    bLinkInput15: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCALElemElev.xml
export interface TAplMCALElemElev {
    strClassID: String;
    sysAddrID: String;
    fDownloadAL: Boolean;
    fAllowCommands: Boolean;
    SysAddrReader: String;
    SysAddrElevAL: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCALElemNorm.xml
export interface TAplMCALElemNorm {
    strClassID: String;
    sysAddrID: String;
    fDownloadAL: Boolean;
    fAllowCommands: Boolean;
    SysAddrReader: String;
    SysAddrCtrlTZ: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCALElemZoneGroup.xml
export interface TAplMCALElemZoneGroup {
    strClassID: String;
    sysAddrID: String;
    SysAddrZoneGroup: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCASA72.xml
export interface TAplMCASA72 {
    strClassID: String;
    sysAddrID: String;
    bLUNType: Number;
    bLUNNumber: Number;
    bNumberOnPanel: Number;
    fEnableBuzzer: Boolean;
    fNeedACKOnOffline: Boolean;
    bAutoACKEnableTime: Number;
    bAutoACKRepeatTime: Number;
    bBuzzerOnTime: Number;
    bBuzzerOffTime: Number;
    bEnableBuzzerTime: Number;
    wFailedACKTO: Number;
    wACKHoldingOnOffline: Number;
    SysAddrACKTZ: String;
    SysAddrACKLogTZ: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCCardFormat.xml
export interface TAplMCCardFormat {
    strClassID: String;
    sysAddrID: String;
    bCardFormat: Number;
    bFormatNumber: Number;
    dwFCValue: Number;
    nCardNumberOffset: Number;
    f2DigitIssueCode: Boolean;
    bReferenceIndex1: Number;
    bReferenceIndex2: Number;
    bMinStartToRef1: Number;
    bMinRef1ToRef2: Number;
    bMinRef2ToEnd: Number;
    bFCLocation0: Number;
    bFCLocation1: Number;
    bFCLocation2: Number;
    bFCLocation3: Number;
    bFCLocation4: Number;
    bFCLocation5: Number;
    bFCLocation6: Number;
    bFCLocation7: Number;
    bFCLocation8: Number;
    bCardNumberLocation0: Number;
    bCardNumberLocation1: Number;
    bCardNumberLocation2: Number;
    bCardNumberLocation3: Number;
    bCardNumberLocation4: Number;
    bCardNumberLocation5: Number;
    bCardNumberLocation6: Number;
    bCardNumberLocation7: Number;
    bCardNumberLocation8: Number;
    bIssueCodeLocation: Number;
    bFCAMSLocation0: Number;
    bFCAMSLocation1: Number;
    bFCAMSLocation2: Number;
    bFCAMSLocation3: Number;
    bFCAMSLocation4: Number;
    bFCAMSLocation5: Number;
    bFCAMSLocation6: Number;
    bFCAMSLocation7: Number;
    bFCAMSLocation8: Number;
    bBitsOnCard: Number;
    bBitsForEven: Number;
    bBitsForOdd: Number;
    bNumBitsInFC: Number;
    bIndexFCBegin: Number;
    bNumBitsInCardNumber: Number;
    bIndexCardNumberBegin: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCCardFrmtList.xml
export interface TAplMCCardFrmtList {
    strClassID: String;
    sysAddrID: String;
    bListNumber: Number;
    SysAddrCardFormat0: String;
    SysAddrCardFormat1: String;
    SysAddrCardFormat2: String;
    SysAddrCardFormat3: String;
    SysAddrCardFormat4: String;
    SysAddrCardFormat5: String;
    SysAddrCardFormat6: String;
    SysAddrCardFormat7: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCContrInput.xml
export interface TAplMCContrInput {
    strClassID: String;
    sysAddrID: String;
    bInputNum: Number;
    fImmediateDialAtDay: Boolean;
    fImmediateDialAtNight: Boolean;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCDownlSpecRec.xml
export interface TAplMCDownlSpecRec {
    strClassID: String;
    sysAddrID: String;
    bRecNumber: Number;
    dwNumberOfCards: Number;
    bCardType: Number;
    bPinType: Number;
    fPrecisionAccess: Boolean;
    fUse6AL: Boolean;
    fStoreExtByte: Boolean;
    fUse32AL: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCElevAL.xml
export interface TAplMCElevAL {
    strClassID: String;
    sysAddrID: String;
    bElevALNum: Number;
    SysAddrCtrlTZ0: String;
    SysAddrCtrlTZ1: String;
    SysAddrCtrlTZ2: String;
    SysAddrCtrlTZ3: String;
    SysAddrCtrlTZ4: String;
    SysAddrCtrlTZ5: String;
    SysAddrCtrlTZ6: String;
    SysAddrCtrlTZ7: String;
    SysAddrCtrlTZ8: String;
    SysAddrCtrlTZ9: String;
    SysAddrCtrlTZ10: String;
    SysAddrCtrlTZ11: String;
    SysAddrCtrlTZ12: String;
    SysAddrCtrlTZ13: String;
    SysAddrCtrlTZ14: String;
    SysAddrCtrlTZ15: String;
    SysAddrCtrlTZ16: String;
    SysAddrCtrlTZ17: String;
    SysAddrCtrlTZ18: String;
    SysAddrCtrlTZ19: String;
    SysAddrCtrlTZ20: String;
    SysAddrCtrlTZ21: String;
    SysAddrCtrlTZ22: String;
    SysAddrCtrlTZ23: String;
    SysAddrCtrlTZ24: String;
    SysAddrCtrlTZ25: String;
    SysAddrCtrlTZ26: String;
    SysAddrCtrlTZ27: String;
    SysAddrCtrlTZ28: String;
    SysAddrCtrlTZ29: String;
    SysAddrCtrlTZ30: String;
    SysAddrCtrlTZ31: String;
    SysAddrCtrlTZ32: String;
    SysAddrCtrlTZ33: String;
    SysAddrCtrlTZ34: String;
    SysAddrCtrlTZ35: String;
    SysAddrCtrlTZ36: String;
    SysAddrCtrlTZ37: String;
    SysAddrCtrlTZ38: String;
    SysAddrCtrlTZ39: String;
    SysAddrCtrlTZ40: String;
    SysAddrCtrlTZ41: String;
    SysAddrCtrlTZ42: String;
    SysAddrCtrlTZ43: String;
    SysAddrCtrlTZ44: String;
    SysAddrCtrlTZ45: String;
    SysAddrCtrlTZ46: String;
    SysAddrCtrlTZ47: String;
    SysAddrCtrlTZ48: String;
    SysAddrCtrlTZ49: String;
    SysAddrCtrlTZ50: String;
    SysAddrCtrlTZ51: String;
    SysAddrCtrlTZ52: String;
    SysAddrCtrlTZ53: String;
    SysAddrCtrlTZ54: String;
    SysAddrCtrlTZ55: String;
    SysAddrCtrlTZ56: String;
    SysAddrCtrlTZ57: String;
    SysAddrCtrlTZ58: String;
    SysAddrCtrlTZ59: String;
    SysAddrCtrlTZ60: String;
    SysAddrCtrlTZ61: String;
    SysAddrCtrlTZ62: String;
    SysAddrCtrlTZ63: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCEscortGroupList.xml
export interface TAplMCEscortGroupList {
    strClassID: String;
    sysAddrID: String;
    bListNum: Number;
    SysAddrVisitorGroup0: String;
    SysAddrVisitorGroup1: String;
    SysAddrVisitorGroup2: String;
    SysAddrVisitorGroup3: String;
    SysAddrVisitorGroup4: String;
    SysAddrVisitorGroup5: String;
    SysAddrVisitorGroup6: String;
    SysAddrVisitorGroup7: String;
    SysAddrVisitorGroup8: String;
    SysAddrVisitorGroup9: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCHoliday.xml
export interface TAplMCHoliday {
    strClassID: String;
    sysAddrID: String;
    dHolidayDate: String;
    fType1: Boolean;
    fType2: Boolean;
    fPermanent: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCHostInput.xml
export interface TAplMCHostInput {
    strClassID: String;
    sysAddrID: String;
    bInputNum: Number;
    fImmediateDialAtDay: Boolean;
    fImmediateDialAtNight: Boolean;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIV.xml
export interface TAplMCIV {
    strClassID: String;
    sysAddrID: String;
    bLUNType: Number;
    bLUNNumber: Number;
    bHandleType: Number;
    blobTermsValue: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIVALElevFloors.xml
export interface TAplMCIVALElevFloors {
    strClassID: String;
    sysAddrID: String;
    bListNumber: Number;
    blobArgs: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIVFuncAlarmRelayControl.xml
export interface TAplMCIVFuncAlarmRelayControl {
    strClassID: String;
    sysAddrID: String;
    bFuncNumber: Number;
    SysAddrArg: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIVFuncAPBControl.xml
export interface TAplMCIVFuncAPBControl {
    strClassID: String;
    sysAddrID: String;
    bFuncNumber: Number;
    SysAddrArg: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIVFuncChain.xml
export interface TAplMCIVFuncChain {
    strClassID: String;
    sysAddrID: String;
    bFuncNumber: Number;
    SysAddrArg: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIVFuncDenyElevFloors.xml
export interface TAplMCIVFuncDenyElevFloors {
    strClassID: String;
    sysAddrID: String;
    bFuncNumber: Number;
    SysAddrArg: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIVFuncEventLog.xml
export interface TAplMCIVFuncEventLog {
    strClassID: String;
    sysAddrID: String;
    bFuncNumber: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIVFuncMaskZoneGroup.xml
export interface TAplMCIVFuncMaskZoneGroup {
    strClassID: String;
    sysAddrID: String;
    bFuncNumber: Number;
    SysAddrArg: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIVFuncReaderBeepControl.xml
export interface TAplMCIVFuncReaderBeepControl {
    strClassID: String;
    sysAddrID: String;
    bFuncNumber: Number;
    SysAddrArg: String;
    bAddParam: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIVFuncReaderContBeepControl.xml
export interface TAplMCIVFuncReaderContBeepControl {
    strClassID: String;
    sysAddrID: String;
    bFuncNumber: Number;
    SysAddrArg: String;
    bAddParam: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIVFuncReaderControl.xml
export interface TAplMCIVFuncReaderControl {
    strClassID: String;
    sysAddrID: String;
    bFuncNumber: Number;
    SysAddrArg: String;
    bAddParam: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIVFuncReaderRelayControl.xml
export interface TAplMCIVFuncReaderRelayControl {
    strClassID: String;
    sysAddrID: String;
    bFuncNumber: Number;
    SysAddrArg: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIVFuncTestZoneGroupAct.xml
export interface TAplMCIVFuncTestZoneGroupAct {
    strClassID: String;
    sysAddrID: String;
    bFuncNumber: Number;
    SysAddrArg: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIVFuncTestZoneGroupMsk.xml
export interface TAplMCIVFuncTestZoneGroupMsk {
    strClassID: String;
    sysAddrID: String;
    bFuncNumber: Number;
    SysAddrArg: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIVFuncToggleZoneGroupMsk.xml
export interface TAplMCIVFuncToggleZoneGroupMsk {
    strClassID: String;
    sysAddrID: String;
    bFuncNumber: Number;
    SysAddrArg: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIVFuncTZControl.xml
export interface TAplMCIVFuncTZControl {
    strClassID: String;
    sysAddrID: String;
    bFuncNumber: Number;
    SysAddrArg: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIVInitiator.xml
export interface TAplMCIVInitiator {
    strClassID: String;
    sysAddrID: String;
    bIVInitType: Number;
    SysAddrIV: String;
    bTermNum: Number;
    bOpCode1: Number;
    bOpCode2: Number;
    bOpCode3: Number;
    bOpCode4: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIVInitiatorAccActiv.xml
export interface TAplMCIVInitiatorAccActiv {
    strClassID: String;
    sysAddrID: String;
    bIVInitType: Number;
    SysAddrIV: String;
    bTermNum: Number;
    bOpCode1: Number;
    bOpCode2: Number;
    bOpCode3: Number;
    bOpCode4: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIVInitiatorAccDiddle.xml
export interface TAplMCIVInitiatorAccDiddle {
    strClassID: String;
    sysAddrID: String;
    bIVInitType: Number;
    SysAddrIV: String;
    bTermNum: Number;
    bOpCode1: Number;
    bOpCode2: Number;
    bOpCode3: Number;
    bOpCode4: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIVInitiatorComm.xml
export interface TAplMCIVInitiatorComm {
    strClassID: String;
    sysAddrID: String;
    bIVInitType: Number;
    SysAddrIV: String;
    bTermNum: Number;
    bOpCode1: Number;
    bOpCode2: Number;
    bOpCode3: Number;
    bOpCode4: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIVInitiatorReader.xml
export interface TAplMCIVInitiatorReader {
    strClassID: String;
    sysAddrID: String;
    bIVInitType: Number;
    SysAddrIV: String;
    bTermNum: Number;
    bOpCode1: Number;
    bOpCode2: Number;
    bOpCode3: Number;
    bOpCode4: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIVInitiatorZoneAPB.xml
export interface TAplMCIVInitiatorZoneAPB {
    strClassID: String;
    sysAddrID: String;
    bIVInitType: Number;
    SysAddrIV: String;
    bTermNum: Number;
    bOpCode1: Number;
    bOpCode2: Number;
    bOpCode3: Number;
    bOpCode4: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCLED.xml
export interface TAplMCLED {
    strClassID: String;
    sysAddrID: String;
    bLEDNum: Number;
    fNeedACKAtDay: Boolean;
    fNeedACKAtNight: Boolean;
    fNeedACKLogAtDay: Boolean;
    fNeedACKLogAtNight: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCLEDLink.xml
export interface TAplMCLEDLink {
    strClassID: String;
    sysAddrID: String;
    SysAddrLinkInput: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCReader.xml
export interface TAplMCReader {
    strClassID: String;
    sysAddrID: String;
    bLUNType: Number;
    bLUNNumber: Number;
    bNumberOnPanel: Number;
    bStrikeTime: Number;
    bHeldOpenTime: Number;
    bOfflineMode: Number;
    bInitMode: Number;
    fDenyIfDuress: Boolean;
    fElevatorReader: Boolean;
    fRequestHostIfDeny: Boolean;
    fRequestHostIfGrant: Boolean;
    fDontWaitUseDoor: Boolean;
    fLocalOnlineDecision: Boolean;
    fDownloadReader: Boolean;
    fUseMasterSlave: Boolean;
    fUseAuxAsBoltMonitor: Boolean;
    fFastAlarmDetect: Boolean;
    fCommandsAccepted: Boolean;
    fPreAlarmWarning: Boolean;
    f2CardControl: Boolean;
    bDidleThreshold: Number;
    dwFacilityModeFloorList: Number;
    dwCypherCode: Number;
    fUseSoftAPB: Boolean;
    fAllowOutputPulseReset: Boolean;
    fEmulateElevator: Boolean;
    fInvertFloorWhenElevEmul: Boolean;
    fUseFullStrikeTime: Boolean;
    fDisableEPB: Boolean;
    fRelayLink: Boolean;
    fUseAuxAsBoltMonitorNew: Boolean;
    bLocalAPBTime: Number;
    dwFacilityModeFloorListAdd: Number;
    wLongStrikeTime: Number;
    wLongHeldOpenTime: Number;
    SysAddrDownlRecord: String;
    SysAddrEmulAlarmPanel0: String;
    SysAddrEmulAlarmPanel1: String;
    SysAddrEmulAlarmPanel2: String;
    SysAddrEmulAlarmPanel3: String;
    SysAddrCardFormatList: String;
    SysAddrAPBLeaving: String;
    SysAddrAPBEntering: String;
    SysAddrDayModeElevAL: String;
    bCurrStatus: Number;
    bDispInpStInterv: Number;
    fSendStChangeTable: Boolean;
    fUseFastTurnstileMode: Boolean;
    fUse2DoorLock: Boolean;
    fUseAuxReaderDisable: Boolean;
    bElevFloorOffset: Number;
    bMaxVisitorNum: Number;
    bCmdModeForAuthCmds: Number;
    fUseGrantAudioNotify: Boolean;
    fVisitorsFreePass: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCReaderCtrlTZ.xml
export interface TAplMCReaderCtrlTZ {
    strClassID: String;
    sysAddrID: String;
    bStartMode: Number;
    bEndMode: Number;
    SysAddrCtrlTZ: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCReaderElev.xml
export interface TAplMCReaderElev {
    strClassID: String;
    sysAddrID: String;
    bLUNType: Number;
    bLUNNumber: Number;
    bNumberOnPanel: Number;
    bStrikeTime: Number;
    bHeldOpenTime: Number;
    bOfflineMode: Number;
    bInitMode: Number;
    fDenyIfDuress: Boolean;
    fElevatorReader: Boolean;
    fRequestHostIfDeny: Boolean;
    fRequestHostIfGrant: Boolean;
    fDontWaitUseDoor: Boolean;
    fLocalOnlineDecision: Boolean;
    fDownloadReader: Boolean;
    fUseMasterSlave: Boolean;
    fUseAuxAsBoltMonitor: Boolean;
    fFastAlarmDetect: Boolean;
    fCommandsAccepted: Boolean;
    fPreAlarmWarning: Boolean;
    f2CardControl: Boolean;
    bDidleThreshold: Number;
    dwFacilityModeFloorList: Number;
    dwCypherCode: Number;
    fUseSoftAPB: Boolean;
    fAllowOutputPulseReset: Boolean;
    fEmulateElevator: Boolean;
    fInvertFloorWhenElevEmul: Boolean;
    fUseFullStrikeTime: Boolean;
    fDisableEPB: Boolean;
    fRelayLink: Boolean;
    fUseAuxAsBoltMonitorNew: Boolean;
    bLocalAPBTime: Number;
    dwFacilityModeFloorListAdd: Number;
    wLongStrikeTime: Number;
    wLongHeldOpenTime: Number;
    SysAddrDownlRecord: String;
    SysAddrEmulAlarmPanel0: String;
    SysAddrEmulAlarmPanel1: String;
    SysAddrEmulAlarmPanel2: String;
    SysAddrEmulAlarmPanel3: String;
    SysAddrCardFormatList: String;
    SysAddrAPBLeaving: String;
    SysAddrAPBEntering: String;
    SysAddrDayModeElevAL: String;
    bCurrStatus: Number;
    bDispInpStInterv: Number;
    fSendStChangeTable: Boolean;
    fUseFastTurnstileMode: Boolean;
    fUse2DoorLock: Boolean;
    fUseAuxReaderDisable: Boolean;
    bElevFloorOffset: Number;
    bMaxVisitorNum: Number;
    bCmdModeForAuthCmds: Number;
    fUseGrantAudioNotify: Boolean;
    fVisitorsFreePass: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCReaderInput.xml
export interface TAplMCReaderInput {
    strClassID: String;
    sysAddrID: String;
    bInputNum: Number;
    fImmediateDialAtDay: Boolean;
    fImmediateDialAtNight: Boolean;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCReaderInputAccActiv.xml
export interface TAplMCReaderInputAccActiv {
    strClassID: String;
    sysAddrID: String;
    bInputNum: Number;
    fImmediateDialAtDay: Boolean;
    fImmediateDialAtNight: Boolean;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCReaderInputAux.xml
export interface TAplMCReaderInputAux {
    strClassID: String;
    sysAddrID: String;
    bInputNum: Number;
    fImmediateDialAtDay: Boolean;
    fImmediateDialAtNight: Boolean;
    bCurrStatus: Number;
    fInitMasked: Boolean;
    SysAddrMaskTZ: String;
    fLatched: Boolean;
    wEntryDelay: Number;
    wExitDelay: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCReaderInputDiddle.xml
export interface TAplMCReaderInputDiddle {
    strClassID: String;
    sysAddrID: String;
    bInputNum: Number;
    fImmediateDialAtDay: Boolean;
    fImmediateDialAtNight: Boolean;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCReaderInputM.xml
export interface TAplMCReaderInputM {
    strClassID: String;
    sysAddrID: String;
    bInputNum: Number;
    fImmediateDialAtDay: Boolean;
    fImmediateDialAtNight: Boolean;
    bCurrStatus: Number;
    fInitMasked: Boolean;
    SysAddrMaskTZ: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCReaderRelay.xml
export interface TAplMCReaderRelay {
    strClassID: String;
    sysAddrID: String;
    bRelayNum: Number;
    wPulseTime: Number;
    bInitMode: Number;
    SysAddrCtrlTZ: String;
    bPulseTimeResolution: Number;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCRemContrAHI10R.xml
export interface TAplMCRemContrAHI10R {
    strClassID: String;
    sysAddrID: String;
    bLUNType: Number;
    bLUNNumber: Number;
    fContrActive: Boolean;
    fUseAlternatePort: Boolean;
    fEncripteDate: Boolean;
    fMasterKey: Boolean;
    bRemotePortNumber: Number;
    bAddressOnPort: Number;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCRemContrAIM2DLR.xml
export interface TAplMCRemContrAIM2DLR {
    strClassID: String;
    sysAddrID: String;
    bLUNType: Number;
    bLUNNumber: Number;
    fContrActive: Boolean;
    fUseAlternatePort: Boolean;
    fEncripteDate: Boolean;
    fMasterKey: Boolean;
    bRemotePortNumber: Number;
    bAddressOnPort: Number;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCRemContrAIM2SLR.xml
export interface TAplMCRemContrAIM2SLR {
    strClassID: String;
    sysAddrID: String;
    bLUNType: Number;
    bLUNNumber: Number;
    fContrActive: Boolean;
    fUseAlternatePort: Boolean;
    fEncripteDate: Boolean;
    fMasterKey: Boolean;
    bRemotePortNumber: Number;
    bAddressOnPort: Number;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCRemContrAIM4SLR.xml
export interface TAplMCRemContrAIM4SLR {
    strClassID: String;
    sysAddrID: String;
    bLUNType: Number;
    bLUNNumber: Number;
    fContrActive: Boolean;
    fUseAlternatePort: Boolean;
    fEncripteDate: Boolean;
    fMasterKey: Boolean;
    bRemotePortNumber: Number;
    bAddressOnPort: Number;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCRemContrAMS100R.xml
export interface TAplMCRemContrAMS100R {
    strClassID: String;
    sysAddrID: String;
    bLUNType: Number;
    bLUNNumber: Number;
    fContrActive: Boolean;
    fUseAlternatePort: Boolean;
    fEncripteDate: Boolean;
    fMasterKey: Boolean;
    bRemotePortNumber: Number;
    bAddressOnPort: Number;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCRemContrAnalogAlarm.xml
export interface TAplMCRemContrAnalogAlarm {
    strClassID: String;
    sysAddrID: String;
    bLUNType: Number;
    bLUNNumber: Number;
    fContrActive: Boolean;
    fUseAlternatePort: Boolean;
    fEncripteDate: Boolean;
    fMasterKey: Boolean;
    bRemotePortNumber: Number;
    bAddressOnPort: Number;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCRemContrAP500R.xml
export interface TAplMCRemContrAP500R {
    strClassID: String;
    sysAddrID: String;
    bLUNType: Number;
    bLUNNumber: Number;
    fContrActive: Boolean;
    fUseAlternatePort: Boolean;
    fEncripteDate: Boolean;
    fMasterKey: Boolean;
    bRemotePortNumber: Number;
    bAddressOnPort: Number;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCRemContrAP510_520R.xml
export interface TAplMCRemContrAP510_520R {
    strClassID: String;
    sysAddrID: String;
    bLUNType: Number;
    bLUNNumber: Number;
    fContrActive: Boolean;
    fUseAlternatePort: Boolean;
    fEncripteDate: Boolean;
    fMasterKey: Boolean;
    bRemotePortNumber: Number;
    bAddressOnPort: Number;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCRemContrASA72.xml
export interface TAplMCRemContrASA72 {
    strClassID: String;
    sysAddrID: String;
    bLUNType: Number;
    bLUNNumber: Number;
    fContrActive: Boolean;
    fUseAlternatePort: Boolean;
    fEncripteDate: Boolean;
    fMasterKey: Boolean;
    bRemotePortNumber: Number;
    bAddressOnPort: Number;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCRemContrCommonR.xml
export interface TAplMCRemContrCommonR {
    strClassID: String;
    sysAddrID: String;
    bLUNType: Number;
    bLUNNumber: Number;
    fContrActive: Boolean;
    fUseAlternatePort: Boolean;
    fEncripteDate: Boolean;
    fMasterKey: Boolean;
    bRemotePortNumber: Number;
    bAddressOnPort: Number;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCRemContrCommonRElev.xml
export interface TAplMCRemContrCommonRElev {
    strClassID: String;
    sysAddrID: String;
    bLUNType: Number;
    bLUNNumber: Number;
    fContrActive: Boolean;
    fUseAlternatePort: Boolean;
    fEncripteDate: Boolean;
    fMasterKey: Boolean;
    bRemotePortNumber: Number;
    bAddressOnPort: Number;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCRemContrDigitalAlarm.xml
export interface TAplMCRemContrDigitalAlarm {
    strClassID: String;
    sysAddrID: String;
    bLUNType: Number;
    bLUNNumber: Number;
    fContrActive: Boolean;
    fUseAlternatePort: Boolean;
    fEncripteDate: Boolean;
    fMasterKey: Boolean;
    bRemotePortNumber: Number;
    bAddressOnPort: Number;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCRemContrInput.xml
export interface TAplMCRemContrInput {
    strClassID: String;
    sysAddrID: String;
    bInputNum: Number;
    fImmediateDialAtDay: Boolean;
    fImmediateDialAtNight: Boolean;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCRemContrInputComm.xml
export interface TAplMCRemContrInputComm {
    strClassID: String;
    sysAddrID: String;
    bInputNum: Number;
    fImmediateDialAtDay: Boolean;
    fImmediateDialAtNight: Boolean;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCRemContrPrintUnit.xml
export interface TAplMCRemContrPrintUnit {
    strClassID: String;
    sysAddrID: String;
    bLUNType: Number;
    bLUNNumber: Number;
    fContrActive: Boolean;
    fUseAlternatePort: Boolean;
    fEncripteDate: Boolean;
    fMasterKey: Boolean;
    bRemotePortNumber: Number;
    bAddressOnPort: Number;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCSerialPort.xml
export interface TAplMCSerialPort {
    strClassID: String;
    sysAddrID: String;
    strPortName: String;
    dwBoudRate: Number;
    bByteSize: Number;
    bParity: Number;
    bNumStopBits: Number;
    bFlowControl: Number;
    dwReadTo: Number;
    dwReadToMultiplier: Number;
    dwReadToConstant: Number;
    dwWriteToMultiplier: Number;
    dwWriteToConstant: Number;
    dwInQueue: Number;
    dwOutQueue: Number;
    dwMaxReadTO: Number;
    dwMaxWriteTO: Number;
    dwDelayBeforeSend: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCSocket.xml
export interface TAplMCSocket {
    strClassID: String;
    sysAddrID: String;
    strIPName: String;
    strIPPortName: String;
    dwConnectTO: Number;
    dwReadTO: Number;
    dwWriteTO: Number;
    dwInterPartTO: Number;
    bSockType: Number;
    fUseEncryption: Boolean;
    blobEncryptionKey: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCTypeInfo.xml
// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCVisitorGroup.xml
export interface TAplMCVisitorGroup {
    strClassID: String;
    sysAddrID: String;
    bGroupNum: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCZoneAPB.xml
export interface TAplMCZoneAPB {
    strClassID: String;
    sysAddrID: String;
    bLUNType: Number;
    bLUNNumber: Number;
    fMin2Man: Boolean;
    fOpenForAccess: Boolean;
    bAccessOnClose: Number;
    SysAddrReader: String;
    fLimitPeople: Boolean;
    wMaxPeopleNum: Number;
    fInitialClear: Boolean;
    wIVMinPeopleNum: Number;
    wIVMaxPeopleNum: Number;
    fGrantOnReaderCmdAuthIfClose: Boolean;
    fToggleOnGrantReaderCmdAuth: Boolean;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCZoneGroup.xml
export interface TAplMCZoneGroup {
    strClassID: String;
    sysAddrID: String;
    bLUNType: Number;
    bLUNNumber: Number;
    bInitMaskLevel: Number;
    bCurrMaskLevel: Number;
    bMaxMaskLevel: Number;
    strZoneGroupName: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCZoneGroupElem.xml
export interface TAplMCZoneGroupElem {
    strClassID: String;
    sysAddrID: String;
    SysAddrZone: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplAIM1SLContr.xml
export interface TAplAIM1SLContr {
    strClassID: String;
    sysAddrID: String;
    fActivate: Boolean;
    bAddress: Number;
    dwPollInterval: Number;
    blobUnlockCode: String;
    wMaxCardNum: Number;
    bCardType: Number;
    bPinType: Number;
    fStoreTZPerReader: Boolean;
    fStore6AL: Boolean;
    fStore32AL: Boolean;
    fStoreAPBInfo: Boolean;
    SysAddrResetAPBTZ: String;
    wCommLossTO: Number;
    fPairedReader0: Boolean;
    fPairedReader1: Boolean;
    fUse2DoorLock0: Boolean;
    fUse2DoorLock1: Boolean;
    fUseAuxReaderDisable0: Boolean;
    fUseAuxReaderDisable1: Boolean;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplAIM2SLContr.xml
export interface TAplAIM2SLContr {
    strClassID: String;
    sysAddrID: String;
    fActivate: Boolean;
    bAddress: Number;
    dwPollInterval: Number;
    blobUnlockCode: String;
    wMaxCardNum: Number;
    bCardType: Number;
    bPinType: Number;
    fStoreTZPerReader: Boolean;
    fStore6AL: Boolean;
    fStore32AL: Boolean;
    fStoreAPBInfo: Boolean;
    SysAddrResetAPBTZ: String;
    wCommLossTO: Number;
    fPairedReader0: Boolean;
    fPairedReader1: Boolean;
    fUse2DoorLock0: Boolean;
    fUse2DoorLock1: Boolean;
    fUseAuxReaderDisable0: Boolean;
    fUseAuxReaderDisable1: Boolean;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplAIM4SLContr.xml
export interface TAplAIM4SLContr {
    strClassID: String;
    sysAddrID: String;
    fActivate: Boolean;
    bAddress: Number;
    dwPollInterval: Number;
    blobUnlockCode: String;
    wMaxCardNum: Number;
    bCardType: Number;
    bPinType: Number;
    fStoreTZPerReader: Boolean;
    fStore6AL: Boolean;
    fStore32AL: Boolean;
    fStoreAPBInfo: Boolean;
    SysAddrResetAPBTZ: String;
    wCommLossTO: Number;
    fPairedReader0: Boolean;
    fPairedReader1: Boolean;
    fUse2DoorLock0: Boolean;
    fUse2DoorLock1: Boolean;
    fUseAuxReaderDisable0: Boolean;
    fUseAuxReaderDisable1: Boolean;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplAIM6IntervalTZ.xml
export interface TAplAIM6IntervalTZ {
    strClassID: String;
    sysAddrID: String;
    bNumber: Number;
    bIntervalUsed: Number;
    bStartHour0: Number;
    bStartHour1: Number;
    bStartHour2: Number;
    bStartHour3: Number;
    bStartHour4: Number;
    bStartHour5: Number;
    bStartMinute0: Number;
    bStartMinute1: Number;
    bStartMinute2: Number;
    bStartMinute3: Number;
    bStartMinute4: Number;
    bStartMinute5: Number;
    fDayOfWeekMo0: Boolean;
    fDayOfWeekMo1: Boolean;
    fDayOfWeekMo2: Boolean;
    fDayOfWeekMo3: Boolean;
    fDayOfWeekMo4: Boolean;
    fDayOfWeekMo5: Boolean;
    fDayOfWeekTu0: Boolean;
    fDayOfWeekTu1: Boolean;
    fDayOfWeekTu2: Boolean;
    fDayOfWeekTu3: Boolean;
    fDayOfWeekTu4: Boolean;
    fDayOfWeekTu5: Boolean;
    fDayOfWeekWe0: Boolean;
    fDayOfWeekWe1: Boolean;
    fDayOfWeekWe2: Boolean;
    fDayOfWeekWe3: Boolean;
    fDayOfWeekWe4: Boolean;
    fDayOfWeekWe5: Boolean;
    fDayOfWeekTh0: Boolean;
    fDayOfWeekTh1: Boolean;
    fDayOfWeekTh2: Boolean;
    fDayOfWeekTh3: Boolean;
    fDayOfWeekTh4: Boolean;
    fDayOfWeekTh5: Boolean;
    fDayOfWeekFr0: Boolean;
    fDayOfWeekFr1: Boolean;
    fDayOfWeekFr2: Boolean;
    fDayOfWeekFr3: Boolean;
    fDayOfWeekFr4: Boolean;
    fDayOfWeekFr5: Boolean;
    fDayOfWeekSa0: Boolean;
    fDayOfWeekSa1: Boolean;
    fDayOfWeekSa2: Boolean;
    fDayOfWeekSa3: Boolean;
    fDayOfWeekSa4: Boolean;
    fDayOfWeekSa5: Boolean;
    fDayOfWeekSu0: Boolean;
    fDayOfWeekSu1: Boolean;
    fDayOfWeekSu2: Boolean;
    fDayOfWeekSu3: Boolean;
    fDayOfWeekSu4: Boolean;
    fDayOfWeekSu5: Boolean;
    bEndMinute0: Number;
    bEndMinute1: Number;
    bEndMinute2: Number;
    bEndMinute3: Number;
    bEndMinute4: Number;
    bEndMinute5: Number;
    bEndHour0: Number;
    bEndHour1: Number;
    bEndHour2: Number;
    bEndHour3: Number;
    bEndHour4: Number;
    bEndHour5: Number;
    fHoliday1_0: Boolean;
    fHoliday1_1: Boolean;
    fHoliday1_2: Boolean;
    fHoliday1_3: Boolean;
    fHoliday1_4: Boolean;
    fHoliday1_5: Boolean;
    fHoliday2_0: Boolean;
    fHoliday2_1: Boolean;
    fHoliday2_2: Boolean;
    fHoliday2_3: Boolean;
    fHoliday2_4: Boolean;
    fHoliday2_5: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplAIMAL.xml
export interface TAplAIMAL {
    strClassID: String;
    sysAddrID: String;
    bALNumber: Number;
    SysAddrCtrlTZ0: String;
    SysAddrCtrlTZ1: String;
    SysAddrCtrlTZ2: String;
    SysAddrCtrlTZ3: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplAIMAPB.xml
export interface TAplAIMAPB {
    strClassID: String;
    sysAddrID: String;
    bAPBNumber: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplAIMCardFormat.xml
export interface TAplAIMCardFormat {
    strClassID: String;
    sysAddrID: String;
    bCardFormat: Number;
    bFormatNumber: Number;
    dwFCValue: Number;
    nCardNumberOffset: Number;
    f2DigitIssueCode: Boolean;
    bReferenceIndex1: Number;
    bReferenceIndex2: Number;
    bMinStartToRef1: Number;
    bMinRef1ToRef2: Number;
    bMinRef2ToEnd: Number;
    bFCLocation0: Number;
    bFCLocation1: Number;
    bFCLocation2: Number;
    bFCLocation3: Number;
    bFCLocation4: Number;
    bFCLocation5: Number;
    bFCLocation6: Number;
    bFCLocation7: Number;
    bFCLocation8: Number;
    bCardNumberLocation0: Number;
    bCardNumberLocation1: Number;
    bCardNumberLocation2: Number;
    bCardNumberLocation3: Number;
    bCardNumberLocation4: Number;
    bCardNumberLocation5: Number;
    bCardNumberLocation6: Number;
    bCardNumberLocation7: Number;
    bCardNumberLocation8: Number;
    bIssueCodeLocation: Number;
    bFCAMSLocation0: Number;
    bFCAMSLocation1: Number;
    bFCAMSLocation2: Number;
    bFCAMSLocation3: Number;
    bFCAMSLocation4: Number;
    bFCAMSLocation5: Number;
    bFCAMSLocation6: Number;
    bFCAMSLocation7: Number;
    bFCAMSLocation8: Number;
    bBitsOnCard: Number;
    bBitsForEven: Number;
    bBitsForOdd: Number;
    bNumBitsInFC: Number;
    bIndexFCBegin: Number;
    bNumBitsInCardNumber: Number;
    bIndexCardNumberBegin: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplAIMHoliday.xml
export interface TAplAIMHoliday {
    strClassID: String;
    sysAddrID: String;
    dHolidayDate: String;
    fType1: Boolean;
    fType2: Boolean;
    fPermanent: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplAIMReader.xml
export interface TAplAIMReader {
    strClassID: String;
    sysAddrID: String;
    wStrikeTime: Number;
    wHeldOpenTime: Number;
    wLongStrikeTime: Number;
    wLongHeldOpenTime: Number;
    bOfflineMode: Number;
    bInitMode: Number;
    fActivate: Boolean;
    fUseLocalAccess: Boolean;
    fPreAlarmWarning: Boolean;
    f2CardCntrl: Boolean;
    fAllowOutputPulseReset: Boolean;
    fUseFullStrikeTime: Boolean;
    fExitPBMask: Boolean;
    fHostCntrlRelay: Boolean;
    fDoorBoltMonitor: Boolean;
    fDontWaitUseDoor: Boolean;
    fSoftAPB: Boolean;
    SysAddrAPBLeaving: String;
    SysAddrAPBEntering: String;
    bNumberOnPanel: Number;
    SysAddrCardFormat0: String;
    SysAddrCardFormat1: String;
    SysAddrCardFormat2: String;
    SysAddrCardFormat3: String;
    SysAddrCardFormat4: String;
    SysAddrCardFormat5: String;
    SysAddrCardFormat6: String;
    SysAddrCardFormat7: String;
    bCurrStatus: Number;
    fUseFastTurnstileMode: Boolean;
    fUseGrantAudioNotify: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplAIMReaderCtrlTZ.xml
export interface TAplAIMReaderCtrlTZ {
    strClassID: String;
    sysAddrID: String;
    bStartMode: Number;
    bEndMode: Number;
    SysAddrCtrlTZ: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplAIMReaderInput.xml
export interface TAplAIMReaderInput {
    strClassID: String;
    sysAddrID: String;
    fInitMasked: Boolean;
    bInputType: Number;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplAIMReaderInputTZ.xml
export interface TAplAIMReaderInputTZ {
    strClassID: String;
    sysAddrID: String;
    fInitMasked: Boolean;
    bInputType: Number;
    bCurrStatus: Number;
    SysAddrInputMaskTZ: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplAIMReaderRelay.xml
export interface TAplAIMReaderRelay {
    strClassID: String;
    sysAddrID: String;
    bRelayNum: Number;
    wPulseTime: Number;
    bInitMode: Number;
    SysAddrCtrlTZ: String;
    bPulseTimeResolution: Number;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplAPN2IntervalTZ.xml
export interface TAplAPN2IntervalTZ {
    strClassID: String;
    sysAddrID: String;
    bNumber: Number;
    bIntervalUsed: Number;
    bStartHour0: Number;
    bStartHour1: Number;
    bStartHour2: Number;
    bStartHour3: Number;
    bStartHour4: Number;
    bStartHour5: Number;
    bStartMinute0: Number;
    bStartMinute1: Number;
    bStartMinute2: Number;
    bStartMinute3: Number;
    bStartMinute4: Number;
    bStartMinute5: Number;
    fDayOfWeekMo0: Boolean;
    fDayOfWeekMo1: Boolean;
    fDayOfWeekMo2: Boolean;
    fDayOfWeekMo3: Boolean;
    fDayOfWeekMo4: Boolean;
    fDayOfWeekMo5: Boolean;
    fDayOfWeekTu0: Boolean;
    fDayOfWeekTu1: Boolean;
    fDayOfWeekTu2: Boolean;
    fDayOfWeekTu3: Boolean;
    fDayOfWeekTu4: Boolean;
    fDayOfWeekTu5: Boolean;
    fDayOfWeekWe0: Boolean;
    fDayOfWeekWe1: Boolean;
    fDayOfWeekWe2: Boolean;
    fDayOfWeekWe3: Boolean;
    fDayOfWeekWe4: Boolean;
    fDayOfWeekWe5: Boolean;
    fDayOfWeekTh0: Boolean;
    fDayOfWeekTh1: Boolean;
    fDayOfWeekTh2: Boolean;
    fDayOfWeekTh3: Boolean;
    fDayOfWeekTh4: Boolean;
    fDayOfWeekTh5: Boolean;
    fDayOfWeekFr0: Boolean;
    fDayOfWeekFr1: Boolean;
    fDayOfWeekFr2: Boolean;
    fDayOfWeekFr3: Boolean;
    fDayOfWeekFr4: Boolean;
    fDayOfWeekFr5: Boolean;
    fDayOfWeekSa0: Boolean;
    fDayOfWeekSa1: Boolean;
    fDayOfWeekSa2: Boolean;
    fDayOfWeekSa3: Boolean;
    fDayOfWeekSa4: Boolean;
    fDayOfWeekSa5: Boolean;
    fDayOfWeekSu0: Boolean;
    fDayOfWeekSu1: Boolean;
    fDayOfWeekSu2: Boolean;
    fDayOfWeekSu3: Boolean;
    fDayOfWeekSu4: Boolean;
    fDayOfWeekSu5: Boolean;
    bEndMinute0: Number;
    bEndMinute1: Number;
    bEndMinute2: Number;
    bEndMinute3: Number;
    bEndMinute4: Number;
    bEndMinute5: Number;
    bEndHour0: Number;
    bEndHour1: Number;
    bEndHour2: Number;
    bEndHour3: Number;
    bEndHour4: Number;
    bEndHour5: Number;
    fHoliday1_0: Boolean;
    fHoliday1_1: Boolean;
    fHoliday1_2: Boolean;
    fHoliday1_3: Boolean;
    fHoliday1_4: Boolean;
    fHoliday1_5: Boolean;
    fHoliday2_0: Boolean;
    fHoliday2_1: Boolean;
    fHoliday2_2: Boolean;
    fHoliday2_3: Boolean;
    fHoliday2_4: Boolean;
    fHoliday2_5: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplAPN35Contr.xml
export interface TAplAPN35Contr {
    strClassID: String;
    sysAddrID: String;
    fActivate: Boolean;
    bAddress: Number;
    dwPollInterval: Number;
    blobUnlockCode: String;
    bAPBMode: Number;
    bFormatType: Number;
    bNumBitsOnCard: Number;
    bNumBitsForEven: Number;
    bNumBitsForOdd: Number;
    bNumBitsInFC: Number;
    bIndexToFirstFCBit: Number;
    bNumBitsInCardNum: Number;
    bIndexToFirstCardNumBit: Number;
    bNumDigitsInFC: Number;
    bOffsetToFirstFCDig: Number;
    bNumDigitsInCardNum: Number;
    bOffsetToFirstCardNumDig: Number;
    bCardDBType: Number;
    dwMinFCValue: Number;
    dwMaxFCValue: Number;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplAPNAL.xml
export interface TAplAPNAL {
    strClassID: String;
    sysAddrID: String;
    bALNumber: Number;
    SysAddrCtrlTZ0: String;
    SysAddrCtrlTZ1: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplAPNCard.xml
export interface TAplAPNCard {
    strClassID: String;
    sysAddrID: String;
    dwCardNumber: Number;
    wSlotNumber: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplAPNContrInput.xml
export interface TAplAPNContrInput {
    strClassID: String;
    sysAddrID: String;
    SysAddrMaskTZ: String;
    bInputType: Number;
    fInitMasked: Boolean;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplAPNContrRelay.xml
export interface TAplAPNContrRelay {
    strClassID: String;
    sysAddrID: String;
    bRelayNum: Number;
    wPulseTime: Number;
    bInitMode: Number;
    SysAddrCtrlTZ: String;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplAPNHoliday.xml
export interface TAplAPNHoliday {
    strClassID: String;
    sysAddrID: String;
    dHolidayDate: String;
    fType1: Boolean;
    fType2: Boolean;
    fPermanent: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplAPNReader.xml
export interface TAplAPNReader {
    strClassID: String;
    sysAddrID: String;
    bInitMode: Number;
    bNumberOnPanel: Number;
    wStrikeTime: Number;
    wHeldOpenTime: Number;
    wLongStrikeTime: Number;
    wLongHeldOpenTime: Number;
    SysAddrCtrlTZ: String;
    bCtrlTZMode: Number;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplAPNReaderInput.xml
export interface TAplAPNReaderInput {
    strClassID: String;
    sysAddrID: String;
    SysAddrMaskTZ: String;
    bInputType: Number;
    fInitMasked: Boolean;
    bCurrStatus: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplSCSerialPort.xml
export interface TAplSCSerialPort {
    strClassID: String;
    sysAddrID: String;
    strPortName: String;
    dwBoudRate: Number;
    bByteSize: Number;
    bParity: Number;
    bNumStopBits: Number;
    bFlowControl: Number;
    dwReadTo: Number;
    dwReadToMultiplier: Number;
    dwReadToConstant: Number;
    dwWriteToMultiplier: Number;
    dwWriteToConstant: Number;
    dwInQueue: Number;
    dwOutQueue: Number;
    dwMaxReadTO: Number;
    dwMaxWriteTO: Number;
    dwDelayBeforeSend: Number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplSCSocket.xml
export interface TAplSCSocket {
    strClassID: String;
    sysAddrID: String;
    strIPName: String;
    strIPPortName: String;
    dwConnectTO: Number;
    dwReadTO: Number;
    dwWriteTO: Number;
    dwInterPartTO: Number;
    bSockType: Number;
    fUseEncryption: Boolean;
    blobEncryptionKey: String;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplSCTypeInfo.xml
