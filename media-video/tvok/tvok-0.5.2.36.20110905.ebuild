# Copyright 1999-2011 Gentoo Foundation
# Distributed under the terms of the GNU General Public License v2
# $Header: $

EAPI="4"

inherit eutils qt4-r2 versionator

DESCRIPTION="Qt4 gui for mplayer/mencoder"
HOMEPAGE="http://www.kochkin.org/doku.php/tvok/010-index"

MIN_VER="$(get_version_component_range 1-3)"
MAX_VER="${PV/$MIN_VER/}"
MY_PV="${MIN_VER}$(replace_all_version_separators '-' ${MAX_VER})"
MINOR="$(get_version_component_range 1-2)"

SRC_URI="http://www.kochkin.org/lib/exe/fetch.php/${PN}/${MINOR}/${PN}-${MY_PV}.tar.bz2"

LICENSE="GPL-2"
SLOT="0"
KEYWORDS="~amd64 ~x86"
IUSE=""

RDEPEND="media-video/mplayer"
DEPEND="${RDEPEND}
	x11-libs/qt-core:4
	x11-libs/qt-gui:4
	media-libs/libv4l"
S="${WORKDIR}/${PN}"

src_install() {
  qt4-r2_src_install
  
  insinto /usr/share/pixmaps
  newins rc/tv.png tvok.png
  make_desktop_entry tvok "TVok" tvok
}
