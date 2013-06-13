all: join wrap-core minify

include ../../build/modules.mk

MODULE = language
SOURCE_FILES = ${SOURCE_DIR}/sprintf.js \
${SOURCE_DIR}/${MODULE}.js