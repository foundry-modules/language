include ../../build/modules.mk

BUILD_DIR = build
SRC_DIR = source

BASE_FILES = ${SRC_DIR}/sprintf.js \
	${SRC_DIR}/language.js

all: body min

body:
	mkdir -p ${BUILD_DIR}
	@@cat ${BASE_FILES} > ${BUILD_DIR}/language.js
	${MODULARIZE} -n "language" ${BUILD_DIR}/language.js > ${LIBRARY_DEV}/language.js

min:
	${UGLIFYJS} ${LIBRARY_DEV}/language.js > ${LIBRARY_PRO}/language.js
