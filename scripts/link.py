import argparse
from os import system, rmdir, remove, path
from shutil import copytree, rmtree
import glob
from pathlib import Path

parser = argparse.ArgumentParser(description='Link a dependency.')
parser.add_argument('-p', help='an integer for the accumulator')
parser.add_argument('-c', help='Compile')

args = vars(parser.parse_args())
p = args['p']
c: str = args['c']

INDEX_FOLDER = '..'

NG_BUILD_COMMAND = 'npx ng build'
DIST_FOLDER = 'dist'


if(p != None):
    if(c != None and  c.upper() == 'TRUE'):
        system(f'cd {INDEX_FOLDER} && {NG_BUILD_COMMAND} {p}')

    dest = f'{INDEX_FOLDER}/node_modules/{p}'
    try:
        rmtree(dest)

    except Exception as e:
        pass
    copytree(
        f'{INDEX_FOLDER}/{DIST_FOLDER}/{p}',
        dest,
    )