import xml.etree.ElementTree as ET
import os
import re

exDir = 'C:\\Program Files (x86)\\APACS 3000 8.2.3\\bin\\ApcSysExt'

types = []


def replace(val):
    if val == 'Bool':
        return 'boolean'
    if val in ['string', 'Stream', 'DateTime', 'Date', 'Time', 'string']:
        return 'string'
    if val in ['Word', 'Byte', 'DWord', 'Int', 'UInt64', 'SChar', 'DWORD']:
        return 'number'
    print(val)
    return 'error'


def getInterface2(file):
    # print(file)
    interface = ''

    tree = ET.parse(file)
    root = tree.getroot()

    children = root.findall('./Key')
    for child in children:
        if child.tag == 'Key':
            id = child.get('ID')
            if (re.match(r'^TYPEINFO\\OBJINFO\\[^\\]*\\FIELDS$', id)):
                interface = 'export interface '
                typeName = id.replace(
                    'TYPEINFO\\OBJINFO\\', '').replace('\\FIELDS', '')
                interface += typeName + ' {\n'
                types.append(typeName)

                interface += '''\
    strClassID: string;
    sysAddrID: string;
    strName: string;
    strDesc: string;
    IsActive: Boolean;
    dtCreateTime?: string;
    dtLastModifyTime?: string;
    strAlias: string;
'''

                for keys in root.iter('KeyValue'):
                    key = keys.get("Name")
                    val = keys.get("vType")
                    interface += f'\t{key}: {replace(val)};\n'
                interface += '}'
                return interface

            elif (re.match(r'^TYPEINFO\\OBJINFO$', id)):
                # fieldsNodes = child.findall(".//Key[@ID='FIELDS']")
                # for fieldsNode in fieldsNodes:
                #     typeName = fieldsNode.findall("./..")
                for typeNode in child.findall('Key'):
                    typeName = typeNode.get('ID')
                    fields = typeNode.find("./Key[@ID='FIELDS']")
                    if fields:
                        types.append(typeName)
                        interface += '\nexport interface '
                        interface += typeName + ' {\n'
#                         interface += '''\
#     strClassID: string;
#     sysAddrID: string;
#     strName: string;
#     strDesc: string;
#     IsActive: Boolean;
#     dtCreateTime?: string;
#     dtLastModifyTime?: string;
#     strAlias: string;
# '''
                        for keys in fields.findall('./KeyValue'):
                            key = keys.get("Name")
                            val = keys.get("vType")
                            interface += f'\t{key}: {replace(val)};\n'
                        interface += '}'
            else:
                continue

    if (interface == ''):
        return None
    else:
        return interface


def main():
    forInput = open('interfaces.ts', 'w')
    forInput.write(f'//Generated with ./src/python/parseTypes.py\n\n')
    for dir in os.walk(exDir):
        if (re.match(r'.*\\Registrar$', dir[0])):
            # print(dir[0])
            # os.chdir(dir[0])
            for file in dir[2]:
                if (re.match(r'.*\.xml$', file)):
                    fileName = f'{dir[0]}\\{file}'
                    forInput.write(f'// {fileName}\n')
                    interface = getInterface2(fileName)
                    if interface:
                        forInput.write(interface)
                        forInput.write('\n\n')

    str = f'export type Types = {" | ".join(types)};\n'
    forInput.write(str)
    forInput.close()


def test():
    print(getInterface2("C:\\Program Files (x86)\\APACS 3000 8.2.3\\bin\\ApcSysExt\\ApcAbstrObjExt\\Registrar\\ApcAbstrObjExtTypeInfo.xml"))


if __name__ == '__main__':
    main()
    # test()
