# Copyright 1999-2013 Gentoo Foundation
# Distributed under the terms of the GNU General Public License v2
# $Header: /var/cvsroot/gentoo-x86/media-libs/osl/openvdb-1.2.0.ebuild,v 1.0 2013/12/09 18:11:23 brothermechanic Exp $

EAPI="5"

PYTHON_COMPAT=( python2_7 )

inherit eutils versionator python-r1

DESCRIPTION="Libs for the efficient manipulation of volumetric data"
HOMEPAGE="http://www.openvdb.org"
MY_PV="$(replace_all_version_separators '_')"
SRC_URI="http://www.openvdb.org/download/${PN}_${MY_PV}_library.zip"
LICENSE="Mozilla Public License Version 2.0"
SLOT="0"
KEYWORDS="~amd64 ~x86"
IUSE=""

DEPEND="
	sys-libs/zlib
	>=dev-libs/boost-1.42.0[threads]
	media-libs/openexr
	>=dev-cpp/tbb-3.0
	>=dev-util/cppunit-1.10
	>=app-doc/doxygen-1.4.7
	>=app-text/ghostscript-gpl-8.70
	>=media-libs/glfw-2.7.5
	dev-libs/jemalloc
	dev-python/numpy[${PYTHON_USEDEP}]"

RDEPEND=""

S="${WORKDIR}/openvdb"

src_prepare() {
	epatch "${FILESDIR}"/*.patch
}
src_compile() {
	emake INSTALL_DIR="${D}" \
	PYTHON_VERSION=2.7 \
	LIBS_RPATH="${LDFLAGS}  -ldl -lm -lz -lHalf -ltbb" \
	PYCONFIG_INCL_DIR="/usr/include/python2.7/" \
	NUMPY_INCL_DIR="/usr/$(get_libdir)/python2.7/site-packages/numpy/core/include/numpy" \
	BOOST_PYTHON_LIB="-lboost_python-2.7-mt" \
	TBB_INCL_DIR="/usr/include/tbb" \
	EXR_INCL_DIR="/usr/include/OpenEXR/" || die "emake failed"
}

src_install() {
	emake DESTDIR="${D}" install
}
