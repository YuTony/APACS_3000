export interface RootData {
    "IsActive": boolean,
    "dtCreateTime": string,
    "dtLastModifyTime": string,
    "strAlias": string,
    "strDesc": string,
    "strName": string,
    "sysAddrParentID": string,
    "strClassID": string,
    "sysAddrID": string
}

export interface ListItem {
    "strClassID": string,
    "sysAddrID": string
}

export interface Config {
    "strClassID": string,
    "sysAddrID": string,
    "strName": string,
    "strAlias": string,
    "dtLastModifyTime": string,
    "dtCreateTime": string,
    "IsActive": boolean,
    "strDesc": string
}