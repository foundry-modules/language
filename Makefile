all: join-script-files wrap-script minify-script

include ../../build/modules.mk

MODULE = language
SOURCE_SCRIPT_FILES = ${SOURCE_SCRIPT_FOLDER}/sprintf.js \
${SOURCE_SCRIPT_FOLDER}/${MODULE}.js