# Copyright 1999-2010 Gentoo Foundation
# Distributed under the terms of the GNU General Public License v2
# $Header: $

EAPI="3"

inherit versionator

SRC_URI="http://launchpad.net/${PN}/$(get_version_component_range 1-3)/${PV}/+download/${P}.tar.bz2"
KEYWORDS="~x86 ~amd64"

inherit cmake-utils eutils gnome2-utils

DESCRIPTION="OpenGL window and compositing manager"
HOMEPAGE="https://launchpad.net/compiz-core"

LICENSE="GPL-2 LGPL-2.1 MIT"
SLOT="0"
IUSE="gnome gtk kde"
LANGS="af ar as be bg bn_IN bn bs ca cs cy da de el en_GB en_US es et eu fa fi fr gl gu he hi hr hu id it ja
	  ka km ko lo lt mk ml_IN mr nb nl or pa pl pt_BR pt ro ru sk sl sr sv ta tr uk vi xh zh_CN zh_TW zu"
for lang in ${LANGS}; do
	IUSE+=" linguas_${lang}"
done

COMMONDEPEND="
	!x11-libs/compiz-bcop
	dev-libs/glib:2
	dev-libs/libxml2
	dev-libs/libxslt
	media-libs/libpng
	>=media-libs/mesa-6.5.1-r1
	>=x11-base/xorg-server-1.1.1-r1
	x11-libs/libX11
	x11-libs/libXcomposite
	x11-libs/libXdamage
	x11-libs/libXext
	x11-libs/libXrandr
	x11-libs/libXrender
	x11-libs/libXinerama
	x11-libs/libICE
	x11-libs/libSM
	>=x11-libs/startup-notification-0.7
	gtk? (
		>=x11-libs/gtk+-2.8.0
		x11-libs/libwnck
		x11-libs/pango
		gnome? (
			gnome-base/gnome-desktop
			gnome-base/gconf
			x11-wm/metacity
		)
	)
	kde? (
		|| (
			>=kde-base/kwin-4.2.0
			kde-base/kwin:live
		)
	)
"
DEPEND="${COMMONDEPEND}
	virtual/pkgconfig
	x11-proto/damageproto
	x11-proto/xineramaproto
"
RDEPEND="${COMMONDEPEND}
	x11-apps/mesa-progs
	x11-apps/xvinfo
	dev-python/librsvg-python
"

src_configure() {
	local mycmakeargs=(
		"$(cmake-utils_use_use gnome GCONF)"
		"$(cmake-utils_use_use gnome GNOME)"
		"$(cmake-utils_use_use gtk GTK)"
		"$(cmake-utils_use_use kde KDE4)"
		"-DCOMPIZ_DISABLE_SCHEMAS_INSTALL=ON"
		"-DCOMPIZ_PACKAGING_ENABLED=ON"
		"-DCMAKE_INSTALL_PREFIX=/usr"
	)
	CMAKE_VERBOSE=OFF
	cmake-utils_src_configure
}

src_prepare() {
	epatch "${FILESDIR}/findcompiz_install.patch"
}
src_install() {
	  dodir /usr/share/compiz/cmake/
	  insinto /usr/share/compiz/cmake/
	  doins cmake/{CompizBcop,CompizCommon,CompizDefaults,CompizGconf,CompizPackage,CompizPlugin}.cmake
	  dodir /usr/share/compiz/cmake/plugin_extensions/
	  insinto /usr/share/compiz/cmake/plugin_extensions/
	  doins cmake/plugin_extensions/{CompizGenGconf,CompizGenInstallData,CompizGenInstallImages}.cmake
	pushd ${CMAKE_BUILD_DIR}
	  dodir /usr/share/glib-2.0/schemas
	  cp /usr/share/glib-2.0/schemas/* "${D}/usr/share/glib-2.0/schemas"

	  for i in `find . -type f -name "cmake_install.cmake"`;do
		sed -e "s|/usr|${D}/usr|g" -i "${i}"  || die "sed failed"
	  done
	  emake install || die "Failed to install"
#findcompiz_install
	popd ${CMAKE_BUILD_DIR}
	  rm -rf "${D}"/usr/share/glib-*
#linguas
	for lang in ${LANGS};do
	  for x in ${lang};do
		if ! use linguas_${x}; then
		  rm -rf "${D}/usr/share/locale/${x}"
		  rm -rf "${D}/usr/share/locale/"{wo,mnk,zh_HK}
		fi
	  done
	done
}

pkg_preinst() {
	use gnome && gnome2_gconf_savelist
}

pkg_postinst() {
	use gnome && gnome2_gconf_install
}

pkg_prerm() {
	use gnome && gnome2_gconf_uninstall
}
