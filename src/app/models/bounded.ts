export let ApcBasePropObject = {
    strName: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
        MinRange: 0,
        MaxRange: 255
    },
    strDesc: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
        MinRange: 0,
        MaxRange: 255
    },
    IsActive: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
    },
    dtCreateTime: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
    },
    dtLastModifyTime: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
    },
    dtLastAccessTime: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
    },
    strAlias: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
        MinRange: 0,
        MaxRange: 255
    }
}

export let TApcCardHolder = {
    strFirstName: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
        MinRange: 0,
        MaxRange: 255
    },
    strMiddleName: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
        MinRange: 0,
        MaxRange: 255
    },
    strLastName: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
        MinRange: 0,
        MaxRange: 255
    },
    bGender: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
        ValueList: {
            255: "UnDef",
            0: "Man",
            1: "Woman"
        }
    },
    strPhoneNumber: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
        MinRange: 0,
        MaxRange: 255
    },
    strEMailAddress: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
        MinRange: 0,
        MaxRange: 255
    },
    strAdd1: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
        MinRange: 0,
        MaxRange: 255
    },
    strAdd2: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
        MinRange: 0,
        MaxRange: 255
    },
    strAdd3: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
        MinRange: 0,
        MaxRange: 255
    },
    strAdd4: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
        MinRange: 0,
        MaxRange: 255
    },
    strAdd5: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
        MinRange: 0,
        MaxRange: 255
    },
    strAdd6: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
        MinRange: 0,
        MaxRange: 255
    },
    strAdd7: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
        MinRange: 0,
        MaxRange: 255
    },
    strAdd8: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
        MinRange: 0,
        MaxRange: 255
    },
    strAdd9: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
        MinRange: 0,
        MaxRange: 255
    },
    strAdd10: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
        MinRange: 0,
        MaxRange: 255
    },
    strAdd11: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
        MinRange: 0,
        MaxRange: 255
    },
    strAdd12: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
        MinRange: 0,
        MaxRange: 255
    },
    strAdd13: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
        MinRange: 0,
        MaxRange: 255
    },
    strAdd14: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
        MinRange: 0,
        MaxRange: 255
    },
    strAdd15: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
        MinRange: 0,
        MaxRange: 255
    },
    strAdd16: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
        MinRange: 0,
        MaxRange: 255
    },
    strAdd17: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
        MinRange: 0,
        MaxRange: 255
    },
    strAdd18: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
        MinRange: 0,
        MaxRange: 255
    },
    strAdd19: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
        MinRange: 0,
        MaxRange: 255
    },
    strAdd20: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
        MinRange: 0,
        MaxRange: 255
    },
    dwNumber: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
    },
    bStatus: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
        ValueList: {
            255: "UnDef",
            0: "Employee",
            1: "Discharged",
            2: "Candidate"
        }
    },
    bEmployee: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
        ValueList: {
            255: "UnDef",
            0: "Employee",
            1: "Visitor"
        }
    },
    strSGList: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
        MinRange: 0,
        MaxRange: 4000
    },
    strName: {
        ReadOnly: true,
        Hidden: false,
        Disable: false,
        MinRange: 0,
        MaxRange: 255
    },
    strPIN: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
        MinRange: 0,
        MaxRange: 255
    },
    fActive: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
        ValueList: {
            true: "Yes",
            false: "No"
        }
    },
    bAdminLevel: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
        ValueList: {
            255: "UnDef",
            0: "None",
            1: "Administrator",
            2: "Installator",
            3: "User",
            30: "Manager"
        }
    },
    bFingerAuthMode: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
        ValueList: {
            255: "UnDef",
            254: "Prohibited",
            0: "Biometric_only",
            1: "Biometric_PIN"
        }
    },
    bCardAuthMode: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
        ValueList: {
            255: "UnDef",
            254: "Prohibited",
            2: "Card_only",
            3: "Card_Biometric",
            4: "Card_PIN",
            5: "Card_Biometric_or_PIN",
            6: "Card_Biometric_PIN"
        }
    },
    bIdAuthMode: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
        ValueList: {
            255: "UnDef",
            254: "Prohibited",
            7: "ID_Biometric",
            8: "ID_PIN",
            9: "ID_Biometric_or_PIN",
            10: "ID_Biometric_PIN"
        }
    },
    fUnlockReader: {
        ReadOnly: false,
        Hidden: false,
        Disable: false,
        ValueList: {
            false: "No",
            true: "Yes"
        }
    }
}