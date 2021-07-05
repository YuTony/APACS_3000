import xml.etree.ElementTree as ET
import os
import re

exDir = 'C:\\Program Files (x86)\\APACS 3000 8.2.3\\bin\\ApcSysExt'

types = []

def replace(val):
    if val == 'Bool':
        return 'Boolean'
    if val in ['String', 'Stream', 'DateTime', 'Date', 'Time']:
        return 'String'
    if val in ['Word', 'Byte', 'DWord', 'Int', 'UInt64', 'SChar']:
        return 'Number'
    print(val)
    return 'error'


def getInterface(file):
    # print(file)
    interface = 'export interface '

    tree = ET.parse(file)
    root = tree.getroot()

    for child in root:
        if child.tag == 'Key':
            id = child.get('ID')
            if (re.match(r'^TYPEINFO\\OBJINFO\\[^\\]*\\FIELDS$', id)):
                typeName = id.replace('TYPEINFO\\OBJINFO\\', '').replace('\\FIELDS', '')
                interface += typeName + ' {\n'
                types.append(typeName)
                break
        return None



    # interface += '\tstrClassID: String;\n\tsysAddrID: String;\n'
    interface += '''\
    tstrClassID: String;
    sysAddrID: String;
    strName: String;
    strDesc: String;
    IsActive: Boolean;
    dtCreateTime: String;
    dtLastModifyTime: String;
    strAlias: String;
'''

    for keys in root.iter('KeyValue'):
        key = keys.get("Name")
        val = keys.get("vType")
        interface += f'\t{key}: {replace(val)};\n'
    interface += '}'
    return interface


def main():
    forInput = open('interfaces.ts', 'w')
    for dir in os.walk(exDir):
        if (re.match(r'.*\\Registrar$', dir[0])):
            # print(dir[0])
            # os.chdir(dir[0])
            for file in dir[2]:
                if (re.match(r'^t.*\.xml$', file)):
                    fileName = f'{dir[0]}\\{file}'
                    forInput.write(f'// {fileName}\n')
                    interface = getInterface(fileName)
                    if interface:
                        forInput.write(interface)
                        forInput.write('\n\n')

    str = f'export type Types = {" | ".join(types)};\n'
    forInput.write(str)
    forInput.close()


if __name__ == '__main__':
    main()
