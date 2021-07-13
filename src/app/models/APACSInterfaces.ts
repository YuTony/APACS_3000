//Generated with ./src/python/parseTypes.py

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcAbstrObjExt\Registrar\tApcFile.xml
export interface TApcFile {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    blobData: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcAbstrObjExt\Registrar\tApcTAJob2HolderLink.xml
export interface TApcTAJob2HolderLink {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dtStart: string;
    dtEnd: string;
    SysAddrJobSysAddr: string;
    fFinished: Boolean;
    fUseScheduleStart: Boolean;
    dtScheduleStart: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcAbstrObjExt\Registrar\tApcTAShiftMException.xml
export interface TApcTAShiftMException {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dtStart: string;
    dtEnd: string;
    fChangeType: Boolean;
    SysAddrType: string;
    strComment: string;
    fCount: Boolean;
    fSimpleSettings: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcAbstrObjExt\Registrar\tApcTAStructException.xml
export interface TApcTAStructException {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dtStart: string;
    dtEnd: string;
    SysAddrScheduleSysAddr: string;
    dScheduleStart: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcAbstrObjExt\Registrar\tApcTATimeMException.xml
export interface TApcTATimeMException {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dtStart: string;
    dtEnd: string;
    fChangeType: Boolean;
    SysAddrType: string;
    strComment: string;
    fPlus: Boolean;
    tTime: string;
    fNoTolerance: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4AccessPoint.xml
export interface TApcASP4AccessPoint {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bNumber: number;
    bInitMode: number;
    SysAddrZone1: string;
    SysAddrZone2: string;
    wShortStrikeTime: number;
    wLongStrikeTime: number;
    wShortHeldOpenTime: number;
    wLongHeldOpenTime: number;
    fHeldOpenMask: Boolean;
    fForcedOpenMask: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4AL.xml
export interface TApcASP4AL {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    wNumber: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4ALElem.xml
export interface TApcASP4ALElem {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    SysAddrALObject: string;
    SysAddrTZ: string;
    fHostGrantFlag: Boolean;
    bHostGrantValue: number;
    fHostDenyFlag: Boolean;
    bHostDenyValue: number;
    fSoftAPBFlag: Boolean;
    bSoftAPBValue: number;
    fAPBExemptFlag: Boolean;
    bAPBExemptValue: number;
    fEnterClosedAreaFlag: Boolean;
    bEnterClosedAreaValue: number;
    fVisitorEscortFlag: Boolean;
    bVisitorEscortValue: number;
    fUnlockReaderFlag: Boolean;
    bUnlockReaderValue: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4APBZone.xml
export interface TApcASP4APBZone {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    wNumber: number;
    fCloseZone: Boolean;
    fAPBExempt: Boolean;
    bThreatLevel: number;
    dwTimedAPB: number;
    wMinOccupancy: number;
    wMaxOccupancy: number;
    wLimitOccupancy: number;
    wRequiredOccupancy: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4CardFormatList.xml
export interface TApcASP4CardFormatList {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bNumber: number;
    SysAddrFormat_0: string;
    SysAddrFormat_1: string;
    SysAddrFormat_2: string;
    SysAddrFormat_3: string;
    SysAddrFormat_4: string;
    SysAddrFormat_5: string;
    SysAddrFormat_6: string;
    SysAddrFormat_7: string;
    SysAddrFormat_8: string;
    SysAddrFormat_9: string;
    SysAddrFormat_10: string;
    SysAddrFormat_11: string;
    SysAddrFormat_12: string;
    SysAddrFormat_13: string;
    SysAddrFormat_14: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4CmnInput.xml
export interface TApcASP4CmnInput {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bNumber: number;
    fMaskedFlag: Boolean;
    bNormalState: number;
    fConfiguredFlag: Boolean;
    fLatchedFlag: Boolean;
    fAckFlag: Boolean;
    bAckReptTO: number;
    dwEntranceDelay: number;
    dwExitDelay: number;
    SysAddrMaskTZ: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4ContrInput.xml
export interface TApcASP4ContrInput {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bNumber: number;
    fMaskedFlag: Boolean;
    bNormalState: number;
    fAckFlag: Boolean;
    bAckReptTO: number;
    SysAddrMaskTZ: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4DoorContact.xml
export interface TApcASP4DoorContact {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    SysAddrHWComponent: string;
    bNumber: number;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4EPB.xml
export interface TApcASP4EPB {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    SysAddrHWComponent: string;
    bNumber: number;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4Holiday.xml
export interface TApcASP4Holiday {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    wNumber: number;
    dHolidayDate: string;
    blobHolidayTypes: string;
    fPermanent: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4HolidayType.xml
export interface TApcASP4HolidayType {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    wNumber: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4HWInterf.xml
export interface TApcASP4HWInterf {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    fActivate: Boolean;
    dwSerialPort1Baud: number;
    bSerialPort1Mode: number;
    bTXDSettleDelay1: number;
    bContrTO1: number;
    wPollTO1: number;
    bInterCharTO1: number;
    wOfflineTO1: number;
    dwSerialPort2Baud: number;
    bSerialPort2Mode: number;
    bTXDSettleDelay2: number;
    bContrTO2: number;
    wPollTO2: number;
    bInterCharTO2: number;
    wOfflineTO2: number;
    bCurrStatus: number;
    strNodeName: string;
    bNodeID: number;
    fEnableWillGrantEvent: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4MasterBoard.xml
export interface TApcASP4MasterBoard {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    fActivate: Boolean;
    bCurrStatus: number;
    bNodeID: number;
    bHostAccessTO: number;
    bDuressOffset: number;
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
    bPermissionCount: number;
    SysAddrResetAPBTimeZone: string;
    wInitialThreatLevel: number;
    fCardFormat: Boolean;
    fFlags: Boolean;
    fAlternativeTimeFlag: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4OSDPDevice.xml
export interface TApcASP4OSDPDevice {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bNumber: number;
    fActivate: Boolean;
    bPortNumber: number;
    bDeviceLogicAddr: number;
    fUseSecureConnection: Boolean;
    fDisableSCBKD: Boolean;
    strSecuredModePwd: string;
    strAltSecuredModePwd: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4OSDPInput.xml
export interface TApcASP4OSDPInput {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bNumber: number;
    fMaskedFlag: Boolean;
    bNormalState: number;
    fConfiguredFlag: Boolean;
    fLatchedFlag: Boolean;
    fAckFlag: Boolean;
    bAckReptTO: number;
    dwEntranceDelay: number;
    dwExitDelay: number;
    SysAddrMaskTZ: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4OSDPRelay.xml
export interface TApcASP4OSDPRelay {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bNumber: number;
    fPulseAtTZStart: Boolean;
    fPulseAtTZEnd: Boolean;
    fTurnOnWhileTZActive: Boolean;
    fConfigured: Boolean;
    SysAddrControlTZ: string;
    wPulseDuration: number;
    fInitialState: Boolean;
    fRelayOffTerminatesPulse: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4Reader.xml
export interface TApcASP4Reader {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bNumber: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4ReaderWrap.xml
export interface TApcASP4ReaderWrap {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bNumber: number;
    bCurrStatus: number;
    bThreatLevel: number;
    dwTimedAPB: number;
    bNextTO: number;
    bSignalType: number;
    bNumOfCards: number;
    bReaderMode: number;
    bUseLimit: number;
    fUseCardFormatList: Boolean;
    SysAddrCardFormatList: string;
    fDenyAccessUnderDuress: Boolean;
    fHostRequestOnDeny: Boolean;
    fHostRequestOnNotInFile: Boolean;
    fHostRequestOnGrant: Boolean;
    fDenyOnHostRequestTimeout: Boolean;
    fSabbathMode: Boolean;
    fDisableKeyEcho: Boolean;
    fDisableAccessPointCtrl: Boolean;
    fEnableHeldOpenAlarm: Boolean;
    SysAddrReaderLink: string;
    bReaderDir: number;
    blobFacilityStrikes: string;
    dwCypherCode: number;
    SysAddrCtrlTimeZone: string;
    bTZStartMode: number;
    bTZEndMode: number;
    dwLockTimeout: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4Relay.xml
export interface TApcASP4Relay {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bNumber: number;
    fPulseAtTZStart: Boolean;
    fPulseAtTZEnd: Boolean;
    fTurnOnWhileTZActive: Boolean;
    fConfigured: Boolean;
    SysAddrControlTZ: string;
    wPulseDuration: number;
    fInitialState: Boolean;
    fRelayOffTerminatesPulse: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4RelayModule.xml
export interface TApcASP4RelayModule {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bNumber: number;
    fPulseAtTZStart: Boolean;
    fPulseAtTZEnd: Boolean;
    fTurnOnWhileTZActive: Boolean;
    fConfigured: Boolean;
    SysAddrControlTZ: string;
    wPulseDuration: number;
    fInitialState: Boolean;
    fRelayOffTerminatesPulse: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4RelayWrap.xml
export interface TApcASP4RelayWrap {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    SysAddrHWComponent: string;
    bNumber: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4Script.xml
export interface TApcASP4Script {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    blobScript: string;
    wNumber: number;
    fAutoStart: Boolean;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4Socket.xml
export interface TApcASP4Socket {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    strIPAddress: string;
    wPort: number;
    dwReadTO: number;
    dwReconnectTO: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4Strike.xml
export interface TApcASP4Strike {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bNumber: number;
    fFireStrike: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4TimeZone.xml
export interface TApcASP4TimeZone {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    wNumber: number;
    dStartDate: string;
    bCycleLength: number;
    blobIntervalsBlob: string;
    blobHolidayIntervals: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4VGroup.xml
export interface TApcASP4VGroup {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    wNumber: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4VGroupList.xml
export interface TApcASP4VGroupList {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bNumber: number;
    SysAddrVisitorGroup0: string;
    SysAddrVisitorGroup1: string;
    SysAddrVisitorGroup2: string;
    SysAddrVisitorGroup3: string;
    SysAddrVisitorGroup4: string;
    SysAddrVisitorGroup5: string;
    SysAddrVisitorGroup6: string;
    SysAddrVisitorGroup7: string;
    SysAddrVisitorGroup8: string;
    SysAddrVisitorGroup9: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4WCardFormat.xml
export interface TApcASP4WCardFormat {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bNumber: number;
    wLength: number;
    bFacilityStartingBit: number;
    bFacilityLength: number;
    bCardNumberStartingBit: number;
    wCardNumberLength: number;
    dwFacilityCodeValue: number;
    bBitsCountEvenParity: number;
    bBitsCountOddParity: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4ZoneGroup.xml
export interface TApcASP4ZoneGroup {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    wNumber: number;
    SysAddrParentZone: string;
    fMaskedFlag: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcASP4Ext\Registrar\tApcASP4ZoneGroupElem.xml
export interface TApcASP4ZoneGroupElem {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    SysAddrInputLink: string;
    wNumber: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcAxisDriver\Registrar\tApcAxisCamera.xml
export interface TApcAxisCamera {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwNumber: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcAxisDriver\Registrar\tApcAxisServer.xml
export interface TApcAxisServer {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    strIpAddress: string;
    strUserName: string;
    strPassword: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidInput.xml
export interface TApcBolidInput {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bInputNum: number;
    wCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidPotok_3N.xml
export interface TApcBolidPotok_3N {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwAddress: number;
    wCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidRelay.xml
export interface TApcBolidRelay {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bRelayNum: number;
    bDelay: number;
    wCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidRIP_12_2A_RS.xml
export interface TApcBolidRIP_12_2A_RS {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwAddress: number;
    wCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidRIP_12_RS.xml
export interface TApcBolidRIP_12_RS {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwAddress: number;
    wCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidRIP_24_2A_RS.xml
export interface TApcBolidRIP_24_2A_RS {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwAddress: number;
    wCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidRupor.xml
export interface TApcBolidRupor {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwAddress: number;
    wCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidRuporv01.xml
export interface TApcBolidRuporv01 {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwAddress: number;
    wCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidRupor_200.xml
export interface TApcBolidRupor_200 {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwAddress: number;
    wCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidS2000KSPult.xml
export interface TApcBolidS2000KSPult {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bPultNumber: number;
    wCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidS2000MPult.xml
export interface TApcBolidS2000MPult {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bPultNumber: number;
    wCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidS2000Pult.xml
export interface TApcBolidS2000Pult {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bPultNumber: number;
    wCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidS2000_2.xml
export interface TApcBolidS2000_2 {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwAddress: number;
    wCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidS2000_4.xml
export interface TApcBolidS2000_4 {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwAddress: number;
    wCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidS2000_Adem.xml
export interface TApcBolidS2000_Adem {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwAddress: number;
    wCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidS2000_ASPT.xml
export interface TApcBolidS2000_ASPT {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwAddress: number;
    wCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidS2000_BI.xml
export interface TApcBolidS2000_BI {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwAddress: number;
    wCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidS2000_BIv01.xml
export interface TApcBolidS2000_BIv01 {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwAddress: number;
    wCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidS2000_BKI.xml
export interface TApcBolidS2000_BKI {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwAddress: number;
    wCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidS2000_IT.xml
export interface TApcBolidS2000_IT {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwAddress: number;
    wCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidS2000_K.xml
export interface TApcBolidS2000_K {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwAddress: number;
    wCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidS2000_KC.xml
export interface TApcBolidS2000_KC {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwAddress: number;
    wCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidS2000_KDL.xml
export interface TApcBolidS2000_KDL {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwAddress: number;
    wCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidS2000_KDL_2I.xml
export interface TApcBolidS2000_KDL_2I {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwAddress: number;
    wCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidS2000_KPB.xml
export interface TApcBolidS2000_KPB {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwAddress: number;
    wCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidS2000_PCN.xml
export interface TApcBolidS2000_PCN {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwAddress: number;
    wCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidS2000_PGE.xml
export interface TApcBolidS2000_PGE {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwAddress: number;
    wCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidS2000_PT.xml
export interface TApcBolidS2000_PT {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwAddress: number;
    wCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidSerialPort.xml
export interface TApcBolidSerialPort {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bPortNumber: number;
    bProtocolType: number;
    bConverterType: number;
    dwBaudRate: number;
    bPriority: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidSignal10.xml
export interface TApcBolidSignal10 {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwAddress: number;
    wCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidSignal20.xml
export interface TApcBolidSignal20 {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwAddress: number;
    wCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidSignal20M.xml
export interface TApcBolidSignal20M {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwAddress: number;
    wCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidSignal20P.xml
export interface TApcBolidSignal20P {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwAddress: number;
    wCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidSignal20ser02.xml
export interface TApcBolidSignal20ser02 {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwAddress: number;
    wCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidSocketDrv.xml
export interface TApcBolidSocketDrv {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    strIPServer: string;
    dwPortServer: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidUO_4S.xml
export interface TApcBolidUO_4S {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwAddress: number;
    wCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcBolidExt\Registrar\tApcBolidXMLRPCSettings.xml
export interface TApcBolidXMLRPCSettings {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    fActivate: Boolean;
    strLogin: string;
    strPassword: string;
    wCallbackEventPort: number;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcISSExt\Registrar\tApcISSCam.xml
export interface TApcISSCam {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwNumber: number;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcISSExt\Registrar\tApcISSGrabber.xml
export interface TApcISSGrabber {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwNumber: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcISSExt\Registrar\tApcISSSocketDrv.xml
export interface TApcISSSocketDrv {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    fActivate: Boolean;
    strIPServer: string;
    strPassword: string;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcITVExt\Registrar\tApcITVCam.xml
export interface TApcITVCam {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwNumber: number;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcITVExt\Registrar\tApcITVCamZone.xml
export interface TApcITVCamZone {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwNumber: number;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcITVExt\Registrar\tApcITVGrabber.xml
export interface TApcITVGrabber {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwNumber: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcITVExt\Registrar\tApcITVSocketDrv.xml
export interface TApcITVSocketDrv {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    fActivate: Boolean;
    strIPServer: string;
    strPassword: string;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelACU100.xml
export interface TApcSatelACU100 {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bAddress: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelAdmin.xml
export interface TApcSatelAdmin {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    strUserName: string;
    bUserNum: number;
    strAccCode: string;
    strPhoneCode: string;
    bUserType: number;
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
    bUserTime: number;
    bUserSchedule: number;
    fUseProxCard: Boolean;
    strProxCardNum: string;
    fUseDallasCard: Boolean;
    strDallasCardNum: string;
    fUseTime: Boolean;
    bPartBlockTime: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelCA64ADR.xml
export interface TApcSatelCA64ADR {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bAddress: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelCA64DR.xml
export interface TApcSatelCA64DR {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bAddress: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelCA64E.xml
export interface TApcSatelCA64E {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bAddress: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelCA64Ei.xml
export interface TApcSatelCA64Ei {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bAddress: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelCA64EPS.xml
export interface TApcSatelCA64EPS {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bAddress: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelCA64EPSi.xml
export interface TApcSatelCA64EPSi {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bAddress: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelCA64O.xml
export interface TApcSatelCA64O {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bAddress: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelCA64OPS.xml
export interface TApcSatelCA64OPS {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bAddress: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelCA64PP.xml
export interface TApcSatelCA64PP {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bAddress: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelCA64PTSA.xml
export interface TApcSatelCA64PTSA {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bAddress: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelCA64SM.xml
export interface TApcSatelCA64SM {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bAddress: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelCA64SR.xml
export interface TApcSatelCA64SR {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bAddress: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelContrInput.xml
export interface TApcSatelContrInput {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bInputNum: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelDoorInput.xml
export interface TApcSatelDoorInput {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bInputNum: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelETHM1.xml
export interface TApcSatelETHM1 {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bAddress: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelExtenderLink.xml
export interface TApcSatelExtenderLink {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    SysAddrExtender: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelInput.xml
export interface TApcSatelInput {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bInputNum: number;
    bRealInputNum: number;
    bInputType: number;
    fActive: Boolean;
    fConfigured: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelInputLink.xml
export interface TApcSatelInputLink {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    SysAddrInput: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelInputR.xml
export interface TApcSatelInputR {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bInputNum: number;
    bRealInputNum: number;
    bInputType: number;
    fActive: Boolean;
    fConfigured: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelInputsGroup.xml
export interface TApcSatelInputsGroup {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bAddress: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelIntegra128.xml
export interface TApcSatelIntegra128 {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    fActivate: Boolean;
    bCurrStatus: number;
    bUniqueID: number;
    bControlMode: number;
    bCfgMode: number;
    SysAddrControlUser: string;
    SysAddrCfgUser: string;
    fUsePrefix: Boolean;
    strStdPrefix: string;
    wFirstCodeTO: number;
    fLoadCfg: Boolean;
    dwLastEvIndex: number;
    blobEventsRead: string;
    blobInputExtOrder: string;
    blobRelayExtOrder: string;
    blobCurrUserCode: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelIntegra128WRL.xml
export interface TApcSatelIntegra128WRL {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    fActivate: Boolean;
    bCurrStatus: number;
    bUniqueID: number;
    bControlMode: number;
    bCfgMode: number;
    SysAddrControlUser: string;
    SysAddrCfgUser: string;
    fUsePrefix: Boolean;
    strStdPrefix: string;
    wFirstCodeTO: number;
    fLoadCfg: Boolean;
    dwLastEvIndex: number;
    blobEventsRead: string;
    blobInputExtOrder: string;
    blobRelayExtOrder: string;
    blobCurrUserCode: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelIntegra24.xml
export interface TApcSatelIntegra24 {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    fActivate: Boolean;
    bCurrStatus: number;
    bUniqueID: number;
    bControlMode: number;
    bCfgMode: number;
    SysAddrControlUser: string;
    SysAddrCfgUser: string;
    fUsePrefix: Boolean;
    strStdPrefix: string;
    wFirstCodeTO: number;
    fLoadCfg: Boolean;
    dwLastEvIndex: number;
    blobEventsRead: string;
    blobInputExtOrder: string;
    blobRelayExtOrder: string;
    blobCurrUserCode: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelIntegra32.xml
export interface TApcSatelIntegra32 {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    fActivate: Boolean;
    bCurrStatus: number;
    bUniqueID: number;
    bControlMode: number;
    bCfgMode: number;
    SysAddrControlUser: string;
    SysAddrCfgUser: string;
    fUsePrefix: Boolean;
    strStdPrefix: string;
    wFirstCodeTO: number;
    fLoadCfg: Boolean;
    dwLastEvIndex: number;
    blobEventsRead: string;
    blobInputExtOrder: string;
    blobRelayExtOrder: string;
    blobCurrUserCode: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelIntegra64.xml
export interface TApcSatelIntegra64 {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    fActivate: Boolean;
    bCurrStatus: number;
    bUniqueID: number;
    bControlMode: number;
    bCfgMode: number;
    SysAddrControlUser: string;
    SysAddrCfgUser: string;
    fUsePrefix: Boolean;
    strStdPrefix: string;
    wFirstCodeTO: number;
    fLoadCfg: Boolean;
    dwLastEvIndex: number;
    blobEventsRead: string;
    blobInputExtOrder: string;
    blobRelayExtOrder: string;
    blobCurrUserCode: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelINTENT.xml
export interface TApcSatelINTENT {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bAddress: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelINTIORS.xml
export interface TApcSatelINTIORS {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bAddress: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelINTIT.xml
export interface TApcSatelINTIT {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bAddress: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelINTKLCD.xml
export interface TApcSatelINTKLCD {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bAddress: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelINTKLCDR.xml
export interface TApcSatelINTKLCDR {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bAddress: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelINTORS.xml
export interface TApcSatelINTORS {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bAddress: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelINTRS.xml
export interface TApcSatelINTRS {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bAddress: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelINTRX.xml
export interface TApcSatelINTRX {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bAddress: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelINTS.xml
export interface TApcSatelINTS {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bAddress: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelINTSCR.xml
export interface TApcSatelINTSCR {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bAddress: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelINTSZ.xml
export interface TApcSatelINTSZ {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bAddress: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelJamInput.xml
export interface TApcSatelJamInput {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bInputNum: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelObject.xml
export interface TApcSatelObject {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bObjNum: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelPartition.xml
export interface TApcSatelPartition {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bPartitionNum: number;
    bPartitionType: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelPartitionLink.xml
export interface TApcSatelPartitionLink {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    SysAddrPartition: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelRelay.xml
export interface TApcSatelRelay {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bRelayNum: number;
    bRealRelayNum: number;
    bRelayType: number;
    fConfigured: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelSerialPort.xml
export interface TApcSatelSerialPort {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    strPortName: string;
    dwBoudRate: number;
    bByteSize: number;
    bParity: number;
    bNumStopBits: number;
    bFlowControl: number;
    dwReadTo: number;
    dwReadToMultiplier: number;
    dwReadToConstant: number;
    dwWriteToMultiplier: number;
    dwWriteToConstant: number;
    dwInQueue: number;
    dwOutQueue: number;
    dwMaxReadTO: number;
    dwMaxWriteTO: number;
    dwDelayBeforeSend: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelService.xml
export interface TApcSatelService {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    strUserName: string;
    bUserNum: number;
    strAccCode: string;
    strPhoneCode: string;
    bUserType: number;
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
    bUserTime: number;
    bUserSchedule: number;
    fUseProxCard: Boolean;
    strProxCardNum: string;
    fUseDallasCard: Boolean;
    strDallasCardNum: string;
    fUseTime: Boolean;
    bPartBlockTime: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelStatusInput.xml
export interface TApcSatelStatusInput {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bInputNum: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelUser.xml
export interface TApcSatelUser {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    strUserName: string;
    bUserNum: number;
    strAccCode: string;
    strPhoneCode: string;
    bUserType: number;
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
    bUserTime: number;
    bUserSchedule: number;
    fUseProxCard: Boolean;
    strProxCardNum: string;
    fUseDallasCard: Boolean;
    strDallasCardNum: string;
    fUseTime: Boolean;
    bPartBlockTime: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelUserLink.xml
export interface TApcSatelUserLink {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    SysAddrUser: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelVirtualExtender.xml
export interface TApcSatelVirtualExtender {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bAddress: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelWRLInputsGroup.xml
export interface TApcSatelWRLInputsGroup {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bAddress: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSatelExt\Registrar\tApcSatelWRLRelaysGroup.xml
export interface TApcSatelWRLRelaysGroup {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCurrStatus: number;
    bAddress: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSecurityManager\Registrar\tApcAccount.xml
export interface TApcAccount {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    fActive: Boolean;
    bStatus: number;
    strSGList: string;
    blobOwnSG: string;
    dtActDateTime: string;
    dtDeactDateTime: string;
    tEveryDayActTime: string;
    tEveryDayDeactTime: string;
    fHostCheckBeforeDenied: Boolean;
    fHostCheckBeforeGrant: Boolean;
    fAPBExempt: Boolean;
    fUseLongTimes: Boolean;
    strPIN: string;
    fPINExempt: Boolean;
    fAllowPINCmds: Boolean;
    fEnterClosedAPB: Boolean;
    fSoftAPB: Boolean;
    bThreatLevel: number;
    SysAddrBadgeModel: string;
    SysAddrVisEscortExt: string;
    fUnlockReader: Boolean;
    fUseOwnSG: Boolean;
    SysAddrTemplate: string;
    u64CardNumber: number;
    u64FC: number;
    bIssueCode: number;
    SysAddrAccExt: string;
    strAdd1: string;
    strAdd2: string;
    strAdd3: string;
    nAdd4: number;
    nAdd5: number;
    nAdd6: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSecurityManager\Registrar\tApcAccountExtension.xml
export interface TApcAccountExtension {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    blobSettings: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSecurityManager\Registrar\tApcCardHolder.xml
export interface TApcCardHolder {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    fActive: Boolean;
    bStatus: number;
    strSGList: string;
    blobOwnSG: string;
    dtActDateTime: string;
    dtDeactDateTime: string;
    tEveryDayActTime: string;
    tEveryDayDeactTime: string;
    fHostCheckBeforeDenied: Boolean;
    fHostCheckBeforeGrant: Boolean;
    fAPBExempt: Boolean;
    fUseLongTimes: Boolean;
    strPIN: string;
    fPINExempt: Boolean;
    fAllowPINCmds: Boolean;
    fEnterClosedAPB: Boolean;
    fSoftAPB: Boolean;
    bThreatLevel: number;
    SysAddrBadgeModel: string;
    SysAddrVisEscortExt: string;
    fUnlockReader: Boolean;
    strFirstName: string;
    strMiddleName: string;
    strLastName: string;
    bGender: number;
    SysAddrDepartment: string;
    SysAddrJobTitle: string;
    SysAddrCompany: string;
    SysAddrSegment: string;
    strPhoneNumber: string;
    strEMailAddress: string;
    strAdd1: string;
    strAdd2: string;
    strAdd3: string;
    strAdd4: string;
    strAdd5: string;
    strAdd6: string;
    strAdd7: string;
    strAdd8: string;
    strAdd9: string;
    strAdd10: string;
    strAdd11: string;
    strAdd12: string;
    strAdd13: string;
    strAdd14: string;
    strAdd15: string;
    strAdd16: string;
    strAdd17: string;
    strAdd18: string;
    strAdd19: string;
    strAdd20: string;
    SysAddrRef1: string;
    SysAddrRef2: string;
    dwNumber: number;
    bEmployee: number;
    bAdminLevel: number;
    bSecurityLevel: number;
    bFingerAuthMode: number;
    bCardAuthMode: number;
    bIdAuthMode: number;
    bFaceAuthGroup: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSecurityManager\Registrar\tApcClientFactory.xml
// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSecurityManager\Registrar\tApcSecurityGroup.xml
export interface TApcSecurityGroup {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    blobProperties: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSecurityManager\Registrar\tApcSecurityManagerCheck.xml
// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSecurityManager\Registrar\tApcSecurityManagerDBInfo.xml
// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSecurityManager\Registrar\tApcSecurityManagerDBInfoNumTypes.xml
// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSecurityManager\Registrar\tApcSecurityManagerTypeInfo.xml
// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSecurityManager\Registrar\tApcSupremaBioData.xml
export interface TApcSupremaBioData {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    blobBioData: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSecurityManager\Registrar\tApcVisEscortExtension.xml
export interface TApcVisEscortExtension {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    blobVisEscortCntr: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSrvMainObjectExt\Registrar\tApcMainObjDBInfo.xml
// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSrvMainObjectExt\Registrar\tApcMainObjDBInfoNumTypes.xml
// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSrvMainObjectExt\Registrar\tApcMainObjTypeInfo.xml
// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSrvMainObjectExt\Registrar\tApcPC.xml
export interface TApcPC {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    strIPName: string;
    strIPPortName: string;
    wPCID: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSrvMainObjectExt\Registrar\tApcRoot.xml
export interface TApcRoot {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    nSiteID: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcSrvMainObjectExt\Registrar\tApcServiceRegistry.xml
export interface TApcServiceRegistry {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    blobXML: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcV100.xml
export interface TApcV100 {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bAddress: number;
    strEEPROMFileName: string;
    bCurrStatus: number;
    fMasterSlave: Boolean;
    fEnableVisualAlarms: Boolean;
    blobCardFrmtTable: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcV1000.xml
export interface TApcV1000 {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    fActivate: Boolean;
    dwPollInterval: number;
    wInternalID: number;
    bPollDelay: number;
    bResponseTimeout: number;
    bNumberPrimaryPolls: number;
    bMaxTries: number;
    dwMaxNumCards: number;
    fAutoRestartTasks: Boolean;
    fLoadEEPROM: Boolean;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcV200.xml
export interface TApcV200 {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bAddress: number;
    strEEPROMFileName: string;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcV2000.xml
export interface TApcV2000 {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    fActivate: Boolean;
    dwPollInterval: number;
    wInternalID: number;
    bPollDelay: number;
    bResponseTimeout: number;
    bNumberPrimaryPolls: number;
    bMaxTries: number;
    dwMaxNumCards: number;
    fAutoRestartTasks: Boolean;
    fLoadEEPROM: Boolean;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcV300.xml
export interface TApcV300 {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bAddress: number;
    strEEPROMFileName: string;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVAL.xml
export interface TApcVAL {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    wALNum: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVALElem.xml
export interface TApcVALElem {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    SysAddrReaderGroup: string;
    SysAddrShedule: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVAPB.xml
export interface TApcVAPB {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bAPBNum: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVAutomation.xml
export interface TApcVAutomation {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    wPeerNotifyTO: number;
    wSchedPollTO: number;
    blobData: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVAuxInput.xml
export interface TApcVAuxInput {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bInputNum: number;
    fNotifyOnChange: Boolean;
    bCurrStatus: number;
    bHRUL: number;
    bHRLL: number;
    bLRUL: number;
    bLRLL: number;
    bDebounce: number;
    fActive: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVCardFormat.xml
export interface TApcVCardFormat {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwFormatNum: number;
    strControllerPath: string;
    blobFormat: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVCardSet.xml
export interface TApcVCardSet {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCardSetNum: number;
    fUseFixField0: Boolean;
    fUseFixField1: Boolean;
    fUseFixField2: Boolean;
    fUseFixField3: Boolean;
    fUseFixField4: Boolean;
    fUseFixField5: Boolean;
    fUseFixField6: Boolean;
    fUseFixField7: Boolean;
    dwFixFieldValue0: number;
    dwFixFieldValue1: number;
    dwFixFieldValue2: number;
    dwFixFieldValue3: number;
    dwFixFieldValue4: number;
    dwFixFieldValue5: number;
    dwFixFieldValue6: number;
    dwFixFieldValue7: number;
    SysAddrFormat: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVContrInput.xml
export interface TApcVContrInput {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bInputNum: number;
    fNotifyOnChange: Boolean;
    bCurrStatus: number;
    bHRUL: number;
    bHRLL: number;
    bLRUL: number;
    bLRLL: number;
    bDebounce: number;
    fActive: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVCtrlGroup.xml
export interface TApcVCtrlGroup {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwCtrlGrpNum: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVCtrlObjLink.xml
export interface TApcVCtrlObjLink {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bState: number;
    SysAddrCtrlObj: string;
    fInverse: Boolean;
    bTransitionType: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVDoorInput.xml
export interface TApcVDoorInput {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bInputNum: number;
    fNotifyOnChange: Boolean;
    bCurrStatus: number;
    bHRUL: number;
    bHRLL: number;
    bLRUL: number;
    bLRLL: number;
    bDebounce: number;
    fActive: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVEDGE.xml
export interface TApcVEDGE {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    fActivate: Boolean;
    dwPollInterval: number;
    wInternalID: number;
    bPollDelay: number;
    bResponseTimeout: number;
    bNumberPrimaryPolls: number;
    bMaxTries: number;
    dwMaxNumCards: number;
    fAutoRestartTasks: Boolean;
    fLoadEEPROM: Boolean;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVElevRelayGroup.xml
export interface TApcVElevRelayGroup {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bElevRelayGroupNum: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVElevRelayGroupElem.xml
export interface TApcVElevRelayGroupElem {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    SysAddrRelay: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVertXSocket.xml
export interface TApcVertXSocket {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    strIPName: string;
    strIPPortName: string;
    dwReadTO: number;
    dwWriteTO: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVHolidayGroup.xml
export interface TApcVHolidayGroup {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwHolidayGroupNum: number;
    blobHolidays: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVHolidayGroupElem.xml
export interface TApcVHolidayGroupElem {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    SysAddrHoldayGroup: string;
    tStartTime0: string;
    tStartTime1: string;
    tStartTime2: string;
    tStartTime3: string;
    tStartTime4: string;
    tStartTime5: string;
    tEndTime0: string;
    tEndTime1: string;
    tEndTime2: string;
    tEndTime3: string;
    tEndTime4: string;
    tEndTime5: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVInputCtrlObjLink.xml
export interface TApcVInputCtrlObjLink {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bState: number;
    SysAddrCtrlObj: string;
    fInverse: Boolean;
    bTransitionType: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVKeyPad.xml
export interface TApcVKeyPad {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwKeyPadNum: number;
    blobRaw2DigitTransl: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVReader.xml
export interface TApcVReader {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwRdrNum: number;
    bNumberOnPanel: number;
    bPriority: number;
    bInitMode: number;
    SysAddrNoPINTZ: string;
    fAllowPINCmds: Boolean;
    bHardwareType: number;
    fIsElevator: Boolean;
    bAPBMode: number;
    wAPBTime: number;
    bActOnAPBViol: number;
    SysAddrAPBEntering: string;
    SysAddrAPBLeaving: string;
    fSendRequestToHost: Boolean;
    bMaxPINLength: number;
    bPINTO: number;
    bEndCode: number;
    bClearCode: number;
    bTryLimit: number;
    bLockoutTO: number;
    SysAddrKeyPad: string;
    wGrantAccTime: number;
    wGrantAccExtTime: number;
    wMinOpenTime: number;
    wHeldOpenTime: number;
    wFloorSelectTO: number;
    fInvertFloorRelays: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVReaderCtrlObj.xml
export interface TApcVReaderCtrlObj {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    SysAddrCtrlObj: string;
    bFunc: number;
    bParam: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVReaderElev.xml
export interface TApcVReaderElev {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwRdrNum: number;
    bNumberOnPanel: number;
    bPriority: number;
    bInitMode: number;
    SysAddrNoPINTZ: string;
    fAllowPINCmds: Boolean;
    bHardwareType: number;
    fIsElevator: Boolean;
    bAPBMode: number;
    wAPBTime: number;
    bActOnAPBViol: number;
    SysAddrAPBEntering: string;
    SysAddrAPBLeaving: string;
    fSendRequestToHost: Boolean;
    bMaxPINLength: number;
    bPINTO: number;
    bEndCode: number;
    bClearCode: number;
    bTryLimit: number;
    bLockoutTO: number;
    SysAddrKeyPad: string;
    wGrantAccTime: number;
    wGrantAccExtTime: number;
    wMinOpenTime: number;
    wHeldOpenTime: number;
    wFloorSelectTO: number;
    fInvertFloorRelays: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVReaderGroup.xml
export interface TApcVReaderGroup {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwRdrGroupNum: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVReaderGroupElem.xml
export interface TApcVReaderGroupElem {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    SysAddrReader: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVReaderGrpCtrlObj.xml
export interface TApcVReaderGrpCtrlObj {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    SysAddrCtrlObj: string;
    bFunc: number;
    bParam: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVReaderInput.xml
export interface TApcVReaderInput {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bInputNum: number;
    fNotifyOnChange: Boolean;
    bCurrStatus: number;
    fBeepOnAlarm: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVRelay.xml
export interface TApcVRelay {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bRelayNum: number;
    wPulseTime: number;
    bInitMode: number;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVRelayCtrlObj.xml
export interface TApcVRelayCtrlObj {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    SysAddrCtrlObj: string;
    bFunc: number;
    bParam: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVRelayGrpCtrlObj.xml
export interface TApcVRelayGrpCtrlObj {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    SysAddrCtrlObj: string;
    bFunc: number;
    bParam: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVRexInput.xml
export interface TApcVRexInput {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bInputNum: number;
    fNotifyOnChange: Boolean;
    bCurrStatus: number;
    bHRUL: number;
    bHRLL: number;
    bLRUL: number;
    bLRLL: number;
    bDebounce: number;
    fActive: Boolean;
    fUnlockDoor: Boolean;
    wOpenTime: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\ApcVertXExt\Registrar\tApcVShedule.xml
export interface TApcVShedule {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwSheduleNum: number;
    tDay0_StartTime0: string;
    tDay0_StartTime1: string;
    tDay0_StartTime2: string;
    tDay0_StartTime3: string;
    tDay0_StartTime4: string;
    tDay0_StartTime5: string;
    tDay1_StartTime0: string;
    tDay1_StartTime1: string;
    tDay1_StartTime2: string;
    tDay1_StartTime3: string;
    tDay1_StartTime4: string;
    tDay1_StartTime5: string;
    tDay2_StartTime0: string;
    tDay2_StartTime1: string;
    tDay2_StartTime2: string;
    tDay2_StartTime3: string;
    tDay2_StartTime4: string;
    tDay2_StartTime5: string;
    tDay3_StartTime0: string;
    tDay3_StartTime1: string;
    tDay3_StartTime2: string;
    tDay3_StartTime3: string;
    tDay3_StartTime4: string;
    tDay3_StartTime5: string;
    tDay4_StartTime0: string;
    tDay4_StartTime1: string;
    tDay4_StartTime2: string;
    tDay4_StartTime3: string;
    tDay4_StartTime4: string;
    tDay4_StartTime5: string;
    tDay5_StartTime0: string;
    tDay5_StartTime1: string;
    tDay5_StartTime2: string;
    tDay5_StartTime3: string;
    tDay5_StartTime4: string;
    tDay5_StartTime5: string;
    tDay6_StartTime0: string;
    tDay6_StartTime1: string;
    tDay6_StartTime2: string;
    tDay6_StartTime3: string;
    tDay6_StartTime4: string;
    tDay6_StartTime5: string;
    tDay0_EndTime0: string;
    tDay0_EndTime1: string;
    tDay0_EndTime2: string;
    tDay0_EndTime3: string;
    tDay0_EndTime4: string;
    tDay0_EndTime5: string;
    tDay1_EndTime0: string;
    tDay1_EndTime1: string;
    tDay1_EndTime2: string;
    tDay1_EndTime3: string;
    tDay1_EndTime4: string;
    tDay1_EndTime5: string;
    tDay2_EndTime0: string;
    tDay2_EndTime1: string;
    tDay2_EndTime2: string;
    tDay2_EndTime3: string;
    tDay2_EndTime4: string;
    tDay2_EndTime5: string;
    tDay3_EndTime0: string;
    tDay3_EndTime1: string;
    tDay3_EndTime2: string;
    tDay3_EndTime3: string;
    tDay3_EndTime4: string;
    tDay3_EndTime5: string;
    tDay4_EndTime0: string;
    tDay4_EndTime1: string;
    tDay4_EndTime2: string;
    tDay4_EndTime3: string;
    tDay4_EndTime4: string;
    tDay4_EndTime5: string;
    tDay5_EndTime0: string;
    tDay5_EndTime1: string;
    tDay5_EndTime2: string;
    tDay5_EndTime3: string;
    tDay5_EndTime4: string;
    tDay5_EndTime5: string;
    tDay6_EndTime0: string;
    tDay6_EndTime1: string;
    tDay6_EndTime2: string;
    tDay6_EndTime3: string;
    tDay6_EndTime4: string;
    tDay6_EndTime5: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplAAN100Contr.xml
export interface TAplAAN100Contr {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    fActivate: Boolean;
    bAddress: number;
    dwPollInterval: number;
    wHostLostTO: number;
    wInterCharTO: number;
    wReplyLine: number;
    wClear2SendDelay: number;
    wReceiveDelay: number;
    dwMaxNumCards: number;
    bCardLenType: number;
    bPinType: number;
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
    bDuressOffsetCode: number;
    fDisableDuressReport: Boolean;
    scClockCorrection: number;
    SysAddrResetAPBTZ: string;
    b2CardControlTO: number;
    fDisableGrandReaderOnCmd: Boolean;
    fNeedZoneGroupAuth: Boolean;
    fNeedSpecCmdAuth: Boolean;
    bTimedAPBSettings: number;
    fDenyCardIfInGrandCycle: Boolean;
    fUseNetProtocol: Boolean;
    bHostAccReqTO: number;
    fActTimeEachDay: Boolean;
    strPhone1: string;
    strPhone2: string;
    bRegS0: number;
    bRegS6: number;
    bRegS7: number;
    bRegS8: number;
    bRegS9: number;
    bRegS10: number;
    bCallRetryCount: number;
    bTimeBetweenRetry: number;
    wAAMDialSiteAddress: number;
    wHostDialSiteAddress: number;
    fRestrictCommand: Boolean;
    fCallback: Boolean;
    SysAddrDayNightTZ: string;
    SysAddrRegularCallTZ1: string;
    SysAddrRegularCallTZ2: string;
    bCurrStatus: number;
    bModePort_2: number;
    bModePort_3: number;
    bModePort_4: number;
    bModePort_5: number;
    bTXDDrvDelay_2: number;
    bTXDDrvDelay_3: number;
    bTXDDrvDelay_4: number;
    bTXDDrvDelay_5: number;
    bReceiveDelay_2: number;
    bReceiveDelay_3: number;
    bReceiveDelay_4: number;
    bReceiveDelay_5: number;
    bInterCharTO_2: number;
    bInterCharTO_3: number;
    bInterCharTO_4: number;
    bInterCharTO_5: number;
    bReplyTO_2: number;
    bReplyTO_3: number;
    bReplyTO_4: number;
    bReplyTO_5: number;
    wPollInterval_2: number;
    wPollInterval_3: number;
    wPollInterval_4: number;
    wPollInterval_5: number;
    wOffPollInterval_2: number;
    wOffPollInterval_3: number;
    wOffPollInterval_4: number;
    wOffPollInterval_5: number;
    bUndefCurrColor: number;
    bUndefNextColor: number;
    bUndefPulseTime: number;
    bSafeCurrColor: number;
    bSafeNextColor: number;
    bSafePulseTime: number;
    bFaultCurrColor: number;
    bFaultNextColor: number;
    bFaultPulseTime: number;
    bAlarmCurrColor: number;
    bAlarmNextColor: number;
    bAlarmPulseTime: number;
    bAccGrantCurrColor: number;
    bAccGrantNextColor: number;
    bAccGrantPulseTime: number;
    bAccDenyCurrColor: number;
    bAccDenyNextColor: number;
    bAccDenyPulseTime: number;
    bAccDuressCurrColor: number;
    bAccDuressNextColor: number;
    bAccDuressPulseTime: number;
    bMaskedCurrColor: number;
    bMaskedNextColor: number;
    bMaskedPulseTime: number;
    bUseCustomTime: number;
    nCustomTimeZone: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplAAN32Contr.xml
export interface TAplAAN32Contr {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    fActivate: Boolean;
    bAddress: number;
    dwPollInterval: number;
    wHostLostTO: number;
    wInterCharTO: number;
    wReplyLine: number;
    wClear2SendDelay: number;
    wReceiveDelay: number;
    dwMaxNumCards: number;
    bCardLenType: number;
    bPinType: number;
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
    bDuressOffsetCode: number;
    fDisableDuressReport: Boolean;
    scClockCorrection: number;
    SysAddrResetAPBTZ: string;
    b2CardControlTO: number;
    fDisableGrandReaderOnCmd: Boolean;
    fNeedZoneGroupAuth: Boolean;
    fNeedSpecCmdAuth: Boolean;
    bTimedAPBSettings: number;
    fDenyCardIfInGrandCycle: Boolean;
    fUseNetProtocol: Boolean;
    bHostAccReqTO: number;
    fActTimeEachDay: Boolean;
    strPhone1: string;
    strPhone2: string;
    bRegS0: number;
    bRegS6: number;
    bRegS7: number;
    bRegS8: number;
    bRegS9: number;
    bRegS10: number;
    bCallRetryCount: number;
    bTimeBetweenRetry: number;
    wAAMDialSiteAddress: number;
    wHostDialSiteAddress: number;
    fRestrictCommand: Boolean;
    fCallback: Boolean;
    SysAddrDayNightTZ: string;
    SysAddrRegularCallTZ1: string;
    SysAddrRegularCallTZ2: string;
    bCurrStatus: number;
    bModePort_2: number;
    bModePort_3: number;
    bModePort_4: number;
    bModePort_5: number;
    bTXDDrvDelay_2: number;
    bTXDDrvDelay_3: number;
    bTXDDrvDelay_4: number;
    bTXDDrvDelay_5: number;
    bReceiveDelay_2: number;
    bReceiveDelay_3: number;
    bReceiveDelay_4: number;
    bReceiveDelay_5: number;
    bInterCharTO_2: number;
    bInterCharTO_3: number;
    bInterCharTO_4: number;
    bInterCharTO_5: number;
    bReplyTO_2: number;
    bReplyTO_3: number;
    bReplyTO_4: number;
    bReplyTO_5: number;
    wPollInterval_2: number;
    wPollInterval_3: number;
    wPollInterval_4: number;
    wPollInterval_5: number;
    wOffPollInterval_2: number;
    wOffPollInterval_3: number;
    wOffPollInterval_4: number;
    wOffPollInterval_5: number;
    bUndefCurrColor: number;
    bUndefNextColor: number;
    bUndefPulseTime: number;
    bSafeCurrColor: number;
    bSafeNextColor: number;
    bSafePulseTime: number;
    bFaultCurrColor: number;
    bFaultNextColor: number;
    bFaultPulseTime: number;
    bAlarmCurrColor: number;
    bAlarmNextColor: number;
    bAlarmPulseTime: number;
    bAccGrantCurrColor: number;
    bAccGrantNextColor: number;
    bAccGrantPulseTime: number;
    bAccDenyCurrColor: number;
    bAccDenyNextColor: number;
    bAccDenyPulseTime: number;
    bAccDuressCurrColor: number;
    bAccDuressNextColor: number;
    bAccDuressPulseTime: number;
    bMaskedCurrColor: number;
    bMaskedNextColor: number;
    bMaskedPulseTime: number;
    bUseCustomTime: number;
    nCustomTimeZone: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMC6IntervalTZ.xml
export interface TAplMC6IntervalTZ {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bNumber: number;
    bIntervalUsed: number;
    bStartHour0: number;
    bStartHour1: number;
    bStartHour2: number;
    bStartHour3: number;
    bStartHour4: number;
    bStartHour5: number;
    bStartMinute0: number;
    bStartMinute1: number;
    bStartMinute2: number;
    bStartMinute3: number;
    bStartMinute4: number;
    bStartMinute5: number;
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
    bEndMinute0: number;
    bEndMinute1: number;
    bEndMinute2: number;
    bEndMinute3: number;
    bEndMinute4: number;
    bEndMinute5: number;
    bEndHour0: number;
    bEndHour1: number;
    bEndHour2: number;
    bEndHour3: number;
    bEndHour4: number;
    bEndHour5: number;
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
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bALNumber: number;
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
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bInputNum: number;
    fImmediateDialAtDay: Boolean;
    fImmediateDialAtNight: Boolean;
    bCurrStatus: number;
    fInitMasked: Boolean;
    SysAddrMaskTZ: string;
    fLatched: Boolean;
    wEntryDelay: number;
    wExitDelay: number;
    fInitConfigured: Boolean;
    fNormalOpen: Boolean;
    fNormalOpenTamper: Boolean;
    bDigitAddress: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCAlarmPanelAIO16.xml
export interface TAplMCAlarmPanelAIO16 {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bLUNType: number;
    bLUNNumber: number;
    bNumberOnPanel: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCAlarmPanelAIO168.xml
export interface TAplMCAlarmPanelAIO168 {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bLUNType: number;
    bLUNNumber: number;
    bNumberOnPanel: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCAlarmPanelAIO8.xml
export interface TAplMCAlarmPanelAIO8 {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bLUNType: number;
    bLUNNumber: number;
    bNumberOnPanel: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCAlarmPanelAPA15.xml
export interface TAplMCAlarmPanelAPA15 {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bLUNType: number;
    bLUNNumber: number;
    bNumberOnPanel: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCAlarmPanelAPA16.xml
export interface TAplMCAlarmPanelAPA16 {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bLUNType: number;
    bLUNNumber: number;
    bNumberOnPanel: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCAlarmPanelAPD16.xml
export interface TAplMCAlarmPanelAPD16 {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bLUNType: number;
    bLUNNumber: number;
    bNumberOnPanel: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCAlarmRelay.xml
export interface TAplMCAlarmRelay {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bRelayNum: number;
    wPulseTime: number;
    bInitMode: number;
    SysAddrCtrlTZ: string;
    bPulseTimeResolution: number;
    bCurrStatus: number;
    fAllowResetPulse: Boolean;
    fOfflineMode: Boolean;
    fCOML: Boolean;
    fANYF: Boolean;
    fCTMP: Boolean;
    fPFL: Boolean;
    bLinkInput0: number;
    bLinkInput1: number;
    bLinkInput2: number;
    bLinkInput3: number;
    bLinkInput4: number;
    bLinkInput5: number;
    bLinkInput6: number;
    bLinkInput7: number;
    bLinkInput8: number;
    bLinkInput9: number;
    bLinkInput10: number;
    bLinkInput11: number;
    bLinkInput12: number;
    bLinkInput13: number;
    bLinkInput14: number;
    bLinkInput15: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCALElemElev.xml
export interface TAplMCALElemElev {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    fDownloadAL: Boolean;
    fAllowCommands: Boolean;
    SysAddrReader: string;
    SysAddrElevAL: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCALElemNorm.xml
export interface TAplMCALElemNorm {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    fDownloadAL: Boolean;
    fAllowCommands: Boolean;
    SysAddrReader: string;
    SysAddrCtrlTZ: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCALElemZoneGroup.xml
export interface TAplMCALElemZoneGroup {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    SysAddrZoneGroup: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCASA72.xml
export interface TAplMCASA72 {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bLUNType: number;
    bLUNNumber: number;
    bNumberOnPanel: number;
    fEnableBuzzer: Boolean;
    fNeedACKOnOffline: Boolean;
    bAutoACKEnableTime: number;
    bAutoACKRepeatTime: number;
    bBuzzerOnTime: number;
    bBuzzerOffTime: number;
    bEnableBuzzerTime: number;
    wFailedACKTO: number;
    wACKHoldingOnOffline: number;
    SysAddrACKTZ: string;
    SysAddrACKLogTZ: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCCardFormat.xml
export interface TAplMCCardFormat {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCardFormat: number;
    bFormatNumber: number;
    dwFCValue: number;
    nCardNumberOffset: number;
    f2DigitIssueCode: Boolean;
    bReferenceIndex1: number;
    bReferenceIndex2: number;
    bMinStartToRef1: number;
    bMinRef1ToRef2: number;
    bMinRef2ToEnd: number;
    bFCLocation0: number;
    bFCLocation1: number;
    bFCLocation2: number;
    bFCLocation3: number;
    bFCLocation4: number;
    bFCLocation5: number;
    bFCLocation6: number;
    bFCLocation7: number;
    bFCLocation8: number;
    bCardNumberLocation0: number;
    bCardNumberLocation1: number;
    bCardNumberLocation2: number;
    bCardNumberLocation3: number;
    bCardNumberLocation4: number;
    bCardNumberLocation5: number;
    bCardNumberLocation6: number;
    bCardNumberLocation7: number;
    bCardNumberLocation8: number;
    bIssueCodeLocation: number;
    bFCAMSLocation0: number;
    bFCAMSLocation1: number;
    bFCAMSLocation2: number;
    bFCAMSLocation3: number;
    bFCAMSLocation4: number;
    bFCAMSLocation5: number;
    bFCAMSLocation6: number;
    bFCAMSLocation7: number;
    bFCAMSLocation8: number;
    bBitsOnCard: number;
    bBitsForEven: number;
    bBitsForOdd: number;
    bNumBitsInFC: number;
    bIndexFCBegin: number;
    bNumBitsInCardNumber: number;
    bIndexCardNumberBegin: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCCardFrmtList.xml
export interface TAplMCCardFrmtList {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bListNumber: number;
    SysAddrCardFormat0: string;
    SysAddrCardFormat1: string;
    SysAddrCardFormat2: string;
    SysAddrCardFormat3: string;
    SysAddrCardFormat4: string;
    SysAddrCardFormat5: string;
    SysAddrCardFormat6: string;
    SysAddrCardFormat7: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCContrInput.xml
export interface TAplMCContrInput {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bInputNum: number;
    fImmediateDialAtDay: Boolean;
    fImmediateDialAtNight: Boolean;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCDownlSpecRec.xml
export interface TAplMCDownlSpecRec {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bRecNumber: number;
    dwNumberOfCards: number;
    bCardType: number;
    bPinType: number;
    fPrecisionAccess: Boolean;
    fUse6AL: Boolean;
    fStoreExtByte: Boolean;
    fUse32AL: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCElevAL.xml
export interface TAplMCElevAL {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bElevALNum: number;
    SysAddrCtrlTZ0: string;
    SysAddrCtrlTZ1: string;
    SysAddrCtrlTZ2: string;
    SysAddrCtrlTZ3: string;
    SysAddrCtrlTZ4: string;
    SysAddrCtrlTZ5: string;
    SysAddrCtrlTZ6: string;
    SysAddrCtrlTZ7: string;
    SysAddrCtrlTZ8: string;
    SysAddrCtrlTZ9: string;
    SysAddrCtrlTZ10: string;
    SysAddrCtrlTZ11: string;
    SysAddrCtrlTZ12: string;
    SysAddrCtrlTZ13: string;
    SysAddrCtrlTZ14: string;
    SysAddrCtrlTZ15: string;
    SysAddrCtrlTZ16: string;
    SysAddrCtrlTZ17: string;
    SysAddrCtrlTZ18: string;
    SysAddrCtrlTZ19: string;
    SysAddrCtrlTZ20: string;
    SysAddrCtrlTZ21: string;
    SysAddrCtrlTZ22: string;
    SysAddrCtrlTZ23: string;
    SysAddrCtrlTZ24: string;
    SysAddrCtrlTZ25: string;
    SysAddrCtrlTZ26: string;
    SysAddrCtrlTZ27: string;
    SysAddrCtrlTZ28: string;
    SysAddrCtrlTZ29: string;
    SysAddrCtrlTZ30: string;
    SysAddrCtrlTZ31: string;
    SysAddrCtrlTZ32: string;
    SysAddrCtrlTZ33: string;
    SysAddrCtrlTZ34: string;
    SysAddrCtrlTZ35: string;
    SysAddrCtrlTZ36: string;
    SysAddrCtrlTZ37: string;
    SysAddrCtrlTZ38: string;
    SysAddrCtrlTZ39: string;
    SysAddrCtrlTZ40: string;
    SysAddrCtrlTZ41: string;
    SysAddrCtrlTZ42: string;
    SysAddrCtrlTZ43: string;
    SysAddrCtrlTZ44: string;
    SysAddrCtrlTZ45: string;
    SysAddrCtrlTZ46: string;
    SysAddrCtrlTZ47: string;
    SysAddrCtrlTZ48: string;
    SysAddrCtrlTZ49: string;
    SysAddrCtrlTZ50: string;
    SysAddrCtrlTZ51: string;
    SysAddrCtrlTZ52: string;
    SysAddrCtrlTZ53: string;
    SysAddrCtrlTZ54: string;
    SysAddrCtrlTZ55: string;
    SysAddrCtrlTZ56: string;
    SysAddrCtrlTZ57: string;
    SysAddrCtrlTZ58: string;
    SysAddrCtrlTZ59: string;
    SysAddrCtrlTZ60: string;
    SysAddrCtrlTZ61: string;
    SysAddrCtrlTZ62: string;
    SysAddrCtrlTZ63: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCEscortGroupList.xml
export interface TAplMCEscortGroupList {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bListNum: number;
    SysAddrVisitorGroup0: string;
    SysAddrVisitorGroup1: string;
    SysAddrVisitorGroup2: string;
    SysAddrVisitorGroup3: string;
    SysAddrVisitorGroup4: string;
    SysAddrVisitorGroup5: string;
    SysAddrVisitorGroup6: string;
    SysAddrVisitorGroup7: string;
    SysAddrVisitorGroup8: string;
    SysAddrVisitorGroup9: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCHoliday.xml
export interface TAplMCHoliday {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dHolidayDate: string;
    fType1: Boolean;
    fType2: Boolean;
    fPermanent: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCHostInput.xml
export interface TAplMCHostInput {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bInputNum: number;
    fImmediateDialAtDay: Boolean;
    fImmediateDialAtNight: Boolean;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIV.xml
export interface TAplMCIV {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bLUNType: number;
    bLUNNumber: number;
    bHandleType: number;
    blobTermsValue: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIVALElevFloors.xml
export interface TAplMCIVALElevFloors {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bListNumber: number;
    blobArgs: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIVFuncAlarmRelayControl.xml
export interface TAplMCIVFuncAlarmRelayControl {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bFuncNumber: number;
    SysAddrArg: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIVFuncAPBControl.xml
export interface TAplMCIVFuncAPBControl {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bFuncNumber: number;
    SysAddrArg: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIVFuncChain.xml
export interface TAplMCIVFuncChain {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bFuncNumber: number;
    SysAddrArg: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIVFuncDenyElevFloors.xml
export interface TAplMCIVFuncDenyElevFloors {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bFuncNumber: number;
    SysAddrArg: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIVFuncEventLog.xml
export interface TAplMCIVFuncEventLog {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bFuncNumber: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIVFuncMaskZoneGroup.xml
export interface TAplMCIVFuncMaskZoneGroup {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bFuncNumber: number;
    SysAddrArg: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIVFuncReaderBeepControl.xml
export interface TAplMCIVFuncReaderBeepControl {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bFuncNumber: number;
    SysAddrArg: string;
    bAddParam: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIVFuncReaderContBeepControl.xml
export interface TAplMCIVFuncReaderContBeepControl {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bFuncNumber: number;
    SysAddrArg: string;
    bAddParam: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIVFuncReaderControl.xml
export interface TAplMCIVFuncReaderControl {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bFuncNumber: number;
    SysAddrArg: string;
    bAddParam: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIVFuncReaderRelayControl.xml
export interface TAplMCIVFuncReaderRelayControl {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bFuncNumber: number;
    SysAddrArg: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIVFuncTestZoneGroupAct.xml
export interface TAplMCIVFuncTestZoneGroupAct {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bFuncNumber: number;
    SysAddrArg: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIVFuncTestZoneGroupMsk.xml
export interface TAplMCIVFuncTestZoneGroupMsk {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bFuncNumber: number;
    SysAddrArg: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIVFuncToggleZoneGroupMsk.xml
export interface TAplMCIVFuncToggleZoneGroupMsk {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bFuncNumber: number;
    SysAddrArg: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIVFuncTZControl.xml
export interface TAplMCIVFuncTZControl {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bFuncNumber: number;
    SysAddrArg: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIVInitiator.xml
export interface TAplMCIVInitiator {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bIVInitType: number;
    SysAddrIV: string;
    bTermNum: number;
    bOpCode1: number;
    bOpCode2: number;
    bOpCode3: number;
    bOpCode4: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIVInitiatorAccActiv.xml
export interface TAplMCIVInitiatorAccActiv {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bIVInitType: number;
    SysAddrIV: string;
    bTermNum: number;
    bOpCode1: number;
    bOpCode2: number;
    bOpCode3: number;
    bOpCode4: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIVInitiatorAccDiddle.xml
export interface TAplMCIVInitiatorAccDiddle {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bIVInitType: number;
    SysAddrIV: string;
    bTermNum: number;
    bOpCode1: number;
    bOpCode2: number;
    bOpCode3: number;
    bOpCode4: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIVInitiatorComm.xml
export interface TAplMCIVInitiatorComm {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bIVInitType: number;
    SysAddrIV: string;
    bTermNum: number;
    bOpCode1: number;
    bOpCode2: number;
    bOpCode3: number;
    bOpCode4: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIVInitiatorReader.xml
export interface TAplMCIVInitiatorReader {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bIVInitType: number;
    SysAddrIV: string;
    bTermNum: number;
    bOpCode1: number;
    bOpCode2: number;
    bOpCode3: number;
    bOpCode4: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCIVInitiatorZoneAPB.xml
export interface TAplMCIVInitiatorZoneAPB {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bIVInitType: number;
    SysAddrIV: string;
    bTermNum: number;
    bOpCode1: number;
    bOpCode2: number;
    bOpCode3: number;
    bOpCode4: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCLED.xml
export interface TAplMCLED {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bLEDNum: number;
    fNeedACKAtDay: Boolean;
    fNeedACKAtNight: Boolean;
    fNeedACKLogAtDay: Boolean;
    fNeedACKLogAtNight: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCLEDLink.xml
export interface TAplMCLEDLink {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    SysAddrLinkInput: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCReader.xml
export interface TAplMCReader {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bLUNType: number;
    bLUNNumber: number;
    bNumberOnPanel: number;
    bStrikeTime: number;
    bHeldOpenTime: number;
    bOfflineMode: number;
    bInitMode: number;
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
    bDidleThreshold: number;
    dwFacilityModeFloorList: number;
    dwCypherCode: number;
    fUseSoftAPB: Boolean;
    fAllowOutputPulseReset: Boolean;
    fEmulateElevator: Boolean;
    fInvertFloorWhenElevEmul: Boolean;
    fUseFullStrikeTime: Boolean;
    fDisableEPB: Boolean;
    fRelayLink: Boolean;
    fUseAuxAsBoltMonitorNew: Boolean;
    bLocalAPBTime: number;
    dwFacilityModeFloorListAdd: number;
    wLongStrikeTime: number;
    wLongHeldOpenTime: number;
    SysAddrDownlRecord: string;
    SysAddrEmulAlarmPanel0: string;
    SysAddrEmulAlarmPanel1: string;
    SysAddrEmulAlarmPanel2: string;
    SysAddrEmulAlarmPanel3: string;
    SysAddrCardFormatList: string;
    SysAddrAPBLeaving: string;
    SysAddrAPBEntering: string;
    SysAddrDayModeElevAL: string;
    bCurrStatus: number;
    bDispInpStInterv: number;
    fSendStChangeTable: Boolean;
    fUseFastTurnstileMode: Boolean;
    fUse2DoorLock: Boolean;
    fUseAuxReaderDisable: Boolean;
    bElevFloorOffset: number;
    bMaxVisitorNum: number;
    bCmdModeForAuthCmds: number;
    fUseGrantAudioNotify: Boolean;
    fVisitorsFreePass: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCReaderCtrlTZ.xml
export interface TAplMCReaderCtrlTZ {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bStartMode: number;
    bEndMode: number;
    SysAddrCtrlTZ: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCReaderElev.xml
export interface TAplMCReaderElev {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bLUNType: number;
    bLUNNumber: number;
    bNumberOnPanel: number;
    bStrikeTime: number;
    bHeldOpenTime: number;
    bOfflineMode: number;
    bInitMode: number;
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
    bDidleThreshold: number;
    dwFacilityModeFloorList: number;
    dwCypherCode: number;
    fUseSoftAPB: Boolean;
    fAllowOutputPulseReset: Boolean;
    fEmulateElevator: Boolean;
    fInvertFloorWhenElevEmul: Boolean;
    fUseFullStrikeTime: Boolean;
    fDisableEPB: Boolean;
    fRelayLink: Boolean;
    fUseAuxAsBoltMonitorNew: Boolean;
    bLocalAPBTime: number;
    dwFacilityModeFloorListAdd: number;
    wLongStrikeTime: number;
    wLongHeldOpenTime: number;
    SysAddrDownlRecord: string;
    SysAddrEmulAlarmPanel0: string;
    SysAddrEmulAlarmPanel1: string;
    SysAddrEmulAlarmPanel2: string;
    SysAddrEmulAlarmPanel3: string;
    SysAddrCardFormatList: string;
    SysAddrAPBLeaving: string;
    SysAddrAPBEntering: string;
    SysAddrDayModeElevAL: string;
    bCurrStatus: number;
    bDispInpStInterv: number;
    fSendStChangeTable: Boolean;
    fUseFastTurnstileMode: Boolean;
    fUse2DoorLock: Boolean;
    fUseAuxReaderDisable: Boolean;
    bElevFloorOffset: number;
    bMaxVisitorNum: number;
    bCmdModeForAuthCmds: number;
    fUseGrantAudioNotify: Boolean;
    fVisitorsFreePass: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCReaderInput.xml
export interface TAplMCReaderInput {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bInputNum: number;
    fImmediateDialAtDay: Boolean;
    fImmediateDialAtNight: Boolean;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCReaderInputAccActiv.xml
export interface TAplMCReaderInputAccActiv {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bInputNum: number;
    fImmediateDialAtDay: Boolean;
    fImmediateDialAtNight: Boolean;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCReaderInputAux.xml
export interface TAplMCReaderInputAux {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bInputNum: number;
    fImmediateDialAtDay: Boolean;
    fImmediateDialAtNight: Boolean;
    bCurrStatus: number;
    fInitMasked: Boolean;
    SysAddrMaskTZ: string;
    fLatched: Boolean;
    wEntryDelay: number;
    wExitDelay: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCReaderInputDiddle.xml
export interface TAplMCReaderInputDiddle {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bInputNum: number;
    fImmediateDialAtDay: Boolean;
    fImmediateDialAtNight: Boolean;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCReaderInputM.xml
export interface TAplMCReaderInputM {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bInputNum: number;
    fImmediateDialAtDay: Boolean;
    fImmediateDialAtNight: Boolean;
    bCurrStatus: number;
    fInitMasked: Boolean;
    SysAddrMaskTZ: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCReaderRelay.xml
export interface TAplMCReaderRelay {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bRelayNum: number;
    wPulseTime: number;
    bInitMode: number;
    SysAddrCtrlTZ: string;
    bPulseTimeResolution: number;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCRemContrAHI10R.xml
export interface TAplMCRemContrAHI10R {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bLUNType: number;
    bLUNNumber: number;
    fContrActive: Boolean;
    fUseAlternatePort: Boolean;
    fEncripteDate: Boolean;
    fMasterKey: Boolean;
    bRemotePortNumber: number;
    bAddressOnPort: number;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCRemContrAIM2DLR.xml
export interface TAplMCRemContrAIM2DLR {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bLUNType: number;
    bLUNNumber: number;
    fContrActive: Boolean;
    fUseAlternatePort: Boolean;
    fEncripteDate: Boolean;
    fMasterKey: Boolean;
    bRemotePortNumber: number;
    bAddressOnPort: number;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCRemContrAIM2SLR.xml
export interface TAplMCRemContrAIM2SLR {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bLUNType: number;
    bLUNNumber: number;
    fContrActive: Boolean;
    fUseAlternatePort: Boolean;
    fEncripteDate: Boolean;
    fMasterKey: Boolean;
    bRemotePortNumber: number;
    bAddressOnPort: number;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCRemContrAIM4SLR.xml
export interface TAplMCRemContrAIM4SLR {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bLUNType: number;
    bLUNNumber: number;
    fContrActive: Boolean;
    fUseAlternatePort: Boolean;
    fEncripteDate: Boolean;
    fMasterKey: Boolean;
    bRemotePortNumber: number;
    bAddressOnPort: number;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCRemContrAMS100R.xml
export interface TAplMCRemContrAMS100R {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bLUNType: number;
    bLUNNumber: number;
    fContrActive: Boolean;
    fUseAlternatePort: Boolean;
    fEncripteDate: Boolean;
    fMasterKey: Boolean;
    bRemotePortNumber: number;
    bAddressOnPort: number;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCRemContrAnalogAlarm.xml
export interface TAplMCRemContrAnalogAlarm {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bLUNType: number;
    bLUNNumber: number;
    fContrActive: Boolean;
    fUseAlternatePort: Boolean;
    fEncripteDate: Boolean;
    fMasterKey: Boolean;
    bRemotePortNumber: number;
    bAddressOnPort: number;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCRemContrAP500R.xml
export interface TAplMCRemContrAP500R {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bLUNType: number;
    bLUNNumber: number;
    fContrActive: Boolean;
    fUseAlternatePort: Boolean;
    fEncripteDate: Boolean;
    fMasterKey: Boolean;
    bRemotePortNumber: number;
    bAddressOnPort: number;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCRemContrAP510_520R.xml
export interface TAplMCRemContrAP510_520R {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bLUNType: number;
    bLUNNumber: number;
    fContrActive: Boolean;
    fUseAlternatePort: Boolean;
    fEncripteDate: Boolean;
    fMasterKey: Boolean;
    bRemotePortNumber: number;
    bAddressOnPort: number;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCRemContrASA72.xml
export interface TAplMCRemContrASA72 {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bLUNType: number;
    bLUNNumber: number;
    fContrActive: Boolean;
    fUseAlternatePort: Boolean;
    fEncripteDate: Boolean;
    fMasterKey: Boolean;
    bRemotePortNumber: number;
    bAddressOnPort: number;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCRemContrCommonR.xml
export interface TAplMCRemContrCommonR {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bLUNType: number;
    bLUNNumber: number;
    fContrActive: Boolean;
    fUseAlternatePort: Boolean;
    fEncripteDate: Boolean;
    fMasterKey: Boolean;
    bRemotePortNumber: number;
    bAddressOnPort: number;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCRemContrCommonRElev.xml
export interface TAplMCRemContrCommonRElev {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bLUNType: number;
    bLUNNumber: number;
    fContrActive: Boolean;
    fUseAlternatePort: Boolean;
    fEncripteDate: Boolean;
    fMasterKey: Boolean;
    bRemotePortNumber: number;
    bAddressOnPort: number;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCRemContrDigitalAlarm.xml
export interface TAplMCRemContrDigitalAlarm {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bLUNType: number;
    bLUNNumber: number;
    fContrActive: Boolean;
    fUseAlternatePort: Boolean;
    fEncripteDate: Boolean;
    fMasterKey: Boolean;
    bRemotePortNumber: number;
    bAddressOnPort: number;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCRemContrInput.xml
export interface TAplMCRemContrInput {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bInputNum: number;
    fImmediateDialAtDay: Boolean;
    fImmediateDialAtNight: Boolean;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCRemContrInputComm.xml
export interface TAplMCRemContrInputComm {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bInputNum: number;
    fImmediateDialAtDay: Boolean;
    fImmediateDialAtNight: Boolean;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCRemContrPrintUnit.xml
export interface TAplMCRemContrPrintUnit {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bLUNType: number;
    bLUNNumber: number;
    fContrActive: Boolean;
    fUseAlternatePort: Boolean;
    fEncripteDate: Boolean;
    fMasterKey: Boolean;
    bRemotePortNumber: number;
    bAddressOnPort: number;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCSerialPort.xml
export interface TAplMCSerialPort {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    strPortName: string;
    dwBoudRate: number;
    bByteSize: number;
    bParity: number;
    bNumStopBits: number;
    bFlowControl: number;
    dwReadTo: number;
    dwReadToMultiplier: number;
    dwReadToConstant: number;
    dwWriteToMultiplier: number;
    dwWriteToConstant: number;
    dwInQueue: number;
    dwOutQueue: number;
    dwMaxReadTO: number;
    dwMaxWriteTO: number;
    dwDelayBeforeSend: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCSocket.xml
export interface TAplMCSocket {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    strIPName: string;
    strIPPortName: string;
    dwConnectTO: number;
    dwReadTO: number;
    dwWriteTO: number;
    dwInterPartTO: number;
    bSockType: number;
    fUseEncryption: Boolean;
    blobEncryptionKey: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCTypeInfo.xml
// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCVisitorGroup.xml
export interface TAplMCVisitorGroup {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bGroupNum: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCZoneAPB.xml
export interface TAplMCZoneAPB {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bLUNType: number;
    bLUNNumber: number;
    fMin2Man: Boolean;
    fOpenForAccess: Boolean;
    bAccessOnClose: number;
    SysAddrReader: string;
    fLimitPeople: Boolean;
    wMaxPeopleNum: number;
    fInitialClear: Boolean;
    wIVMinPeopleNum: number;
    wIVMaxPeopleNum: number;
    fGrantOnReaderCmdAuthIfClose: Boolean;
    fToggleOnGrantReaderCmdAuth: Boolean;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCZoneGroup.xml
export interface TAplMCZoneGroup {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bLUNType: number;
    bLUNNumber: number;
    bInitMaskLevel: number;
    bCurrMaskLevel: number;
    bMaxMaskLevel: number;
    strZoneGroupName: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplMCExtension\Registrar\tAplMCZoneGroupElem.xml
export interface TAplMCZoneGroupElem {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    SysAddrZone: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplAIM1SLContr.xml
export interface TAplAIM1SLContr {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    fActivate: Boolean;
    bAddress: number;
    dwPollInterval: number;
    blobUnlockCode: string;
    wMaxCardNum: number;
    bCardType: number;
    bPinType: number;
    fStoreTZPerReader: Boolean;
    fStore6AL: Boolean;
    fStore32AL: Boolean;
    fStoreAPBInfo: Boolean;
    SysAddrResetAPBTZ: string;
    wCommLossTO: number;
    fPairedReader0: Boolean;
    fPairedReader1: Boolean;
    fUse2DoorLock0: Boolean;
    fUse2DoorLock1: Boolean;
    fUseAuxReaderDisable0: Boolean;
    fUseAuxReaderDisable1: Boolean;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplAIM2SLContr.xml
export interface TAplAIM2SLContr {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    fActivate: Boolean;
    bAddress: number;
    dwPollInterval: number;
    blobUnlockCode: string;
    wMaxCardNum: number;
    bCardType: number;
    bPinType: number;
    fStoreTZPerReader: Boolean;
    fStore6AL: Boolean;
    fStore32AL: Boolean;
    fStoreAPBInfo: Boolean;
    SysAddrResetAPBTZ: string;
    wCommLossTO: number;
    fPairedReader0: Boolean;
    fPairedReader1: Boolean;
    fUse2DoorLock0: Boolean;
    fUse2DoorLock1: Boolean;
    fUseAuxReaderDisable0: Boolean;
    fUseAuxReaderDisable1: Boolean;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplAIM4SLContr.xml
export interface TAplAIM4SLContr {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    fActivate: Boolean;
    bAddress: number;
    dwPollInterval: number;
    blobUnlockCode: string;
    wMaxCardNum: number;
    bCardType: number;
    bPinType: number;
    fStoreTZPerReader: Boolean;
    fStore6AL: Boolean;
    fStore32AL: Boolean;
    fStoreAPBInfo: Boolean;
    SysAddrResetAPBTZ: string;
    wCommLossTO: number;
    fPairedReader0: Boolean;
    fPairedReader1: Boolean;
    fUse2DoorLock0: Boolean;
    fUse2DoorLock1: Boolean;
    fUseAuxReaderDisable0: Boolean;
    fUseAuxReaderDisable1: Boolean;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplAIM6IntervalTZ.xml
export interface TAplAIM6IntervalTZ {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bNumber: number;
    bIntervalUsed: number;
    bStartHour0: number;
    bStartHour1: number;
    bStartHour2: number;
    bStartHour3: number;
    bStartHour4: number;
    bStartHour5: number;
    bStartMinute0: number;
    bStartMinute1: number;
    bStartMinute2: number;
    bStartMinute3: number;
    bStartMinute4: number;
    bStartMinute5: number;
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
    bEndMinute0: number;
    bEndMinute1: number;
    bEndMinute2: number;
    bEndMinute3: number;
    bEndMinute4: number;
    bEndMinute5: number;
    bEndHour0: number;
    bEndHour1: number;
    bEndHour2: number;
    bEndHour3: number;
    bEndHour4: number;
    bEndHour5: number;
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
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bALNumber: number;
    SysAddrCtrlTZ0: string;
    SysAddrCtrlTZ1: string;
    SysAddrCtrlTZ2: string;
    SysAddrCtrlTZ3: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplAIMAPB.xml
export interface TAplAIMAPB {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bAPBNumber: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplAIMCardFormat.xml
export interface TAplAIMCardFormat {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bCardFormat: number;
    bFormatNumber: number;
    dwFCValue: number;
    nCardNumberOffset: number;
    f2DigitIssueCode: Boolean;
    bReferenceIndex1: number;
    bReferenceIndex2: number;
    bMinStartToRef1: number;
    bMinRef1ToRef2: number;
    bMinRef2ToEnd: number;
    bFCLocation0: number;
    bFCLocation1: number;
    bFCLocation2: number;
    bFCLocation3: number;
    bFCLocation4: number;
    bFCLocation5: number;
    bFCLocation6: number;
    bFCLocation7: number;
    bFCLocation8: number;
    bCardNumberLocation0: number;
    bCardNumberLocation1: number;
    bCardNumberLocation2: number;
    bCardNumberLocation3: number;
    bCardNumberLocation4: number;
    bCardNumberLocation5: number;
    bCardNumberLocation6: number;
    bCardNumberLocation7: number;
    bCardNumberLocation8: number;
    bIssueCodeLocation: number;
    bFCAMSLocation0: number;
    bFCAMSLocation1: number;
    bFCAMSLocation2: number;
    bFCAMSLocation3: number;
    bFCAMSLocation4: number;
    bFCAMSLocation5: number;
    bFCAMSLocation6: number;
    bFCAMSLocation7: number;
    bFCAMSLocation8: number;
    bBitsOnCard: number;
    bBitsForEven: number;
    bBitsForOdd: number;
    bNumBitsInFC: number;
    bIndexFCBegin: number;
    bNumBitsInCardNumber: number;
    bIndexCardNumberBegin: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplAIMHoliday.xml
export interface TAplAIMHoliday {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dHolidayDate: string;
    fType1: Boolean;
    fType2: Boolean;
    fPermanent: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplAIMReader.xml
export interface TAplAIMReader {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    wStrikeTime: number;
    wHeldOpenTime: number;
    wLongStrikeTime: number;
    wLongHeldOpenTime: number;
    bOfflineMode: number;
    bInitMode: number;
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
    SysAddrAPBLeaving: string;
    SysAddrAPBEntering: string;
    bNumberOnPanel: number;
    SysAddrCardFormat0: string;
    SysAddrCardFormat1: string;
    SysAddrCardFormat2: string;
    SysAddrCardFormat3: string;
    SysAddrCardFormat4: string;
    SysAddrCardFormat5: string;
    SysAddrCardFormat6: string;
    SysAddrCardFormat7: string;
    bCurrStatus: number;
    fUseFastTurnstileMode: Boolean;
    fUseGrantAudioNotify: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplAIMReaderCtrlTZ.xml
export interface TAplAIMReaderCtrlTZ {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bStartMode: number;
    bEndMode: number;
    SysAddrCtrlTZ: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplAIMReaderInput.xml
export interface TAplAIMReaderInput {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    fInitMasked: Boolean;
    bInputType: number;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplAIMReaderInputTZ.xml
export interface TAplAIMReaderInputTZ {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    fInitMasked: Boolean;
    bInputType: number;
    bCurrStatus: number;
    SysAddrInputMaskTZ: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplAIMReaderRelay.xml
export interface TAplAIMReaderRelay {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bRelayNum: number;
    wPulseTime: number;
    bInitMode: number;
    SysAddrCtrlTZ: string;
    bPulseTimeResolution: number;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplAPN2IntervalTZ.xml
export interface TAplAPN2IntervalTZ {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bNumber: number;
    bIntervalUsed: number;
    bStartHour0: number;
    bStartHour1: number;
    bStartHour2: number;
    bStartHour3: number;
    bStartHour4: number;
    bStartHour5: number;
    bStartMinute0: number;
    bStartMinute1: number;
    bStartMinute2: number;
    bStartMinute3: number;
    bStartMinute4: number;
    bStartMinute5: number;
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
    bEndMinute0: number;
    bEndMinute1: number;
    bEndMinute2: number;
    bEndMinute3: number;
    bEndMinute4: number;
    bEndMinute5: number;
    bEndHour0: number;
    bEndHour1: number;
    bEndHour2: number;
    bEndHour3: number;
    bEndHour4: number;
    bEndHour5: number;
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
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    fActivate: Boolean;
    bAddress: number;
    dwPollInterval: number;
    blobUnlockCode: string;
    bAPBMode: number;
    bFormatType: number;
    bNumBitsOnCard: number;
    bNumBitsForEven: number;
    bNumBitsForOdd: number;
    bNumBitsInFC: number;
    bIndexToFirstFCBit: number;
    bNumBitsInCardNum: number;
    bIndexToFirstCardNumBit: number;
    bNumDigitsInFC: number;
    bOffsetToFirstFCDig: number;
    bNumDigitsInCardNum: number;
    bOffsetToFirstCardNumDig: number;
    bCardDBType: number;
    dwMinFCValue: number;
    dwMaxFCValue: number;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplAPNAL.xml
export interface TAplAPNAL {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bALNumber: number;
    SysAddrCtrlTZ0: string;
    SysAddrCtrlTZ1: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplAPNCard.xml
export interface TAplAPNCard {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dwCardNumber: number;
    wSlotNumber: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplAPNContrInput.xml
export interface TAplAPNContrInput {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    SysAddrMaskTZ: string;
    bInputType: number;
    fInitMasked: Boolean;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplAPNContrRelay.xml
export interface TAplAPNContrRelay {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bRelayNum: number;
    wPulseTime: number;
    bInitMode: number;
    SysAddrCtrlTZ: string;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplAPNHoliday.xml
export interface TAplAPNHoliday {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    dHolidayDate: string;
    fType1: Boolean;
    fType2: Boolean;
    fPermanent: Boolean;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplAPNReader.xml
export interface TAplAPNReader {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    bInitMode: number;
    bNumberOnPanel: number;
    wStrikeTime: number;
    wHeldOpenTime: number;
    wLongStrikeTime: number;
    wLongHeldOpenTime: number;
    SysAddrCtrlTZ: string;
    bCtrlTZMode: number;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplAPNReaderInput.xml
export interface TAplAPNReaderInput {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    SysAddrMaskTZ: string;
    bInputType: number;
    fInitMasked: Boolean;
    bCurrStatus: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplSCSerialPort.xml
export interface TAplSCSerialPort {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    strPortName: string;
    dwBoudRate: number;
    bByteSize: number;
    bParity: number;
    bNumStopBits: number;
    bFlowControl: number;
    dwReadTo: number;
    dwReadToMultiplier: number;
    dwReadToConstant: number;
    dwWriteToMultiplier: number;
    dwWriteToConstant: number;
    dwInQueue: number;
    dwOutQueue: number;
    dwMaxReadTO: number;
    dwMaxWriteTO: number;
    dwDelayBeforeSend: number;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplSCSocket.xml
export interface TAplSCSocket {
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime: string;
    dtLastModifyTime: string;
    strAlias: string;
    strIPName: string;
    strIPPortName: string;
    dwConnectTO: number;
    dwReadTO: number;
    dwWriteTO: number;
    dwInterPartTO: number;
    bSockType: number;
    fUseEncryption: Boolean;
    blobEncryptionKey: string;
}

// C:\Program Files (x86)\APACS 3000 8.2.3\bin\ApcSysExt\AplSCExtension\Registrar\tAplSCTypeInfo.xml
export type Types =
    TApcFile
    | TApcTAJob2HolderLink
    | TApcTAShiftMException
    | TApcTAStructException
    | TApcTATimeMException
    | TApcASP4AccessPoint
    | TApcASP4AL
    | TApcASP4ALElem
    | TApcASP4APBZone
    | TApcASP4CardFormatList
    | TApcASP4CmnInput
    | TApcASP4ContrInput
    | TApcASP4DoorContact
    | TApcASP4EPB
    | TApcASP4Holiday
    | TApcASP4HolidayType
    | TApcASP4HWInterf
    | TApcASP4MasterBoard
    | TApcASP4OSDPDevice
    | TApcASP4OSDPInput
    | TApcASP4OSDPRelay
    | TApcASP4Reader
    | TApcASP4ReaderWrap
    | TApcASP4Relay
    | TApcASP4RelayModule
    | TApcASP4RelayWrap
    | TApcASP4Script
    | TApcASP4Socket
    | TApcASP4Strike
    | TApcASP4TimeZone
    | TApcASP4VGroup
    | TApcASP4VGroupList
    | TApcASP4WCardFormat
    | TApcASP4ZoneGroup
    | TApcASP4ZoneGroupElem
    | TApcAxisCamera
    | TApcAxisServer
    | TApcBolidInput
    | TApcBolidPotok_3N
    | TApcBolidRelay
    | TApcBolidRIP_12_2A_RS
    | TApcBolidRIP_12_RS
    | TApcBolidRIP_24_2A_RS
    | TApcBolidRupor
    | TApcBolidRuporv01
    | TApcBolidRupor_200
    | TApcBolidS2000KSPult
    | TApcBolidS2000MPult
    | TApcBolidS2000Pult
    | TApcBolidS2000_2
    | TApcBolidS2000_4
    | TApcBolidS2000_Adem
    | TApcBolidS2000_ASPT
    | TApcBolidS2000_BI
    | TApcBolidS2000_BIv01
    | TApcBolidS2000_BKI
    | TApcBolidS2000_IT
    | TApcBolidS2000_K
    | TApcBolidS2000_KC
    | TApcBolidS2000_KDL
    | TApcBolidS2000_KDL_2I
    | TApcBolidS2000_KPB
    | TApcBolidS2000_PCN
    | TApcBolidS2000_PGE
    | TApcBolidS2000_PT
    | TApcBolidSerialPort
    | TApcBolidSignal10
    | TApcBolidSignal20
    | TApcBolidSignal20M
    | TApcBolidSignal20P
    | TApcBolidSignal20ser02
    | TApcBolidSocketDrv
    | TApcBolidUO_4S
    | TApcBolidXMLRPCSettings
    | TApcISSCam
    | TApcISSGrabber
    | TApcISSSocketDrv
    | TApcITVCam
    | TApcITVCamZone
    | TApcITVGrabber
    | TApcITVSocketDrv
    | TApcSatelACU100
    | TApcSatelAdmin
    | TApcSatelCA64ADR
    | TApcSatelCA64DR
    | TApcSatelCA64E
    | TApcSatelCA64Ei
    | TApcSatelCA64EPS
    | TApcSatelCA64EPSi
    | TApcSatelCA64O
    | TApcSatelCA64OPS
    | TApcSatelCA64PP
    | TApcSatelCA64PTSA
    | TApcSatelCA64SM
    | TApcSatelCA64SR
    | TApcSatelContrInput
    | TApcSatelDoorInput
    | TApcSatelETHM1
    | TApcSatelExtenderLink
    | TApcSatelInput
    | TApcSatelInputLink
    | TApcSatelInputR
    | TApcSatelInputsGroup
    | TApcSatelIntegra128
    | TApcSatelIntegra128WRL
    | TApcSatelIntegra24
    | TApcSatelIntegra32
    | TApcSatelIntegra64
    | TApcSatelINTENT
    | TApcSatelINTIORS
    | TApcSatelINTIT
    | TApcSatelINTKLCD
    | TApcSatelINTKLCDR
    | TApcSatelINTORS
    | TApcSatelINTRS
    | TApcSatelINTRX
    | TApcSatelINTS
    | TApcSatelINTSCR
    | TApcSatelINTSZ
    | TApcSatelJamInput
    | TApcSatelObject
    | TApcSatelPartition
    | TApcSatelPartitionLink
    | TApcSatelRelay
    | TApcSatelSerialPort
    | TApcSatelService
    | TApcSatelStatusInput
    | TApcSatelUser
    | TApcSatelUserLink
    | TApcSatelVirtualExtender
    | TApcSatelWRLInputsGroup
    | TApcSatelWRLRelaysGroup
    | TApcAccount
    | TApcAccountExtension
    | TApcCardHolder
    | TApcSecurityGroup
    | TApcSupremaBioData
    | TApcVisEscortExtension
    | TApcPC
    | TApcRoot
    | TApcServiceRegistry
    | TApcV100
    | TApcV1000
    | TApcV200
    | TApcV2000
    | TApcV300
    | TApcVAL
    | TApcVALElem
    | TApcVAPB
    | TApcVAutomation
    | TApcVAuxInput
    | TApcVCardFormat
    | TApcVCardSet
    | TApcVContrInput
    | TApcVCtrlGroup
    | TApcVCtrlObjLink
    | TApcVDoorInput
    | TApcVEDGE
    | TApcVElevRelayGroup
    | TApcVElevRelayGroupElem
    | TApcVertXSocket
    | TApcVHolidayGroup
    | TApcVHolidayGroupElem
    | TApcVInputCtrlObjLink
    | TApcVKeyPad
    | TApcVReader
    | TApcVReaderCtrlObj
    | TApcVReaderElev
    | TApcVReaderGroup
    | TApcVReaderGroupElem
    | TApcVReaderGrpCtrlObj
    | TApcVReaderInput
    | TApcVRelay
    | TApcVRelayCtrlObj
    | TApcVRelayGrpCtrlObj
    | TApcVRexInput
    | TApcVShedule
    | TAplAAN100Contr
    | TAplAAN32Contr
    | TAplMC6IntervalTZ
    | TAplMCAL
    | TAplMCAlarmInput
    | TAplMCAlarmPanelAIO16
    | TAplMCAlarmPanelAIO168
    | TAplMCAlarmPanelAIO8
    | TAplMCAlarmPanelAPA15
    | TAplMCAlarmPanelAPA16
    | TAplMCAlarmPanelAPD16
    | TAplMCAlarmRelay
    | TAplMCALElemElev
    | TAplMCALElemNorm
    | TAplMCALElemZoneGroup
    | TAplMCASA72
    | TAplMCCardFormat
    | TAplMCCardFrmtList
    | TAplMCContrInput
    | TAplMCDownlSpecRec
    | TAplMCElevAL
    | TAplMCEscortGroupList
    | TAplMCHoliday
    | TAplMCHostInput
    | TAplMCIV
    | TAplMCIVALElevFloors
    | TAplMCIVFuncAlarmRelayControl
    | TAplMCIVFuncAPBControl
    | TAplMCIVFuncChain
    | TAplMCIVFuncDenyElevFloors
    | TAplMCIVFuncEventLog
    | TAplMCIVFuncMaskZoneGroup
    | TAplMCIVFuncReaderBeepControl
    | TAplMCIVFuncReaderContBeepControl
    | TAplMCIVFuncReaderControl
    | TAplMCIVFuncReaderRelayControl
    | TAplMCIVFuncTestZoneGroupAct
    | TAplMCIVFuncTestZoneGroupMsk
    | TAplMCIVFuncToggleZoneGroupMsk
    | TAplMCIVFuncTZControl
    | TAplMCIVInitiator
    | TAplMCIVInitiatorAccActiv
    | TAplMCIVInitiatorAccDiddle
    | TAplMCIVInitiatorComm
    | TAplMCIVInitiatorReader
    | TAplMCIVInitiatorZoneAPB
    | TAplMCLED
    | TAplMCLEDLink
    | TAplMCReader
    | TAplMCReaderCtrlTZ
    | TAplMCReaderElev
    | TAplMCReaderInput
    | TAplMCReaderInputAccActiv
    | TAplMCReaderInputAux
    | TAplMCReaderInputDiddle
    | TAplMCReaderInputM
    | TAplMCReaderRelay
    | TAplMCRemContrAHI10R
    | TAplMCRemContrAIM2DLR
    | TAplMCRemContrAIM2SLR
    | TAplMCRemContrAIM4SLR
    | TAplMCRemContrAMS100R
    | TAplMCRemContrAnalogAlarm
    | TAplMCRemContrAP500R
    | TAplMCRemContrAP510_520R
    | TAplMCRemContrASA72
    | TAplMCRemContrCommonR
    | TAplMCRemContrCommonRElev
    | TAplMCRemContrDigitalAlarm
    | TAplMCRemContrInput
    | TAplMCRemContrInputComm
    | TAplMCRemContrPrintUnit
    | TAplMCSerialPort
    | TAplMCSocket
    | TAplMCVisitorGroup
    | TAplMCZoneAPB
    | TAplMCZoneGroup
    | TAplMCZoneGroupElem
    | TAplAIM1SLContr
    | TAplAIM2SLContr
    | TAplAIM4SLContr
    | TAplAIM6IntervalTZ
    | TAplAIMAL
    | TAplAIMAPB
    | TAplAIMCardFormat
    | TAplAIMHoliday
    | TAplAIMReader
    | TAplAIMReaderCtrlTZ
    | TAplAIMReaderInput
    | TAplAIMReaderInputTZ
    | TAplAIMReaderRelay
    | TAplAPN2IntervalTZ
    | TAplAPN35Contr
    | TAplAPNAL
    | TAplAPNCard
    | TAplAPNContrInput
    | TAplAPNContrRelay
    | TAplAPNHoliday
    | TAplAPNReader
    | TAplAPNReaderInput
    | TAplSCSerialPort
    | TAplSCSocket;
