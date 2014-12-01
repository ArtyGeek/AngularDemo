'use strict';
angular.module('App', ['customServices'], function () { });

var UserListCtrl = function ($scope, time)
{
	$scope.users =
	[
		{
			login: "Mark A. Cobb",
			email: "MarkACobb@dayrep.com",
			birthday: new Date(1933, 4, 27)
		},
		{
			login: "Tim Goldworthy",
			email: "TimGoldworthy@dayrep.com",
			birthday: new Date(1967, 10, 24)
		},
		{
			login: "Goodwill Goodbody",
			email: "GoodwillGoodbody@dayrep.com",
			birthday: new Date(1971, 9, 6)
		},
		{
			login: "Drogo Fairbairn",
			email: "DrogoFairbairn@jourrapide.com",
			birthday: new Date(1932, 2, 15)
		},
		{
			login: "Eglantine Hornblower",
			email: "EglantineHornblower@rhyta.com",
			birthday: new Date(1974, 11, 28)
		},
		{
			login: "Hob Burrowes",
			email: "HobBurrowes@dayrep.com",
			birthday: new Date(1963, 5, 9)
		},
		{
			login: "Faramir Lightfoot",
			email: "FaramirLightfoot@rhyta.com",
			birthday: new Date(1992, 5, 18)
		},
		{
			login: "Alfrida Bolger-Baggins",
			email: "AlfridaBolger-Baggins@dayrep.com",
			birthday: new Date(1976, 10, 18)
		},
		{
			login: "Cedivar Bunce",
			email: "CedivarBunce@dayrep.com",
			birthday: new Date(1961, 3, 9)
		},
		{
			login: "Caradas Bolger-Baggins",
			email: "CaradasBolger-Baggins@jourrapide.com",
			birthday: new Date(1971, 6, 31)
		},
		{
			login: "Flambard Maggot",
			email: "FlambardMaggot@jourrapide.com",
			birthday: new Date(1981, 10, 28)
		},
		{
			login: "Nicol Brandagamba",
			email: "NicolBrandagamba@dayrep.com",
			birthday: new Date(1948, 2, 8)
		},
		{
			login: "Bildad Smallburrow",
			email: "BildadSmallburrow@jourrapide.com",
			birthday: new Date(1989, 1, 6)
		},
		{
			login: "Tom Chubb-Baggins",
			email: "TomChubb-Baggins@dayrep.com",
			birthday: new Date(1947, 1, 9)
		}
	];

	$scope.age = function (user)
	{
		var today = time.today;
		var birthDate = user.birthday;
		var age = today.getFullYear() - birthDate.getFullYear();
		var m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
		{
			age--;
		}
		return age;
	};

	return true;
};