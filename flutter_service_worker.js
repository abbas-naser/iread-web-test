'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "32b6ad9424f761882691ff2a867368b6",
"version.json": "f9e223cacfe6916000bf747c657e8f5f",
"index.html": "f24d82c0bfd5e881abae24be549473fd",
"/": "f24d82c0bfd5e881abae24be549473fd",
"main.dart.js": "09ed41deeffb410e7cb25c97518b974d",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "60015866056c390820bbebb2c1d0e0c2",
"assets/AssetManifest.json": "5b395404c920da0e045e9ddc877c5d47",
"assets/NOTICES": "c510c6736a7b44b337bf333750c71285",
"assets/FontManifest.json": "cc53d90e1ef47fb5268c4a1fed32c7dd",
"assets/AssetManifest.bin.json": "61b2fbd38b33264a8a12bd71a689e770",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "269f971cec0d5dc864fe9ae080b19e23",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "262525e2081311609d1fdab966c82bfc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "fd037929d15b0d700780276f4f61edbc",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c5828d1d25fd9b0fbb29c2979899a396",
"assets/fonts/MaterialIcons-Regular.otf": "8e93267f042b35d3f126b0b1b348d53d",
"assets/assets/images/qalqala.jpeg": "28ffa0a135d52d4bc44fb3f6b4b0ecd8",
"assets/assets/images/makhaarij_dhaad.jpg": "95a38d1cbc2d224fb04ead32139e6867",
"assets/assets/images/tafkeem_tarqeeq.jpeg": "e6af4cf743d1437cea2b7bf438b3f4b8",
"assets/assets/images/modood.jpg": "27d4b5af65cf53afb4dc0ca5b806f92b",
"assets/assets/images/noon_sakena_and_tanween.jpeg": "4219b8a937636354cbf124542f3df5c6",
"assets/assets/images/meem_sakena.jpeg": "2695462b487fcca64d0be5f6e1e54460",
"assets/assets/images/makhaarij_dhaa.jpg": "b56fe1000c8cb9a4a719c5c0440dac52",
"assets/assets/images/noon_meem_moshadada.jpg": "c07a15c62e11757b2b13e4320aa742c6",
"assets/assets/audio_library/reading_basics/alhuroof_fatha_tahajji/rb_alhuroof_fatha_tahajji_07_khaa.mp3": "2d7402872b49a11c476c1b670297a691",
"assets/assets/audio_library/reading_basics/alhuroof_fatha_tahajji/rb_alhuroof_fatha_tahajji_08_daal.mp3": "ce2fb1a8665c33c38f9a03158db65671",
"assets/assets/audio_library/reading_basics/alhuroof_fatha_tahajji/rb_alhuroof_fatha_tahajji_19_ghain.mp3": "f4bc9959eccc8ad8f179a42af1a08c90",
"assets/assets/audio_library/reading_basics/alhuroof_fatha_tahajji/rb_alhuroof_fatha_tahajji_16_taa2.mp3": "b88d501b0ec811fa6bb40cb32296f9ff",
"assets/assets/audio_library/reading_basics/alhuroof_fatha_tahajji/rb_alhuroof_fatha_tahajji_03_taa.mp3": "e52a6803c0a73e3d083ca0fb4adb6027",
"assets/assets/audio_library/reading_basics/alhuroof_fatha_tahajji/rb_alhuroof_fatha_tahajji_13_sheen.mp3": "86fedfd087a6ef5421b7c8ecac2ef0e8",
"assets/assets/audio_library/reading_basics/alhuroof_fatha_tahajji/rb_alhuroof_fatha_tahajji_14_saad.mp3": "8f802944c1b013f0109872fe826e4c81",
"assets/assets/audio_library/reading_basics/alhuroof_fatha_tahajji/rb_alhuroof_fatha_tahajji_20_faa.mp3": "334812d84b23b03b100da6580fc38f15",
"assets/assets/audio_library/reading_basics/alhuroof_fatha_tahajji/rb_alhuroof_fatha_tahajji_10_raa.mp3": "4ff3e03d080a6974d17b7aaaeec9d408",
"assets/assets/audio_library/reading_basics/alhuroof_fatha_tahajji/rb_alhuroof_fatha_tahajji_12_seen.mp3": "33171c030f4010e3e65a7d28e0db833a",
"assets/assets/audio_library/reading_basics/alhuroof_fatha_tahajji/rb_alhuroof_fatha_tahajji_29_yaa.mp3": "40d9a7cf608a737c8b8de6b00d5d598f",
"assets/assets/audio_library/reading_basics/alhuroof_fatha_tahajji/rb_alhuroof_fatha_tahajji_04_thaa.mp3": "adc4dd96ba27a3bcf4832bc7b54f5430",
"assets/assets/audio_library/reading_basics/alhuroof_fatha_tahajji/rb_alhuroof_fatha_tahajji_15_dhaad.mp3": "4155aea95670647fd515c81387a51b38",
"assets/assets/audio_library/reading_basics/alhuroof_fatha_tahajji/rb_alhuroof_fatha_tahajji_21_qaaf.mp3": "d80c21b5a2ae388cb0f66c7b65cd309f",
"assets/assets/audio_library/reading_basics/alhuroof_fatha_tahajji/rb_alhuroof_fatha_tahajji_01_hamza.mp3": "4490bb14736e5b08f88ede8ed283c752",
"assets/assets/audio_library/reading_basics/alhuroof_fatha_tahajji/rb_alhuroof_fatha_tahajji_25_noon.mp3": "f76cb301c7d450e2900cc2bd6866239e",
"assets/assets/audio_library/reading_basics/alhuroof_fatha_tahajji/rb_alhuroof_fatha_tahajji_26_haa2.mp3": "805664a5bbaea9c0ddd78aa2b77c3ef4",
"assets/assets/audio_library/reading_basics/alhuroof_fatha_tahajji/rb_alhuroof_fatha_tahajji_28_waaw.mp3": "7b257a491ce47f551e22177577e5f250",
"assets/assets/audio_library/reading_basics/alhuroof_fatha_tahajji/rb_alhuroof_fatha_tahajji_02_baa.mp3": "b977bb57ec83f41f77b8898674ffea48",
"assets/assets/audio_library/reading_basics/alhuroof_fatha_tahajji/rb_alhuroof_fatha_tahajji_24_meem.mp3": "5457307571af930652c3cf191f25bc4c",
"assets/assets/audio_library/reading_basics/alhuroof_fatha_tahajji/rb_alhuroof_fatha_tahajji_06_haa.mp3": "5a0e79409087a99c15c2a5860a6b5972",
"assets/assets/audio_library/reading_basics/alhuroof_fatha_tahajji/rb_alhuroof_fatha_tahajji_09_thaal.mp3": "1771a101787250543b261f82c1cabe51",
"assets/assets/audio_library/reading_basics/alhuroof_fatha_tahajji/rb_alhuroof_fatha_tahajji_11_zaay.mp3": "becfa43681d80fefcf23750840f9c98d",
"assets/assets/audio_library/reading_basics/alhuroof_fatha_tahajji/rb_alhuroof_fatha_tahajji_18_ain.mp3": "f1d245cdcb22321d5d69be0de5f5781d",
"assets/assets/audio_library/reading_basics/alhuroof_fatha_tahajji/rb_alhuroof_fatha_tahajji_27_taa_marboota.mp3": "1250281ecc49d92bf1247590014badd0",
"assets/assets/audio_library/reading_basics/alhuroof_fatha_tahajji/rb_alhuroof_fatha_tahajji_23_laam.mp3": "b15262fcbcb8f06b4a74be673a693335",
"assets/assets/audio_library/reading_basics/alhuroof_fatha_tahajji/rb_alhuroof_fatha_tahajji_22_kaaf.mp3": "c1e306fc2e18dba1ff8948194940c281",
"assets/assets/audio_library/reading_basics/alhuroof_fatha_tahajji/rb_alhuroof_fatha_tahajji_17_dhaa.mp3": "8018fa2094e29562917c32a1a6aeb9bf",
"assets/assets/audio_library/reading_basics/alhuroof_fatha_tahajji/rb_alhuroof_fatha_tahajji_05_jeem.mp3": "2bee6758de8f71ecbed243c8bce6c32a",
"assets/assets/audio_library/reading_basics/alhuroof_kasra_tahajji/rb_alhuroof_kasra_tahajji_14_saad.mp3": "37ba8f6108c965e5fea3600e5503a722",
"assets/assets/audio_library/reading_basics/alhuroof_kasra_tahajji/rb_alhuroof_kasra_tahajji_12_seen.mp3": "cebacb70ca9d433698d809ae96a37a03",
"assets/assets/audio_library/reading_basics/alhuroof_kasra_tahajji/rb_alhuroof_kasra_tahajji_04_thaa.mp3": "a598e47c9ab3e6a613e9456e7467f394",
"assets/assets/audio_library/reading_basics/alhuroof_kasra_tahajji/rb_alhuroof_kasra_tahajji_21_qaaf.mp3": "4c0a75249560f77e9a1f96fb04e5efc0",
"assets/assets/audio_library/reading_basics/alhuroof_kasra_tahajji/rb_alhuroof_kasra_tahajji_18_ain.mp3": "a8f3e022df5db39be7329c508414913b",
"assets/assets/audio_library/reading_basics/alhuroof_kasra_tahajji/rb_alhuroof_kasra_tahajji_06_haa.mp3": "8e605fb7f48066371fba02b19816a410",
"assets/assets/audio_library/reading_basics/alhuroof_kasra_tahajji/rb_alhuroof_kasra_tahajji_07_khaa.mp3": "58d03f3216bdd93cad5a238f931b01f5",
"assets/assets/audio_library/reading_basics/alhuroof_kasra_tahajji/rb_alhuroof_kasra_tahajji_08_daal.mp3": "e8a44d75f0a556d740cdb661d994aa3e",
"assets/assets/audio_library/reading_basics/alhuroof_kasra_tahajji/rb_alhuroof_kasra_tahajji_02_baa.mp3": "0f0a296f56a466a744f78d11388934b2",
"assets/assets/audio_library/reading_basics/alhuroof_kasra_tahajji/rb_alhuroof_kasra_tahajji_16_taa2.mp3": "109e77a6974ed21adf99be921a22e36e",
"assets/assets/audio_library/reading_basics/alhuroof_kasra_tahajji/rb_alhuroof_kasra_tahajji_09_thaal.mp3": "269633f73f262429a306f062a439b200",
"assets/assets/audio_library/reading_basics/alhuroof_kasra_tahajji/rb_alhuroof_kasra_tahajji_13_sheen.mp3": "7d539cd5bd9199c366aa99ea5d41c378",
"assets/assets/audio_library/reading_basics/alhuroof_kasra_tahajji/rb_alhuroof_kasra_tahajji_29_yaa.mp3": "7b850e5c3295c6d0c35f85f43b6fff08",
"assets/assets/audio_library/reading_basics/alhuroof_kasra_tahajji/rb_alhuroof_kasra_tahajji_23_laam.mp3": "0f5efba7984b3d4c005d04f1445fee64",
"assets/assets/audio_library/reading_basics/alhuroof_kasra_tahajji/rb_alhuroof_kasra_tahajji_27_taa_marboota.mp3": "93b341dea46db1b09f5c36158397b2c3",
"assets/assets/audio_library/reading_basics/alhuroof_kasra_tahajji/rb_alhuroof_kasra_tahajji_20_faa.mp3": "c5fef6c48fdf0828dd8c9a18f2cda6dc",
"assets/assets/audio_library/reading_basics/alhuroof_kasra_tahajji/rb_alhuroof_kasra_tahajji_17_dhaa.mp3": "e084ec28d6d77cbe7964a761e5e91331",
"assets/assets/audio_library/reading_basics/alhuroof_kasra_tahajji/rb_alhuroof_kasra_tahajji_05_jeem.mp3": "d4e1fcd88aa3e27269300f8cf24e3e61",
"assets/assets/audio_library/reading_basics/alhuroof_kasra_tahajji/rb_alhuroof_kasra_tahajji_10_raa.mp3": "8dfc7c3e6f0e9b00e2a14da40c31ad4d",
"assets/assets/audio_library/reading_basics/alhuroof_kasra_tahajji/rb_alhuroof_kasra_tahajji_01_hamza.mp3": "1ddecb762a1f7f6a11796da44179925a",
"assets/assets/audio_library/reading_basics/alhuroof_kasra_tahajji/rb_alhuroof_kasra_tahajji_22_kaaf.mp3": "581894aed5e3810ec4c68aa8c97be85f",
"assets/assets/audio_library/reading_basics/alhuroof_kasra_tahajji/rb_alhuroof_kasra_tahajji_15_dhaad.mp3": "ba9b7c934b0e62ce33bde20d8e4e0e3f",
"assets/assets/audio_library/reading_basics/alhuroof_kasra_tahajji/rb_alhuroof_kasra_tahajji_03_taa.mp3": "6d9c18ac429d3db05ba8d78b87a22926",
"assets/assets/audio_library/reading_basics/alhuroof_kasra_tahajji/rb_alhuroof_kasra_tahajji_25_noon.mp3": "fe1dd137f6a39425eb0e5733d07ce994",
"assets/assets/audio_library/reading_basics/alhuroof_kasra_tahajji/rb_alhuroof_kasra_tahajji_26_haa2.mp3": "3ce91db051fd0797fefb24d8e75b450c",
"assets/assets/audio_library/reading_basics/alhuroof_kasra_tahajji/rb_alhuroof_kasra_tahajji_19_ghain.mp3": "24d22c16441a8ccc790f40edae785507",
"assets/assets/audio_library/reading_basics/alhuroof_kasra_tahajji/rb_alhuroof_kasra_tahajji_28_waaw.mp3": "696c4460bde523a01fe4193f3e7d9bd9",
"assets/assets/audio_library/reading_basics/alhuroof_kasra_tahajji/rb_alhuroof_kasra_tahajji_11_zaay.mp3": "af8d023c7038624a8dcf1afd1d412369",
"assets/assets/audio_library/reading_basics/alhuroof_kasra_tahajji/rb_alhuroof_kasra_tahajji_24_meem.mp3": "ba1baf72500cde5431fb5d9dae5da12c",
"assets/assets/audio_library/reading_basics/alhuroof_dhamma_tahajji/rb_alhuroof_dhamma_tahajji_19_ghain.mp3": "1aaa90ecdb3096ea404281d819d1334b",
"assets/assets/audio_library/reading_basics/alhuroof_dhamma_tahajji/rb_alhuroof_dhamma_tahajji_16_taa2.mp3": "6450397b0ca294f51eef39ce8041daa1",
"assets/assets/audio_library/reading_basics/alhuroof_dhamma_tahajji/rb_alhuroof_dhamma_tahajji_20_faa.mp3": "c49e810829efd8a60cca5c1a07316b54",
"assets/assets/audio_library/reading_basics/alhuroof_dhamma_tahajji/rb_alhuroof_dhamma_tahajji_10_raa.mp3": "1e56c57269d86424e28491ae57fd7d17",
"assets/assets/audio_library/reading_basics/alhuroof_dhamma_tahajji/rb_alhuroof_dhamma_tahajji_29_yaa.mp3": "1a4bd6352bc4743cfe657c8c34751fe5",
"assets/assets/audio_library/reading_basics/alhuroof_dhamma_tahajji/rb_alhuroof_dhamma_tahajji_07_khaa.mp3": "9f12f89f53c51b036a8b15cc31b42cc4",
"assets/assets/audio_library/reading_basics/alhuroof_dhamma_tahajji/rb_alhuroof_dhamma_tahajji_08_daal.mp3": "ab16da42f3f9e2e05ae3f20f67a5da14",
"assets/assets/audio_library/reading_basics/alhuroof_dhamma_tahajji/rb_alhuroof_dhamma_tahajji_04_thaa.mp3": "4c2a73e7bdc8a9972f98c421fd91153c",
"assets/assets/audio_library/reading_basics/alhuroof_dhamma_tahajji/rb_alhuroof_dhamma_tahajji_01_hamza.mp3": "01fa32b0d022fbd9a18eab9c3b595afd",
"assets/assets/audio_library/reading_basics/alhuroof_dhamma_tahajji/rb_alhuroof_dhamma_tahajji_15_dhaad.mp3": "1d597a6a72907a1ec2493b77d1a7582e",
"assets/assets/audio_library/reading_basics/alhuroof_dhamma_tahajji/rb_alhuroof_dhamma_tahajji_21_qaaf.mp3": "6704aaaf32875206bd5df1ff6c42c051",
"assets/assets/audio_library/reading_basics/alhuroof_dhamma_tahajji/rb_alhuroof_dhamma_tahajji_14_saad.mp3": "05c44003feb7fb9199c72cfdd149786e",
"assets/assets/audio_library/reading_basics/alhuroof_dhamma_tahajji/rb_alhuroof_dhamma_tahajji_03_taa.mp3": "b98d5682efc34b9397ebcc9c566de23b",
"assets/assets/audio_library/reading_basics/alhuroof_dhamma_tahajji/rb_alhuroof_dhamma_tahajji_13_sheen.mp3": "b185cc5e7d55add311ac2d7b4d931f28",
"assets/assets/audio_library/reading_basics/alhuroof_dhamma_tahajji/rb_alhuroof_dhamma_tahajji_12_seen.mp3": "fe66cf6c8fdffc01725aafa6c8a45af7",
"assets/assets/audio_library/reading_basics/alhuroof_dhamma_tahajji/rb_alhuroof_dhamma_tahajji_28_waaw.mp3": "05baed50e982edac1cee6cc8ec1374b6",
"assets/assets/audio_library/reading_basics/alhuroof_dhamma_tahajji/rb_alhuroof_dhamma_tahajji_09_thaal.mp3": "3f0b934ee4cb8480424e01de5d11733d",
"assets/assets/audio_library/reading_basics/alhuroof_dhamma_tahajji/rb_alhuroof_dhamma_tahajji_11_zaay.mp3": "031165d6a7fe284e60d51705fb1afa48",
"assets/assets/audio_library/reading_basics/alhuroof_dhamma_tahajji/rb_alhuroof_dhamma_tahajji_18_ain.mp3": "8acbfe95522533fa4805ab6b4e6bc12b",
"assets/assets/audio_library/reading_basics/alhuroof_dhamma_tahajji/rb_alhuroof_dhamma_tahajji_24_meem.mp3": "2667f3675fb1680d5c1cf5e0dc064fd7",
"assets/assets/audio_library/reading_basics/alhuroof_dhamma_tahajji/rb_alhuroof_dhamma_tahajji_25_noon.mp3": "5d2008e1736ded0ea287222b3d8681e3",
"assets/assets/audio_library/reading_basics/alhuroof_dhamma_tahajji/rb_alhuroof_dhamma_tahajji_26_haa2.mp3": "f251274a53f8d0a53c7d38df5ffcccf4",
"assets/assets/audio_library/reading_basics/alhuroof_dhamma_tahajji/rb_alhuroof_dhamma_tahajji_23_laam.mp3": "655f65890fc6a87d5377113c11eefd88",
"assets/assets/audio_library/reading_basics/alhuroof_dhamma_tahajji/rb_alhuroof_dhamma_tahajji_27_taa_marboota.mp3": "4e9045f204fc2e317963580cdf5a7fb0",
"assets/assets/audio_library/reading_basics/alhuroof_dhamma_tahajji/rb_alhuroof_dhamma_tahajji_17_dhaa.mp3": "ca1ff5788e01ebedca85cee658e199a7",
"assets/assets/audio_library/reading_basics/alhuroof_dhamma_tahajji/rb_alhuroof_dhamma_tahajji_05_jeem.mp3": "466c0f7585f14a0e15d4c3fb64555111",
"assets/assets/audio_library/reading_basics/alhuroof_dhamma_tahajji/rb_alhuroof_dhamma_tahajji_22_kaaf.mp3": "89bfe8d930ba068d639657bae37ac7b9",
"assets/assets/audio_library/reading_basics/alhuroof_dhamma_tahajji/rb_alhuroof_dhamma_tahajji_06_haa.mp3": "25cef877d442cbeee264d8d1da68c8db",
"assets/assets/audio_library/reading_basics/alhuroof_dhamma_tahajji/rb_alhuroof_dhamma_tahajji_02_baa.mp3": "4abbeb863abac9ea51c1d79d6b639425",
"assets/assets/audio_library/reading_basics/alhuroof_alhijaaiyya/rb_alhuroof_alhijaaiyya_13_sheen.mp3": "f731b23ed73b37db36b7ee9d9b668401",
"assets/assets/audio_library/reading_basics/alhuroof_alhijaaiyya/rb_alhuroof_alhijaaiyya_03_taa.mp3": "0bc2e249375ae8793b75cc3d2bb47614",
"assets/assets/audio_library/reading_basics/alhuroof_alhijaaiyya/rb_alhuroof_alhijaaiyya_01_alif.mp3": "53f53ab75dbfa3d03c5e962073c8bed4",
"assets/assets/audio_library/reading_basics/alhuroof_alhijaaiyya/rb_alhuroof_alhijaaiyya_24_meem.mp3": "b873597ba28d84b5f2e162cb2e346f6e",
"assets/assets/audio_library/reading_basics/alhuroof_alhijaaiyya/rb_alhuroof_alhijaaiyya_11_zaay.mp3": "aa0082101e5a90fc64bd633edf653c31",
"assets/assets/audio_library/reading_basics/alhuroof_alhijaaiyya/rb_alhuroof_alhijaaiyya_25_noon.mp3": "79cd57167e65fe649141fdf12a5d4d56",
"assets/assets/audio_library/reading_basics/alhuroof_alhijaaiyya/rb_alhuroof_alhijaaiyya_15_dhaad.mp3": "750426a4a7e7d963ec51e1bd376f3bd4",
"assets/assets/audio_library/reading_basics/alhuroof_alhijaaiyya/rb_alhuroof_alhijaaiyya_26_haa2.mp3": "0442116cd6193be20fcad03c910e33ab",
"assets/assets/audio_library/reading_basics/alhuroof_alhijaaiyya/rb_alhuroof_alhijaaiyya_31_laam_hamza.mp3": "b5e4ea63dc377ef256b209af1723e083",
"assets/assets/audio_library/reading_basics/alhuroof_alhijaaiyya/rb_alhuroof_alhijaaiyya_23_laam.mp3": "d34dee87bbbd80ee70d52cddee81bd97",
"assets/assets/audio_library/reading_basics/alhuroof_alhijaaiyya/rb_alhuroof_alhijaaiyya_22_kaaf.mp3": "f543e63ef8c6c38abe67b347226e7e59",
"assets/assets/audio_library/reading_basics/alhuroof_alhijaaiyya/rb_alhuroof_alhijaaiyya_29_yaa.mp3": "a9218a5a8cf2b2e3655b842cba033493",
"assets/assets/audio_library/reading_basics/alhuroof_alhijaaiyya/rb_alhuroof_alhijaaiyya_05_jeem.mp3": "edd937c947c0df441a3ec08508a6456a",
"assets/assets/audio_library/reading_basics/alhuroof_alhijaaiyya/rb_alhuroof_alhijaaiyya_17_dhaa.mp3": "9e11ce29386cb63071aaa0f7c533ba45",
"assets/assets/audio_library/reading_basics/alhuroof_alhijaaiyya/rb_alhuroof_alhijaaiyya_19_ghain.mp3": "3fd1c34359330852c44de0c44ffc3781",
"assets/assets/audio_library/reading_basics/alhuroof_alhijaaiyya/rb_alhuroof_alhijaaiyya_20_faa.mp3": "2d782d5113bf3a0c64686b92000ed788",
"assets/assets/audio_library/reading_basics/alhuroof_alhijaaiyya/rb_alhuroof_alhijaaiyya_10_raa.mp3": "3be642bb84ba0a06bfcd453b8c2689e7",
"assets/assets/audio_library/reading_basics/alhuroof_alhijaaiyya/rb_alhuroof_alhijaaiyya_06_haa.mp3": "5dbf809b11295c34898e7dd6ae34d2e0",
"assets/assets/audio_library/reading_basics/alhuroof_alhijaaiyya/rb_alhuroof_alhijaaiyya_02_baa.mp3": "66b3c1ca0961adb8a050926ab229fb5d",
"assets/assets/audio_library/reading_basics/alhuroof_alhijaaiyya/rb_alhuroof_alhijaaiyya_16_taa2.mp3": "15220e60b62d5b992a66e6b22b7d0cc9",
"assets/assets/audio_library/reading_basics/alhuroof_alhijaaiyya/rb_alhuroof_alhijaaiyya_07_khaa.mp3": "238f4326e0d05587bdb4d0ae3448ce7b",
"assets/assets/audio_library/reading_basics/alhuroof_alhijaaiyya/rb_alhuroof_alhijaaiyya_08_daal.mp3": "730a18670a7517e75ba0ab3ef37d7d6d",
"assets/assets/audio_library/reading_basics/alhuroof_alhijaaiyya/rb_alhuroof_alhijaaiyya_30_laam_alif.mp3": "9a9eb2573acd0f4231f2f046cb871ae8",
"assets/assets/audio_library/reading_basics/alhuroof_alhijaaiyya/rb_alhuroof_alhijaaiyya_27_waaw.mp3": "4109af42386184170ee94b102aa91e2f",
"assets/assets/audio_library/reading_basics/alhuroof_alhijaaiyya/rb_alhuroof_alhijaaiyya_28_hamza.mp3": "fbfb92b74a21c9c129bbde4b13dd10c3",
"assets/assets/audio_library/reading_basics/alhuroof_alhijaaiyya/rb_alhuroof_alhijaaiyya_04_thaa.mp3": "76e3c5be894363e79d928d324599b73e",
"assets/assets/audio_library/reading_basics/alhuroof_alhijaaiyya/rb_alhuroof_alhijaaiyya_32_taa_marboota.mp3": "dfad7f428154fb71dcacd84ab967c507",
"assets/assets/audio_library/reading_basics/alhuroof_alhijaaiyya/rb_alhuroof_alhijaaiyya_21_qaaf.mp3": "7dbad056e78fdd854c7a5f0d48d86f58",
"assets/assets/audio_library/reading_basics/alhuroof_alhijaaiyya/rb_alhuroof_alhijaaiyya_14_saad.mp3": "a6d219c21f7380459ffc243f1eba94b5",
"assets/assets/audio_library/reading_basics/alhuroof_alhijaaiyya/rb_alhuroof_alhijaaiyya_18_ain.mp3": "77496857c9ff5cc4343ac6b5d612310c",
"assets/assets/audio_library/reading_basics/alhuroof_alhijaaiyya/rb_alhuroof_alhijaaiyya_09_thaal.mp3": "749f907e41c8c4ccf626b91f5c3812cf",
"assets/assets/audio_library/reading_basics/alhuroof_alhijaaiyya/rb_alhuroof_alhijaaiyya_12_seen.mp3": "e482aa2647fe4d6083b0a011b766fd23",
"assets/assets/audio_library/reading_basics/alhuroof_almurakkaba/rb_alhuroof_almurakkaba_alif_laam_meem_raa.mp3": "99f7999a80be7aeda40a58923a4f00ce",
"assets/assets/audio_library/reading_basics/alhuroof_almurakkaba/rb_alhuroof_almurakkaba_taa_seen_meem.mp3": "29eea30e6ad6fac9e6f02d76f4aaccc6",
"assets/assets/audio_library/reading_basics/alhuroof_almurakkaba/rb_alhuroof_almurakkaba_alif_laam_meem.mp3": "b6987427cfd18ae26275525b6d7ff09a",
"assets/assets/audio_library/reading_basics/alhuroof_almurakkaba/rb_alhuroof_almurakkaba_kaaf_haa_yaa_ain_saad.mp3": "04f11b6c1d1716c986566dacf2215d5e",
"assets/assets/audio_library/reading_basics/alhuroof_almurakkaba/rb_alhuroof_almurakkaba_ain_seen_qaaf.mp3": "ce9fa31a2cdb7936f02d55c777f889aa",
"assets/assets/audio_library/reading_basics/alhuroof_almurakkaba/rb_alhuroof_almurakkaba_yaa_seen.mp3": "47b914cc3249ede1e8f6c0c30aaf76c8",
"assets/assets/audio_library/reading_basics/alhuroof_almurakkaba/rb_alhuroof_almurakkaba_taa_seen.mp3": "c7794138f622009265a0d43ddcac5037",
"assets/assets/audio_library/reading_basics/alhuroof_almurakkaba/rb_alhuroof_almurakkaba_taa_haa.mp3": "a3f3a5bcb13de21a30f5223449c35ada",
"assets/assets/audio_library/reading_basics/alhuroof_almurakkaba/rb_alhuroof_almurakkaba_haa_meem.mp3": "b8f583ab1bf4c8b02d8a9cc104701645",
"assets/assets/audio_library/reading_basics/alhuroof_almurakkaba/rb_alhuroof_almurakkaba_alif_laam_raa.mp3": "a28ff711c877af56f8843dc919ebd5b5",
"assets/assets/audio_library/reading_basics/alhuroof_almurakkaba/rb_alhuroof_almurakkaba_alif_laam_meem_saad.mp3": "4bbbbae727fd91da9af9153eb74a9853",
"assets/assets/audio_library/tajweed_pronunciation/la_uqsimu.mp3": "afa24222df7c5987ecbf99faf98d9268",
"assets/assets/audio_library/tajweed_pronunciation/fala_taqhar.mp3": "da2a6f1397f58919e3b9b84ff68d18b4",
"assets/assets/audio_library/tajweed_pronunciation/tayran_ababeel.mp3": "5ecf453e51e9e98f3f4733a08c232182",
"assets/assets/audio_library/tajweed_pronunciation/ishatin_radiyah.mp3": "a0441b84259516f3b18dd323f479c779",
"assets/assets/audio_library/tajweed_pronunciation/qawmen_zalamu.mp3": "918fdb4c4d150ddebd15617561093fbe",
"assets/assets/audio_library/tajweed_pronunciation/minkum.mp3": "492bcece50eb2c6dc2c4ec2a6700d05d",
"assets/assets/audio_library/tajweed_pronunciation/hillun_bihadha.mp3": "7a4411b1bc68f40187d6881517b256e8",
"assets/assets/audio_library/tajweed_pronunciation/enna_aatainaka.mp3": "4b1dfac9ab4e3c4706230a37475fa7ef",
"assets/assets/audio_library/tajweed_pronunciation/radadnahu.mp3": "10f9a9224ca962c4e0fe241de9860407",
"assets/assets/audio_library/tajweed_pronunciation/mandood.mp3": "d3fd54514a4c1c5fc992dd4b663f868b",
"assets/assets/audio_library/tajweed_pronunciation/yanteqoon.mp3": "29335b7391ce43a6ebed0127a156eebf",
"assets/assets/audio_library/tajweed_pronunciation/nafsan_zakiyah.mp3": "07fe0be0fe3b194353466b96d96639f5",
"assets/assets/audio_library/tajweed_pronunciation/waradoo_anh.mp3": "ef00479dd6c04d07d107422a8c23626c",
"assets/assets/audio_library/tajweed_pronunciation/in_kadhdhaba.mp3": "d420d5a4c2372c373ae28784b460680e",
"assets/assets/audio_library/tajweed_pronunciation/lashahid.mp3": "332094da6e60832653af593a9f9d3776",
"assets/assets/audio_library/tajweed_pronunciation/man_tazakka.mp3": "0e573e06f47907bf0f9925a3c9bb9e9b",
"assets/assets/audio_library/tajweed_pronunciation/naran_talazza.mp3": "00cd6fd93f2b25045f0bfa3427af1825",
"assets/assets/audio_library/tajweed_pronunciation/ghafurun_rahim.mp3": "a63cbbc426de795afae21c791ad57774",
"assets/assets/audio_library/tajweed_pronunciation/kiraman_katibin.mp3": "4c453ab44b172a2042504bd0f32b3341",
"assets/assets/audio_library/tajweed_pronunciation/kiraamin_bararah.mp3": "8df4463786f618858c036c80d84c1595",
"assets/assets/audio_library/tajweed_pronunciation/bikufrihim_faqalilan.mp3": "3f4691091aa75724591ee844ff01458f",
"assets/assets/audio_library/tajweed_pronunciation/khalaqna.mp3": "049195b196a7cb39b6de947274ab8f7d",
"assets/assets/audio_library/tajweed_pronunciation/fa_la_tanhar.mp3": "936d36fa9afde28ddcddb3a5176d4dd4",
"assets/assets/audio_library/tajweed_pronunciation/faatharna_bihi_naqaan.mp3": "7ae7eb56d3f9ad9270827f91771afab7",
"assets/assets/audio_library/tajweed_pronunciation/li_yawmin_azim.mp3": "28436e871f546a68316b184e6732c8f5",
"assets/assets/audio_library/tajweed_pronunciation/wa_lam_yakun_lahu.mp3": "b1ad30fa721798c6fe9e053dfbf4b17e",
"assets/assets/audio_library/tajweed_pronunciation/khayran_yarah.mp3": "cb79dad05964a9fc87b34994823d08b4",
"assets/assets/audio_library/tajweed_pronunciation/min_quwwah.mp3": "687ece6b31cc0d8698ff20c176eee428",
"assets/assets/audio_library/tajweed_pronunciation/birabbi_alfalaq.mp3": "27c62cbbe379ae83329ba72cad770dd7",
"assets/assets/audio_library/tajweed_pronunciation/watawasaw_bialhaq.mp3": "07f333d127401177ee825f6d19860a4a",
"assets/assets/audio_library/tajweed_pronunciation/hablun_min_masad.mp3": "1139fa13afc2b9df77c03bf03aa5fc43",
"assets/assets/audio_library/tajweed_pronunciation/ashtatan_li_yuraw.mp3": "14f6d71c8226a8e22dadace84db6252c",
"assets/assets/audio_library/tajweed_pronunciation/fahkum_baynahum_bilqist.mp3": "df6d811d9a9a0b657e3bf9cf409bc35e",
"assets/assets/audio_library/tajweed_pronunciation/kufu_an_ahad.mp3": "b1a8c9cdbdc80b54b60818f30105e3c0",
"assets/assets/audio_library/tajweed_pronunciation/annahum_mabuthoon.mp3": "2a1b17cdaf033042e22dea13843af720",
"assets/assets/audio_library/tajweed_pronunciation/qismatun_dhizaa.mp3": "590c9d0f1010e29426e331970ac57a48",
"assets/assets/audio_library/tajweed_pronunciation/altammato.mp3": "68f9f34b18cc9af9f2eaf2e38f28ce32",
"assets/assets/audio_library/tajweed_pronunciation/man_thaqulat.mp3": "5c82508495d9291809736b609823ef02",
"assets/assets/audio_library/tajweed_pronunciation/fa_andhartukum.mp3": "ccc16b0d1ec34ff272778e70bc0ae041",
"assets/assets/audio_library/tajweed_pronunciation/aj.mp3": "4aab246100118ed51f6e516387e22374",
"assets/assets/audio_library/tajweed_pronunciation/la_in_lam.mp3": "6816a9fc106ca74304c284fa4bd9464b",
"assets/assets/audio_library/tajweed_pronunciation/min_wal.mp3": "3f3875cf29c54d49d17c9d98add85304",
"assets/assets/audio_library/tajweed_pronunciation/ahsane_taqweem.mp3": "aef33a52bdc3c9f7f22ec20e823bfcb5",
"assets/assets/audio_library/tajweed_pronunciation/thomma_latosalonna_youma_ethen_ane_alnaeem.mp3": "2b745065ac8658e4822c13df92187dc6",
"assets/assets/audio_library/tajweed_pronunciation/alayhim_muosadah.mp3": "d6c2430432a00aa677a96d4cf2a2c327",
"assets/assets/audio_library/tajweed_pronunciation/aktharuhum_bihim_muminun.mp3": "a38528fb9c54aaafa882be3a2cc51081",
"assets/assets/audio_library/tajweed_pronunciation/iqra.mp3": "9f74a8db4546cd2dc69bdce857f2475f",
"assets/assets/audio_library/tajweed_pronunciation/dakkan_dakka.mp3": "ca72b86e2a46220109e7b15221c5582a",
"assets/assets/audio_library/tajweed_pronunciation/laylatu_alqadre_waslan.mp3": "0037819a1050eeff8aa1f3123fd7e024",
"assets/assets/audio_library/tajweed_pronunciation/sabhan_tawila.mp3": "7adcd31772741d04964968dafa264119",
"assets/assets/audio_library/tajweed_pronunciation/inna_batsh.mp3": "49a4317db9bc42009a11c8719f79857a",
"assets/assets/audio_library/tajweed_pronunciation/idhi_anbaatha.mp3": "76e309c99459179470e35ba1811b7ff8",
"assets/assets/audio_library/tajweed_pronunciation/lamma_yaqdi.mp3": "97838a18b81fa4105904507adc2d560d",
"assets/assets/audio_library/tajweed_pronunciation/matliAAi_alfajr.mp3": "2a319c6275d1e9fd1a4df1d06e56a401",
"assets/assets/audio_library/tajweed_pronunciation/lafuon_ghafur.mp3": "16d95dcb2aea3bf66f6a9764b8464b70",
"assets/assets/audio_library/tajweed_pronunciation/sabaan_shidada.mp3": "06f565119e456cc1051b42ba11769779",
"assets/assets/audio_library/tajweed_pronunciation/kitabun_karim.mp3": "265ae8236d5ae4de6a1c32e66af26aa5",
"assets/assets/audio_library/tajweed_pronunciation/layatgha.mp3": "2ad888552fbcb01e1e310561c5e6c449",
"assets/assets/audio_library/tajweed_pronunciation/la_yonbathanna.mp3": "6c07704956ee7a1b3a810d7d409adcfb",
"assets/assets/audio_library/tajweed_pronunciation/amma_yatasaaloon.mp3": "9edb99d97e074d59cee5f8d42e6dcb4c",
"assets/assets/audio_library/tajweed_pronunciation/min_dareea.mp3": "85c59846af9ec51ef4d4fc91b95eb1a6",
"assets/assets/audio_library/tajweed_pronunciation/fa_aatohonna_ojorahonna_fareedhah_waslan.mp3": "d203143e86200d492eb7a65922706b0b",
"assets/assets/audio_library/tajweed_pronunciation/min_wara_ihim.mp3": "003a27f04e2810726f36a1e5e85e4639",
"assets/assets/audio_library/tajweed_pronunciation/yadkhuloon.mp3": "befff6677c1329d52a6b16732fcaf34c",
"assets/assets/audio_library/tajweed_pronunciation/dafiq.mp3": "9d57d38e97127829ce3245e9ef74a493",
"assets/assets/audio_library/tajweed_pronunciation/dhillan_zalila.mp3": "1bead5888de9ebcca1a88620b27b63ae",
"assets/assets/audio_library/tajweed_pronunciation/ansarah.mp3": "8dbf65047909adec9ede459f9bbc9cce",
"assets/assets/audio_library/tajweed_pronunciation/tabaqan_an_tabaq.mp3": "fa0a82f3a0763fa12015ccbd331bef44",
"assets/assets/audio_library/tajweed_pronunciation/men_aljennate_waalnnass.mp3": "5861ddcd7c50b64428672439d126eed5",
"assets/assets/audio_library/tajweed_pronunciation/waladiyat_dabhhan.mp3": "b0012e6893ee9b57aee378c52be81b25",
"assets/assets/audio_library/tajweed_pronunciation/ataan_hisaba.mp3": "f0ec62f8bcb0b083fb2724fa18b21b4a",
"assets/assets/audio_library/tajweed_pronunciation/mawaqitu_linnas_walhajj.mp3": "b71d21d9d5ffa56258f35bd52eb98853",
"assets/assets/audio_library/tajweed_pronunciation/jannatu_adn.mp3": "3db60cbd82700225604b604a9ead6781",
"assets/assets/audio_library/tajweed_pronunciation/sadrak.mp3": "5114d0918fd132307b082a3b83fe092f",
"assets/assets/audio_library/tajweed_pronunciation/munfakkina.mp3": "614bcbffe6a0970f537e2d6670de44bf",
"assets/assets/audio_library/tajweed_pronunciation/mansura.mp3": "f5b4d54dc8b9f63e6dda9e8675813c9f",
"assets/assets/audio_library/tajweed_pronunciation/jannaten_aaliyah.mp3": "4d1003e148276f14edc1c56fef0458af",
"assets/assets/audio_library/tajweed_pronunciation/abdan.mp3": "9bee167a49f60117eb438febd0d4eaef",
"assets/assets/audio_library/tajweed_pronunciation/watawasaw_bessabr.mp3": "94c353b12ec93a7986cd8b408006a0de",
"assets/assets/audio_library/tajweed_pronunciation/kal_ihni_al_manfush.mp3": "4ccf76d5b3a383d78aee28e50237d898",
"assets/assets/audio_library/tajweed_pronunciation/wal_asbat.mp3": "5c213af2cff0cbb0d09199039e5f6bfa",
"assets/assets/audio_library/tajweed_pronunciation/wataqwaha.mp3": "a167c4c985bcec1be4bfa35df5968b4e",
"assets/assets/audio_library/tajweed_pronunciation/ansara.mp3": "be165db9fbb8edfe7f55b2ac3bad6bc4",
"assets/assets/audio_library/tajweed_pronunciation/huwa_al_abtar.mp3": "a42993853ac24e3e08cbcd28a3f6c518",
"assets/assets/audio_library/tajweed_pronunciation/yantahi.mp3": "5a5372c448ef656a7e93b1bf6cc3eb19",
"assets/assets/audio_library/tajweed_pronunciation/fa_man_yamal.mp3": "511a184d653f1091a0be8ff0343fe8fb",
"assets/assets/audio_library/tajweed_pronunciation/att.mp3": "425789f664209da0e47737a2cb753448",
"assets/assets/audio_library/tajweed_pronunciation/yuhbibkumu.mp3": "c98ef0a5f18818db7c9c503d62070fdf",
"assets/assets/audio_library/tajweed_pronunciation/min_ghayrakum.mp3": "0cd97b228f922639371ce9debd15ec8e",
"assets/assets/audio_library/tajweed_pronunciation/thamaniya_hijaj.mp3": "2e0e72f0dd447be8520f3a8111cb9782",
"assets/assets/audio_library/tajweed_pronunciation/kaydahum_fi.mp3": "bf2d1e55e8d9663340a211f727cb3818",
"assets/assets/audio_library/tajweed_pronunciation/salamon_hiya.mp3": "be120e7188b322521ff382df867d80e6",
"assets/assets/audio_library/tajweed_pronunciation/amilaton_nasibah.mp3": "b6f220bf5eaeafd8e709f782a507cd9b",
"assets/assets/audio_library/tajweed_pronunciation/an_rabbihim.mp3": "f92c1e341d20ac0b221926cbd48313d2",
"assets/assets/audio_library/tajweed_pronunciation/idha_waqab.mp3": "5d9c38f3f5ad1ad260e5532988d4d383",
"assets/assets/audio_library/tajweed_pronunciation/alam_yalam_bianna.mp3": "7c29076bbf6d85b0b50c49549ef1d699",
"assets/assets/audio_library/tajweed_pronunciation/fi_aluqad.mp3": "b41a98955937c0c099a84efccf0a7a3b",
"assets/assets/audio_library/tajweed_pronunciation/inna_al_insana.mp3": "7f9048c1992fb5d3a090b6542ae35aa0",
"assets/assets/audio_library/tajweed_pronunciation/itamun_fi.mp3": "a4e848cdacb7d08c45d066c4d42c5a81",
"assets/assets/audio_library/tajweed_pronunciation/falahum_ajrun_ghayru.mp3": "6db1ed1a9f63e5f2bc13b47f3df80644",
"assets/assets/audio_library/tajweed_pronunciation/biltaqwa.mp3": "675572487aa9a375d78190ac59e0a6d7",
"assets/assets/audio_library/tajweed_pronunciation/walfitnatu_ashadd.mp3": "a67311e7445775d35f3f16442ebe6ad3",
"assets/assets/audio_library/tajweed_pronunciation/falmughirat_subhan.mp3": "267b5a3f15ce7d9911b1e50c021bbdf8",
"assets/assets/audio_library/tajweed_pronunciation/karraton_khasirah.mp3": "408ad2cbd2c4b6665648a49f964847eb",
"assets/assets/audio_library/tajweed_pronunciation/wama_kasab.mp3": "e660cd104e8305b2afcebe959a3f1baa",
"assets/assets/audio_library/tajweed_pronunciation/man_tagha.mp3": "f9901b03ed7dcd320df14a1076b7f18c",
"assets/assets/audio_library/tajweed_pronunciation/falyadAAu.mp3": "3c0114e2caf7fdad8a13447a6b3ae022",
"assets/assets/audio_library/tajweed_pronunciation/anzalnahu.mp3": "19945c92d48a81e28539aa8bdaa480fa",
"assets/assets/audio_library/tajweed_pronunciation/lam_yukhlaq_mithluha.mp3": "ba89f1aa350dea64aa4fecbd6810aaf2",
"assets/assets/audio_library/tajweed_pronunciation/in_nafaate.mp3": "8a166a5e39843f0c1813dae58dad91a9",
"assets/assets/audio_library/tajweed_pronunciation/yawm_ithin_yasdur.mp3": "2ca9873d0b40fc87bc33d6002328e46c",
"assets/assets/audio_library/tajweed_pronunciation/dhati_alburooj.mp3": "90da99e8d912acb9f938432ac1b8b5cf",
"assets/assets/audio_library/tajweed_pronunciation/liyaquma_alnas_bilqist.mp3": "308385a803dfe24688600cc668b7159b",
"assets/assets/audio_library/tajweed_pronunciation/ma_an_thajjaja.mp3": "1e990dda8fc1e78ab12421dc8ca8d0c4",
"assets/assets/audio_library/tajweed_pronunciation/man_zakkaha.mp3": "ff7c9fd489b3fd545031381a9fe60a60",
"assets/assets/audio_library/tajweed_pronunciation/udu_ila.mp3": "0159b3b907ae3fd31c34611b48fe98c2",
"assets/assets/audio_library/tajweed_pronunciation/tajri.mp3": "50801792d090f9d551c2937025621a09",
"assets/assets/audio_library/tajweed_pronunciation/ma_khalaq.mp3": "9823190acbd59fc8eb44fe7580e57a7d",
"assets/assets/audio_library/tajweed_pronunciation/inna_rabbahum_bihim.mp3": "3cee507bf926a0603fb219f625063979",
"assets/assets/audio_library/tajweed_pronunciation/man_khaffat.mp3": "bf94e4eb7b2b2e9de418b61393c19796",
"assets/assets/audio_library/tajweed_pronunciation/min_jo_en_wa_amannahum.mp3": "1ea5e232f1a4ecb019fd47fdc6f5c3e9",
"assets/assets/audio_library/tajweed_pronunciation/fala_tansa.mp3": "2bd944efeab998361c57661964874ac9",
"assets/assets/audio_library/tajweed_pronunciation/lam_yalid_wa_lam_yuulad.mp3": "008e901014c004c4d541cdb6d6c1fa02",
"assets/assets/audio_library/tajweed_pronunciation/min_qebalehe.mp3": "876b9f9f122c535ceefcf19e9baaa19c",
"assets/assets/audio_library/tajweed_pronunciation/wanhar.mp3": "dbfbe0a86a8540b6f7dfba6c56a7ef54",
"assets/assets/audio_library/tajweed_pronunciation/wassamaa_wattaariq.mp3": "c5cef71939d99075f79c43fffad1b3c1",
"assets/assets/audio_library/tajweed_pronunciation/naron_hamiya.mp3": "64b3a59badae8d97f492f905ce32f33d",
"assets/assets/audio_library/tajweed_pronunciation/lanasfaan_bialnaasiya.mp3": "a8c04ec2f91ede5ddd2b1ed67919db75",
"assets/assets/audio_library/tajweed_pronunciation/salaman_salama.mp3": "0e15557ce32991d2bae7245f24c6277c",
"assets/assets/audio_library/tajweed_pronunciation/akhthan_rabiyah.mp3": "735d015b57fae87d4fdc2c5ef38f8d5e",
"assets/assets/audio_library/tajweed_pronunciation/dallan_fahada.mp3": "e9bb8b05b375cad4645fc5e1120e576f",
"assets/assets/audio_library/tajweed_pronunciation/anhum_waradu.mp3": "c8e105f128f8c04658957731a6a68d11",
"assets/assets/audio_library/tajweed_pronunciation/alnajmu_althaqib.mp3": "0cd01c0c55c42025842b422d4ca7fe91",
"assets/assets/audio_library/tajweed_pronunciation/biludwati_alquswa.mp3": "3f6ccf5eef882de5ceccdc63a90fd516",
"assets/assets/audio_library/tajweed_pronunciation/walfajr.mp3": "22fc6baf1f8f67d68a53de0b9e71f66f",
"assets/assets/audio_library/tajweed_pronunciation/sababna.mp3": "bbdfbf8970b9adb4f2d32d7a3e6f7112",
"assets/assets/audio_library/tajweed_pronunciation/basharan_sawiya.mp3": "1f1b1a2776c483f1dc21404349914f7f",
"assets/assets/audio_library/tajweed_pronunciation/min_alfe.mp3": "b0696f5a34556c5afa248f4c180f3b9b",
"assets/assets/audio_library/tajweed_pronunciation/wal_untha.mp3": "8814a33f1b317780931281387c2af686",
"assets/assets/audio_library/tajweed_pronunciation/man_aata.mp3": "ae2f867eb22a38a5058f28d4a77bdd43",
"assets/assets/audio_library/tajweed_pronunciation/man_yakhsha.mp3": "387fd99cdead538a674115d77651485f",
"assets/assets/audio_library/tajweed_pronunciation/watudlu.mp3": "fe1ad585e017e47c1180c5b60e0a5a26",
"assets/assets/audio_library/tajweed_pronunciation/yawm_ithin_naimah.mp3": "80ffd32a705ac226fe6979232b908ab3",
"assets/assets/audio_library/tajweed_pronunciation/faqthfeehe_fe_alyamm_waqfan.mp3": "0c39768735fda650ec3e94843bd8bff3",
"assets/assets/audio_library/tajweed_pronunciation/min_sharri.mp3": "f1ca29ba7490a45d5821abdb3f8568bb",
"assets/assets/audio_library/tajweed_pronunciation/saffan_saffa.mp3": "bf35bbfcdad8f3070f3015ca78c2d635",
"assets/assets/audio_library/tajweed_pronunciation/an_raahu.mp3": "f9195a569c16438005b25df939858ec7",
"assets/assets/audio_library/tajweed_pronunciation/tahtazzo_ka_annaha_jaann_waqfan.mp3": "2866d6fc13f24ac9a13e71c3dd9a5600",
"assets/assets/audio_library/tajweed_pronunciation/abasharun_yahdoonana.mp3": "d3dc9fcce857efa22872a28b2df1777f",
"assets/assets/audio_library/tajweed_pronunciation/man_dassaha.mp3": "e6b3531bca9c5d5c5a6e741af04aea13",
"assets/assets/audio_library/tajweed_pronunciation/min_tahteha.mp3": "722dbc16d1ac4d9b452e607c03f48a20",
"assets/assets/audio_library/tajweed_pronunciation/faaqim_wajhaka.mp3": "cd3433ca9a68c1e5f42b69abdf2ae82a",
"assets/assets/audio_library/tajweed_pronunciation/shayen_shahid.mp3": "6bcad17603fdc7db43b808fee60e1654",
"assets/assets/audio_library/tajweed_pronunciation/hammalata_alhatab.mp3": "4c1b10f816e005d751508a6055403a11",
"assets/assets/audio_library/tajweed_pronunciation/dhati_al_sada.mp3": "fcfb37a03c7c616a8d1eca3aef1ba5cc",
"assets/assets/audio_library/tajweed_pronunciation/min_hakimen_hamid.mp3": "4434d07d7c260ad32b43f2754524922d",
"assets/assets/audio_library/tajweed_pronunciation/yanzuroon.mp3": "4fcd370db9f552b3ff333efa7e94ae7c",
"assets/assets/audio_library/tajweed_pronunciation/dha_maqrabah.mp3": "4511274d1ec570cbf86c585df145fa72",
"assets/assets/audio_library/tajweed_pronunciation/anqada.mp3": "d9cc9127e890eefa82d41712c79f4a4c",
"assets/assets/audio_library/tajweed_pronunciation/man_bakhila.mp3": "4dee841eeec75dbb12062d8ea04690ad",
"assets/assets/audio_library/tajweed_pronunciation/alayhim_wala_aldalleen.mp3": "2e59352caa7d024e6cd5fd7afeaf3fd0",
"assets/assets/audio_library/tajweed_pronunciation/fawasatna.mp3": "50f0d0921fb964b010e3bb7c3f993036",
"assets/assets/audio_library/tajweed_pronunciation/waylun_likulli_humazatin_lumazah.mp3": "48ed69e97e505c93398f2ef891dfee42",
"assets/assets/audio_library/tajweed_pronunciation/ghasiqin_idha.mp3": "ec21ea8df41d7e188977d0c46655779b",
"assets/assets/audio_library/tajweed_pronunciation/waabqa.mp3": "33b14f4dd6bf5d560289837ef3f48f05",
"assets/assets/audio_library/tajweed_pronunciation/bidhanbihim.mp3": "bc39dfcca7bc4b9eaddce94a8205eed0",
"assets/assets/audio_library/tajweed_pronunciation/yatiman_dha_maqrabah.mp3": "f65bdd7403f3f59a04c7a4f99793c92b",
"assets/assets/audio_library/tajweed_pronunciation/kalfarash_almabthooth.mp3": "2d9cb07d72a3038d47e4a6bce1fdfcc0",
"assets/assets/audio_library/tajweed_pronunciation/saeedan_tayyiba.mp3": "831421706367897eab845682c1cecc89",
"assets/assets/audio_library/tajweed_pronunciation/tarmihim_bihijaratin.mp3": "8f4002ac90e8ac7c8497cc063031ad83",
"assets/assets/audio_library/tajweed_pronunciation/mohammadon_rasoolo_allah.mp3": "00a4204b6b7945759f81143af3398c54",
"assets/assets/audio_library/tajweed_pronunciation/fala_iqtahama.mp3": "6171fb1a97c86ea223d0ad3bfaa6735c",
"assets/assets/audio_library/tajweed_pronunciation/min_teen.mp3": "9864f2448e8574ef446039a13f0e14f7",
"assets/assets/audio_library/tajweed_pronunciation/wa_najainaho_men_algamme_wa_kathaleka_waslan.mp3": "a07462253b85ea2ac6057bdb1a3503b0",
"assets/assets/audio_library/tajweed_pronunciation/qawmin_had.mp3": "d48217f83f59c75dd258ae5a647fb8f4",
"assets/assets/audio_library/tajweed_pronunciation/min_dhikraha.mp3": "22759d3c143e1188d781fc4ecad1848e",
"assets/assets/audio_library/tajweed_pronunciation/quran_zahirah.mp3": "91beb0bb2937472fcc2cbe5cec046ed2",
"assets/assets/audio_library/tajweed_pronunciation/idha_ma_ibtalahu.mp3": "9368873922ef5ebb257fdf474f4391b3",
"assets/assets/audio_library/tajweed_pronunciation/fansab.mp3": "255690e785ae8f7fe3decafa73f9bdb1",
"assets/assets/audio_library/tajweed_pronunciation/man_zulim.mp3": "a5d9192c5f8ee61905bb1f9963ec64b1",
"assets/assets/audio_library/tajweed_pronunciation/anamta.mp3": "2832f419a9cebcac8eac96ba866334d7",
"assets/assets/audio_library/tajweed_pronunciation/min_qablihim.mp3": "361a0c12a40c3a77dd92763d9dc21377",
"assets/assets/audio_library/tajweed_pronunciation/ka_asfen_maakul.mp3": "d2732c1d06b5053b20fbc992ca10968a",
"assets/assets/audio_library/tajweed_pronunciation/wama_adraak.mp3": "01fa25a82ff96a9d9f692380b13a84f4",
"assets/assets/audio_library/tajweed_pronunciation/laqawlun_fasl.mp3": "3560648c1e511b3a6beee630f8e3622c",
"assets/assets/audio_library/tajweed_pronunciation/wayarzuquhu_min_haythu_la_yahtasib.mp3": "87d223048a84411f354feb0d32725921",
"assets/assets/audio_library/tajweed_pronunciation/mala_wa_addadah.mp3": "d4c6dca8e1560b8a7f0a11c1e165bbd6",
"assets/assets/audio_library/tajweed_pronunciation/innahum_rijs.mp3": "0250a259eb883ba45ce2773ff767de0a",
"assets/assets/audio_library/tajweed_pronunciation/wa_itha_anqalaboo.mp3": "8d029fd4011fad84fa32ebbe04521b9a",
"assets/assets/audio_library/tajweed_pronunciation/walaqad.mp3": "86d1d70a0c7ec36dd5379a2f5e823aa4",
"assets/assets/audio_library/tajweed_pronunciation/fa_ommoho_haweiah.mp3": "c9f04e03c4ce39a46ff992a7c1af7f6e",
"assets/assets/audio_library/tajweed_pronunciation/fa_aatohonna_ojorahonna_waqfan.mp3": "20d0d255ae9c30eb4f18a2a880fd57e7",
"assets/assets/audio_library/tajweed_pronunciation/kadibaten_khatiah.mp3": "b90e0f64433958ff9ac479c6cee71e66",
"assets/assets/audio_library/tajweed_pronunciation/min_khawf.mp3": "8b358d46275a19f14916ab1a5b2e4102",
"assets/assets/audio_library/tajweed_pronunciation/wojohon_yawmaidhin.mp3": "93b9ef503128880179896bf4478eb619",
"assets/assets/audio_library/tajweed_pronunciation/khayrun_laka.mp3": "20860df2d2170bba9426f6867a8c26f8",
"assets/assets/audio_library/tajweed_pronunciation/min_mal_allah.mp3": "42450224844976e0afc20c6c34d709b6",
"assets/assets/audio_library/tajweed_pronunciation/atamahum.mp3": "f69a6d13e15501d31a5887fd57139781",
"assets/assets/audio_library/tajweed_pronunciation/faqthfeehe_fe_alyamme_falyolqehe_waslan.mp3": "a1d9cd08ece79300deebbb384b414618",
"assets/assets/audio_library/tajweed_pronunciation/ad.mp3": "e8a5f1fff05c7796bd9b20b3569322df",
"assets/assets/audio_library/tajweed_pronunciation/falmuriyat_qadhhan.mp3": "bbb112b86ec02ad5bed54e123973a513",
"assets/assets/audio_library/tajweed_pronunciation/waamanahum_min.mp3": "53bdc81fd74365228fb19e8102d604bf",
"assets/assets/audio_library/tajweed_pronunciation/aynun_jariyah.mp3": "106b9aebf2a5641dc32781b8cf784c86",
"assets/assets/audio_library/tajweed_pronunciation/li_man_khashiya.mp3": "c5245d7b514b3f7f9f1bc0da61b2557e",
"assets/assets/audio_library/tajweed_pronunciation/qasamu_lidhi_hijr.mp3": "e7c6c3ea3a1c4fdf363a19fd761c5fb9",
"assets/assets/audio_library/tajweed_pronunciation/man_jaaka.mp3": "8921d976da9402a90e6711d4f95f84d6",
"assets/assets/audio_library/tajweed_pronunciation/wa_najainaho_men_algamm_waqfan.mp3": "ddef2acfa3c250c6d45e1c4dd271dcd8",
"assets/assets/audio_library/tajweed_pronunciation/an_salatihim.mp3": "8d6d0c57db014514671978643207274f",
"assets/assets/audio_library/tajweed_pronunciation/hubban_jamma.mp3": "67833a09d2c69f3628f88bcc538f61ce",
"assets/assets/audio_library/tajweed_pronunciation/indakum.mp3": "b96e27a0c66ef8f341ca54fce563c070",
"assets/assets/audio_library/tajweed_pronunciation/alam_yajidka.mp3": "7983abf3dbc7c1e60a5be73191adf233",
"assets/assets/audio_library/tajweed_pronunciation/dhati_al_raja.mp3": "8435b8171217b9438599ac0be2f5049a",
"assets/assets/audio_library/tajweed_pronunciation/min_sijjil.mp3": "c3477748ca7869951ef76624759e536c",
"assets/assets/audio_library/tajweed_pronunciation/alkhannas.mp3": "8ead2785e233d970ea4725f32a061c1c",
"assets/assets/audio_library/tajweed_pronunciation/lakanood.mp3": "8b3d5c259c17777bd4c50a76572dd1d3",
"assets/assets/audio_library/tajweed_pronunciation/adhaban_qariba.mp3": "1606372ecb99fe02604d0e445e8108d1",
"assets/assets/audio_library/tajweed_pronunciation/yubdiu.mp3": "c2fccddc0c59a856a7ca18c79070ef4e",
"assets/assets/audio_library/tajweed_pronunciation/tahtazzo_ka_annaha_jaannow_walla_modbera_waslan.mp3": "fe18a536b1233d4c4c1eb1cab9250541",
"assets/assets/audio_library/tajweed_pronunciation/aq.mp3": "5214d4d0f0747113e027e0a259a35f9f",
"assets/assets/audio_library/tajweed_pronunciation/anbaahum_biasmaihim.mp3": "e72aa344fb35e86cbb983c5d006e0d57",
"assets/assets/audio_library/tajweed_pronunciation/fa_sayunghidun.mp3": "8cbef2d89c625df0260727b72d6887c1",
"assets/assets/audio_library/tajweed_pronunciation/thomma_latarawoonnaha.mp3": "5802b7e504454e5d81b61e17d276c830",
"assets/assets/audio_library/tajweed_pronunciation/laylate_alqadr_waqfan.mp3": "b2c5cc3607b172f65d3fa0756e7d3bbf",
"assets/assets/audio_library/tajweed_pronunciation/kutubun_qayyimah.mp3": "eac1faffbf2f79a69d4cddde1b504669",
"assets/assets/audio_library/tajweed_pronunciation/amwat.mp3": "149b1faf74479a276f0fe917a2b06344",
"assets/assets/audio_library/tajweed_pronunciation/berab_alnas.mp3": "30fe52d176bff3fcb03899a37d8eb3db",
"assets/assets/audio_library/tajweed_pronunciation/alam_yajal.mp3": "992ad02aa4861cb9d61d155ad3625682",
"assets/assets/audio_library/tajweed_pronunciation/illa_ibtigha_wajh.mp3": "422ecce88ec5d36d5c7fd8e22b948f23",
"assets/assets/audio_library/tajweed_pronunciation/thomma_kalla.mp3": "712441820f210b87cbc2c63eb87c1cb5",
"assets/assets/audio_library/tajweed_pronunciation/fawaylun_lilmusallin.mp3": "5080305f4b49900984108c92dfe3c204",
"assets/assets/audio_library/tajweed_pronunciation/maain_dafiq.mp3": "f6d86d3c66b88233ac156cea4fcdcd31",
"assets/assets/audio_library/tajweed_pronunciation/min_baadi.mp3": "0366ed9a8ba374a41068c8d177d42030",
"assets/assets/audio_library/tajweed_pronunciation/bima_tubsiroon.mp3": "19e8c4a8d79c8e6b45696e7778bf4970",
"assets/assets/audio_library/tajweed_pronunciation/antum.mp3": "e21e0f8113934fb8c64c47b1dd5cf859",
"assets/assets/audio_library/tajweed_pronunciation/alnnafathate.mp3": "dd8481ee3fa9b24aae7bb4ed4f1aeb45",
"assets/assets/audio_library/tajweed_pronunciation/adhabu_alhariq.mp3": "816ee230dd8faa53035119086b7d2b90",
"assets/assets/audio_library/tajweed_pronunciation/ab.mp3": "8d732e95fde15fd034858ddd2e59db10",
"assets/assets/audio_library/tajweed_pronunciation/yawma_ithen_tuhadditho.mp3": "efc79202c41f2c3ecf382b9a66191d16",
"assets/assets/audio_library/tajweed_pronunciation/yawmaidhin_bijahannam.mp3": "cb2dd680f50916892b8525c35813905f",
"assets/assets/audio_library/tajweed_pronunciation/muheet.mp3": "2852a38bf865a5cc62af0cb3f1bdb31d",
"assets/assets/audio_library/tajweed_pronunciation/shaqaqna.mp3": "4d8b7407f16d07dbea174c8ed134492d",
"assets/assets/audio_library/tajweed_pronunciation/amalan_saliha.mp3": "f93feb515efdf3057509f8475491e94e",
"assets/assets/audio_library/tajweed_pronunciation/lahaben_watabb.mp3": "cb92f20d6f9429d138b7fe0910c085ba",
"assets/assets/audio_library/tajweed_pronunciation/wakullan_darabna.mp3": "c6ea118d7981bd09e3594fbf7cddb65b",
"assets/assets/audio_library/tajweed_pronunciation/fatanfaahu.mp3": "d37d94eca9d3b3c54d20ab8bfde7ba67",
"assets/assets/audio_library/tajweed_pronunciation/naran_dhata.mp3": "617127b09e47badc5fbf1de1a813b852",
"assets/assets/audio_library/tajweed_pronunciation/mubarakaten_zaytunah.mp3": "960a6fb5b74a4fe3477a3f7168733309",
"assets/assets/audio_library/tajweed_pronunciation/ibrahima.mp3": "8ae6d9e38a709b80693707cb40be9da1",
"assets/assets/audio_library/tajweed_pronunciation/allahu_assamad.mp3": "41f0c034d5f4ed1f3e3c5abbf33be015",
"assets/assets/audio_library/tajweed_pronunciation/fa_amma_alyateema.mp3": "105b6af37432981f4f057e62072f3d99",
"assets/assets/audio_library/tajweed_pronunciation/min_waq.mp3": "0806726c19039f100f9be13a96d014a4",
"assets/assets/audio_library/tajweed_pronunciation/ma_aabud.mp3": "fa033ed85f4ea49e681b6c36665dd458",
"assets/assets/audio_library/tajweed_pronunciation/mutaain_thamma.mp3": "88376afc11127e88bdad4748d0b7820c",
"assets/assets/audio_library/tajweed_pronunciation/min_alaq.mp3": "b6386d3f246058e4dbe99d2b51aff121",
"assets/assets/audio_library/tajweed_pronunciation/an_tabaq.mp3": "036a926f47e6fad624f4624f06ca96e4",
"assets/assets/audio_library/tajweed_pronunciation/fa_lan_nazidakum.mp3": "5a01eedfe2889e9880eea77ddf1ca7f4",
"assets/assets/audio_library/tajweed_pronunciation/falyanzuri.mp3": "d2d40a8e09a18b1635d84e5383328031",
"assets/assets/audio_library/recitations/tadweer_rast_abdulbaset_alanbyaa.mp3": "0e79483a55f5539ecc490c3202a777a9",
"assets/assets/audio_library/recitations/hadr_moatazAqaai_alqiyamah.mp3": "66177ada808a47b690d51ec4fdb3e16a",
"assets/assets/audio_library/recitations/tadweer_bayat_alminshawi_albaqara.mp3": "5ff6dc1ded35b63f0d33c32ead17a621",
"assets/assets/audio_library/recitations/tarteel_alhusary_almaoon.mp3": "95488ce6961781bfe79bafa3aeab3d0b",
"assets/assets/audio_library/recitations/hadr_moatazAqaai_yosuf.mp3": "860abe3c668d068033024a25c8e967de",
"assets/assets/audio_library/recitations/tadweer_nahawand_alhusary_alshoora.mp3": "d71171ae710b20cbd58f2b58055dc8f4",
"assets/assets/audio_library/recitations/tadweer_hijaz_mustafa_yonus.mp3": "6b18a281095c218496839ed75079934c",
"assets/assets/audio_library/recitations/tarteel_abdulbaset_al_naas_slow.mp3": "3ed856e0e11059c81f43b42a7a3346db",
"assets/assets/audio_library/recitations/tarteel_abdulbaset_al_esraa.mp3": "1d87ece1db62f0106de25c257d9da944",
"assets/assets/audio_library/recitations/tarteel_alminshawi_al_esraa.mp3": "b8eae33579f15b209160eb963c11d78d",
"assets/assets/audio_library/nourania/nourania_15_dhaad_mad_alif.mp3": "780752064547b00812640b7a5d93facc",
"assets/assets/audio_library/nourania/nourania_17_dhaa_mad_yaa.mp3": "60f464922d5126c99ba6cbf182e5f561",
"assets/assets/audio_library/nourania/nourania_15_dhaad_haa_kasra.mp3": "8961c942511bfb53cd743109bfecc029",
"assets/assets/audio_library/nourania/nourania_15_dhaad_mad_waw.mp3": "dea1d4aba5e03857670f92f30fdeb22f",
"assets/assets/audio_library/nourania/nourania_17_dhaa_haraka_fatha.mp3": "485c3c486efabcfb2757ed0ff07f5d36",
"assets/assets/audio_library/nourania/nourania_15_dhaad_haraka_kasra.mp3": "7fb16cccecfd2551af4be3663d9f16b7",
"assets/assets/audio_library/nourania/nourania_17_dhaa_sukun_kasra.mp3": "403ca8dd9ec381af9794c54e110c75c8",
"assets/assets/audio_library/nourania/nourania_15_dhaad_raa_kasra.mp3": "1983a8864a398c94b9f34475c0e7f18a",
"assets/assets/audio_library/nourania/nourania_15_dhaad_taa_fatha.mp3": "064144b6fab36db76fda3dc1c1c00449",
"assets/assets/audio_library/nourania/nourania_15_dhaad_haa_dhamma.mp3": "152edf5a9f521c24f8f4729d1f7c8d60",
"assets/assets/audio_library/nourania/nourania_15_dhaad_sukun_fatha.mp3": "281dab8f2d39eb58e231fe8a95b4bdeb",
"assets/assets/audio_library/nourania/nourania_15_dhaad_haa_fatha.mp3": "bb29cf7199ee05c9e0c02a778350d675",
"assets/assets/audio_library/nourania/nourania_17_dhaa_leen_waw.mp3": "bb7c4e654b8497613ecd0ad7cc9b7db0",
"assets/assets/audio_library/nourania/nourania_17_dhaa_taa_dhamma.mp3": "95f42c06bdd02240a0344477a68bee8c",
"assets/assets/audio_library/nourania/nourania_15_dhaad_leen_yaa.mp3": "31e270c781d9f56cc930673c2954d296",
"assets/assets/audio_library/nourania/nourania_17_dhaa_haraka_kasra.mp3": "9999599d4771c420f9ae67ad2a34fa6d",
"assets/assets/audio_library/nourania/nourania_15_dhaad_haraka_fatha.mp3": "245d3061bf68d8a8fd3a93d410849ed1",
"assets/assets/audio_library/nourania/nourania_17_dhaa_sukun_fatha.mp3": "3703d39bd96ae9c9d9ae379c4fdfc490",
"assets/assets/audio_library/nourania/nourania_15_dhaad_raa_fatha.mp3": "afc8c5897457503e6b39ded20fa4319c",
"assets/assets/audio_library/nourania/nourania_15_dhaad_taa_kasra.mp3": "88600ace8c06d7c8c871db8c2ae83273",
"assets/assets/audio_library/nourania/nourania_17_dhaa_raa_dhamma.mp3": "453674907e1787c859816607f04850be",
"assets/assets/audio_library/nourania/nourania_15_dhaad_sukun_kasra.mp3": "b84e168c110c5dad5effde322ca2946e",
"assets/assets/audio_library/nourania/nourania_17_dhaa_taa_fatha.mp3": "7c3bcf0b842cabe1d02a91316f8b61a5",
"assets/assets/audio_library/nourania/nourania_17_dhaa_tanween_dammatayn.mp3": "edcb0024903f6d54b8536a3fd53d7fb0",
"assets/assets/audio_library/nourania/nourania_17_dhaa_raa_kasra.mp3": "05aed69a59dc59a9a7ce3a7fbdcb03fb",
"assets/assets/audio_library/nourania/nourania_17_dhaa_haraka_dhamma.mp3": "c4c283781c3baf97141a1d120d03c4b0",
"assets/assets/audio_library/nourania/nourania_17_dhaa_haa_dhamma.mp3": "8d121bf5a4e3637cac8166fc944cf07a",
"assets/assets/audio_library/nourania/nourania_17_dhaa_shadda_fatha.mp3": "65f872968bd13ad82c86c55b77dc6864",
"assets/assets/audio_library/nourania/nourania_15_dhaad_shadda_kasra.mp3": "51f2e400c15df3b0aceb512cc7d67c80",
"assets/assets/audio_library/nourania/nourania_15_dhaad_tanween_dammatayn.mp3": "95831dda00d63c79f114cdd00e4206da",
"assets/assets/audio_library/nourania/nourania_17_dhaa_sukun_dhamma.mp3": "e19902a50e2e528a0906be84f4d20721",
"assets/assets/audio_library/nourania/nourania_15_dhaad_leen_waw.mp3": "059b946ca038ab4fec79a2dfb1bc2c28",
"assets/assets/audio_library/nourania/nourania_17_dhaa_haa_kasra.mp3": "09933f92faba8c054dd3f646abf67f43",
"assets/assets/audio_library/nourania/nourania_17_dhaa_shadda_dhamma.mp3": "f6321abdc8f3277c32fc69fca1eb3e62",
"assets/assets/audio_library/nourania/nourania_17_dhaa_leen_yaa.mp3": "a493c7b125721f0c0a5e22a8d30b61c1",
"assets/assets/audio_library/nourania/nourania_17_dhaa_taa_kasra.mp3": "269b884f0cb17e9ed586a4237e924452",
"assets/assets/audio_library/nourania/nourania_17_dhaa_tanween_fathatayn.mp3": "fe972a254465742d27d2a7e7e8a16922",
"assets/assets/audio_library/nourania/nourania_17_dhaa_raa_fatha.mp3": "6d2ba67ac93d061abade68b7a0ad9687",
"assets/assets/audio_library/nourania/nourania_15_dhaad_shadda_dhamma.mp3": "b34d67019b0049e3dc2692bef37c9501",
"assets/assets/audio_library/nourania/nourania_15_dhaad_raa_dhamma.mp3": "8228d948cffd4ff538393e112933f54f",
"assets/assets/audio_library/nourania/nourania_15_dhaad_sukun_dhamma.mp3": "11791aee9eed5ce8753d6463f59ddf4c",
"assets/assets/audio_library/nourania/nourania_17_dhaa_tanween_kasratayn.mp3": "dff183d6ad2290bc96c88dd1be2cce3c",
"assets/assets/audio_library/nourania/nourania_17_dhaa_shadda_kasra.mp3": "75db57ce88acce46f782fb77923c3353",
"assets/assets/audio_library/nourania/nourania_17_dhaa_mad_waw.mp3": "451e2ea2b6cca66d920c38d6d8d3bfbb",
"assets/assets/audio_library/nourania/nourania_15_dhaad_taa_dhamma.mp3": "914cd2016093e66c2f0f6f9ef8b935e4",
"assets/assets/audio_library/nourania/nourania_15_dhaad_tanween_fathatayn.mp3": "7810c6c8b6fb400dccbb62425e4194c5",
"assets/assets/audio_library/nourania/nourania_17_dhaa_mad_alif.mp3": "c34e66f345a31638fee96dfc35e9b69f",
"assets/assets/audio_library/nourania/nourania_15_dhaad_shadda_fatha.mp3": "fc6b959ec32783021729ebbec9f840bf",
"assets/assets/audio_library/nourania/nourania_17_dhaa_haa_fatha.mp3": "ea2c90c7c492b311d31c9f009d62ed85",
"assets/assets/audio_library/nourania/nourania_15_dhaad_haraka_dhamma.mp3": "f975aa8c1b050a8f94a67477c6f78798",
"assets/assets/audio_library/nourania/nourania_15_dhaad_mad_yaa.mp3": "a72ff411ce5030e794f0b165d82738c3",
"assets/assets/audio_library/nourania/nourania_15_dhaad_tanween_kasratayn.mp3": "b4178ec81dcc0227f07be9ea0aa7b390",
"assets/assets/audio_library/special_words/4_quarira_exam.mp3": "a58ab5a25cdc36c8f0a53b4634d84e08",
"assets/assets/audio_library/special_words/2_nahkloqom.mp3": "c1fa25767e83fbd6139de8809b0a81ee",
"assets/assets/audio_library/special_words/34_almosaiteron_exam.mp3": "2e6f78a35beb19e2a5d02dcb2b6503a0",
"assets/assets/audio_library/special_words/2_nahklokom_exercise.mp3": "24b606adf2e89477f2f57426c3a7b416",
"assets/assets/audio_library/special_words/26_aallah_khair_tasheel.mp3": "f5301ccb6ed9beac38a54586935ff6c5",
"assets/assets/audio_library/special_words/4_quarira_first.mp3": "ec14055b2a59a6e17d9ca2337429ae5f",
"assets/assets/audio_library/special_words/29_marqadena_waqf.mp3": "67f1b95e33d1e9980147263af659f927",
"assets/assets/audio_library/special_words/24_ahato_exercise.mp3": "b1cb983cdaaccb94019a3acf5127cb2b",
"assets/assets/audio_library/special_words/15_aalan_6_exercise.mp3": "efa5b42996afc19fad6fb627fe154aab",
"assets/assets/audio_library/special_words/31_aa3jamai_tasheel.mp3": "9b77f39df3fbd61155ad41a76a9e1167",
"assets/assets/audio_library/special_words/19_taamanna_roam.mp3": "b5824a8e6a2f84849f021abd190f98a9",
"assets/assets/audio_library/special_words/32_3ain_seen_qaf_6.mp3": "a07749f14aae77660abdaa274d7f8b52",
"assets/assets/audio_library/special_words/16_aallah_athen_exam.mp3": "f6374d913a941004df41362e5f52ad35",
"assets/assets/audio_library/special_words/11_althakarain_tasheel.mp3": "ca35b2de85a71beb39bdcad7add7a34f",
"assets/assets/audio_library/special_words/19_taamanna_edgham_exercise.mp3": "34a0e1417ba95098cab9a5d928b3929e",
"assets/assets/audio_library/special_words/16_aallah_athen_6.mp3": "aa8731544f9d6e02885d49ff128900b6",
"assets/assets/audio_library/special_words/33_alesm_ebtida_lesm.mp3": "80006e4f943adf0955d762a201096610",
"assets/assets/audio_library/special_words/15_aalan_6.mp3": "23326da84bb3e0fe871ad3d76a1985a4",
"assets/assets/audio_library/special_words/32_3ain_seen_qaf_4.mp3": "f729edda95ea7ac0d3accd3716b3dda1",
"assets/assets/audio_library/special_words/3_salasel_waqf_salasela.mp3": "0856cc9efe83b1f6231266b4fcedfa12",
"assets/assets/audio_library/special_words/19_taamanna_edgham.mp3": "e8276c63ff544f6e28111ee2808fd116",
"assets/assets/audio_library/special_words/26_aallah_khair_exam.mp3": "373da13df54911e23f6ae7ce2fe70bb7",
"assets/assets/audio_library/special_words/9_lam_meem_wasl_6.mp3": "0939400823fcd134654014c445b9f50c",
"assets/assets/audio_library/special_words/14_aleem_braaton_exam.mp3": "713bc9dd852c4845878f62705b832d3d",
"assets/assets/audio_library/special_words/15_aalan_exam.mp3": "d458fa47353a8b6c1eee0d56b841ea33",
"assets/assets/audio_library/special_words/3_salasel_waqf_salasel.mp3": "48f44e41efabee8dddb4e86c77fcc9bb",
"assets/assets/audio_library/special_words/26_aallah_khair_tasheel_exercise.mp3": "5d272b8672036a8466c4859598369862",
"assets/assets/audio_library/special_words/3_salasel_exam.mp3": "52b5e529cbd92fac9006975ab9d3ced4",
"assets/assets/audio_library/special_words/18_ya_bonay.mp3": "9851872f5db09a40f973c18d55603d68",
"assets/assets/audio_library/special_words/33_alesm_wasl.mp3": "39bb923a0f7349d343e9e7ccacc0dec1",
"assets/assets/audio_library/special_words/2_nahklokom.mp3": "57a7ee25b510ed4a6a3fc8556a7ab6cb",
"assets/assets/audio_library/special_words/30_ashab_alaikah_ebtidaa.mp3": "d105f20ea9d06a2850074a251c64f54e",
"assets/assets/audio_library/special_words/22_ferqen_tarqeeq_exercise.mp3": "40abed1ca6aaa16ba57d7b6e7e14848b",
"assets/assets/audio_library/special_words/8_wayabsut_exam.mp3": "088289ab48d1ad19a0c2107760a2c817",
"assets/assets/audio_library/special_words/22_ferqen_tarqeeq.mp3": "2fc4993b621269e8abc3c4a46af48cfa",
"assets/assets/audio_library/special_words/17_majreha.mp3": "174b0fc1579ce261151ffe905638995f",
"assets/assets/audio_library/special_words/19_taamanna_roam_exercise.mp3": "0e20c0d452d4e72c75c44737a2728490",
"assets/assets/audio_library/special_words/22_ferqen_tafkheem_exercise.mp3": "4e2fd17813181eda321765f841ec6b2d",
"assets/assets/audio_library/special_words/16_aallah_athen_tasheel_exercise.mp3": "5d272b8672036a8466c4859598369862",
"assets/assets/audio_library/special_words/1_klla_bl.mp3": "044ff9dd5f910d90902b1af964f57187",
"assets/assets/audio_library/special_words/4_quarira_first_and_second.mp3": "2716ebf3bf08dfefe601ef654c663538",
"assets/assets/audio_library/special_words/23_alaikate_almorsaleen_ebtidaa.mp3": "1eb2392764bf61ff94b1ee11b0c4c14a",
"assets/assets/audio_library/special_words/14_aleem_braaton_wasl.mp3": "e724ed8e4d6123cbb71c16e8c105cb9e",
"assets/assets/audio_library/special_words/20_3ewaja_sakt.mp3": "77ab79a29a62175314cb3d0aa302ba6b",
"assets/assets/audio_library/special_words/6_maliah_sultaniah_sakt.mp3": "2897ff97ce6a1b22923b55a730d38604",
"assets/assets/audio_library/special_words/11_althakarain_exam.mp3": "f468f6666e61a73a99056b9fac44951f",
"assets/assets/audio_library/special_words/14_aleem_braaton_waqf.mp3": "e691e86f405afd02ddff2a7bd6caf686",
"assets/assets/audio_library/special_words/9_lam_meem_wasl_2.mp3": "615c93b6a8d7fff07e9356cc8349a024",
"assets/assets/audio_library/special_words/3_salasel_wasl.mp3": "9e984263e8ade3783861f22351841b8c",
"assets/assets/audio_library/special_words/22_ferqen_tafkheem.mp3": "758e50131771db975cec49f96c3e15a8",
"assets/assets/audio_library/special_words/19_taamanna_exam.mp3": "dbd4d09cbde9529ef3ede346a14ce656",
"assets/assets/audio_library/special_words/15_aalan_tasheel.mp3": "ff53f69295f3efa493165cbee60c6f05",
"assets/assets/audio_library/special_words/33_alesm_exam.mp3": "af890792be6fc41febca146b4847b2bb",
"assets/assets/audio_library/special_words/4_quarira_second_to_end.mp3": "db37e05d6815d55d5b5bc56f6b9ba101",
"assets/assets/audio_library/special_words/10_basata_exercise.mp3": "d191181e746f62159ee90ec84140c278",
"assets/assets/audio_library/special_words/6_maliah_sultaniah_edgham.mp3": "6dd808748c1df77a5f1ff915f257faa9",
"assets/assets/audio_library/special_words/7_noon_walqalam.mp3": "8a3d225bd43f09bde4408f32c38d3ff9",
"assets/assets/audio_library/special_words/17_majreha_exercise.mp3": "4a45bf49307174c19dcdbe57d821c4a2",
"assets/assets/audio_library/special_words/25_atanya_wasl.mp3": "47478486e0473aaedbb8dcfdbd4e1fec",
"assets/assets/audio_library/special_words/11_althakarain_6.mp3": "2812a780b468e81a8befaee778c03502",
"assets/assets/audio_library/special_words/25_atanya_waqf_atany.mp3": "ae1eafda4e1650886e2269686ea5c3c5",
"assets/assets/audio_library/special_words/9_lam_meem_exam.mp3": "876f9685475c5c226da342edb4414712",
"assets/assets/audio_library/special_words/2_nahklokom_exam.mp3": "97089bea1e7488e6cd376a1301297633",
"assets/assets/audio_library/special_words/34_almosaiteron_seen.mp3": "fde608947c2db2ca28fe2625c1036ee7",
"assets/assets/audio_library/special_words/26_aallah_khair_6_exercise.mp3": "552a197641884fb0a0fbe74aac891b9e",
"assets/assets/audio_library/special_words/34_almosaiteron_sad_exercise.mp3": "15d6a81481a54e4e1ac0fb194d3585fe",
"assets/assets/audio_library/special_words/29_marqadena_sakt.mp3": "ca5f0721ae6228d0598ce6324eb84456",
"assets/assets/audio_library/special_words/26_aallah_khair_6.mp3": "9a6cf7d7b118a43f2e450311c7ab7d22",
"assets/assets/audio_library/special_words/9_lam_meem_waqf.mp3": "99b15fc99c74715044a23c3f0dd1076e",
"assets/assets/audio_library/special_words/31_aa3jamai_tasheel_exercise.mp3": "f77444c9c363a8f8dd2750b5164a476e",
"assets/assets/audio_library/special_words/30_ashab_alaikah_exam.mp3": "62a67f53f6312bd3bf1aeaf9a1cfce7f",
"assets/assets/audio_library/special_words/28_ya_seen_wasl.mp3": "52a877c9ad3029db35562dd3af6250dc",
"assets/assets/audio_library/special_words/12_bastah.mp3": "a5c57fa175470b9ef129f27614981228",
"assets/assets/audio_library/special_words/15_aalan_tasheel_exercise.mp3": "a0ce1e7dc2b7117bac2aebad3ee3547b",
"assets/assets/audio_library/special_words/25_atanya_exam.mp3": "1351fb4289f67a770ba01fc2fd724b96",
"assets/assets/audio_library/special_words/25_atanya_waqf_atan.mp3": "7f0f57d640c7b3ac183843ccecd6417d",
"assets/assets/audio_library/special_words/28_ya_seen_waqf.mp3": "e98c44099a2cb22bf728f4d8fc0748e7",
"assets/assets/audio_library/special_words/16_aallah_athen_6_exercise.mp3": "14c05c04992a4e9522883f7f2af60475",
"assets/assets/audio_library/special_words/13_yalhath_edgham.mp3": "887d1831dc130e940dc6b27cb5d0d43e",
"assets/assets/audio_library/special_words/27_dhaaf_dhuma.mp3": "32e3ecfc36165cbb5203ed0323ace48b",
"assets/assets/audio_library/special_words/14_aleem_braaton_sakt.mp3": "37248c1ef83e4da1ab8e4f0521e26146",
"assets/assets/audio_library/special_words/11_althakarain_6_exercise.mp3": "760f3ebac0a40de5a2bd48d6291fb9f3",
"assets/assets/audio_library/special_words/33_alesm_ebtida_alesm.mp3": "3fda0422739ecd83a8457953f0bb7a0b",
"assets/assets/audio_library/special_words/24_ahato_exam.mp3": "a8eab803bc5877a8b443ec0cd1a85dd3",
"assets/assets/audio_library/special_words/10_basata.mp3": "6df97a0393da99dc34a622e4fa55ee33",
"assets/assets/audio_library/special_words/27_dhaaf_exam.mp3": "d693f29abbd411adfbd448a517d654a2",
"assets/assets/audio_library/special_words/22_ferqen_waqf.mp3": "82360a60384b84497ced3ab082ed4c54",
"assets/assets/audio_library/special_words/34_almosaiteron_sad.mp3": "32bb4fa435f2b85257744ff3d4db9e1a",
"assets/assets/audio_library/special_words/16_aallah_athen_tasheel.mp3": "f900f9022b91be781de64aa8f455c567",
"assets/assets/audio_library/special_words/11_althakarain_tasheel_exercise.mp3": "4ce7145c08186b337d4ccc1556beea7f",
"assets/assets/audio_library/special_words/2_nahkloqom_exercise.mp3": "55983af9a5197ec8c17609adf407ad14",
"assets/assets/audio_library/special_words/34_almosaiteron_seen_exercise.mp3": "1ee162b65e015a0c3e41261f8d8abe9b",
"assets/assets/audio_library/special_words/20_3ewaja_waqf.mp3": "175e57627d690e8088a37cd2c616a18b",
"assets/assets/audio_library/special_words/6_maliah_sultaniah_waqf.mp3": "09f1dde09f7ae0621f4da533af2c9819",
"assets/assets/audio_library/special_words/32_3ain_seen_qaf_exam.mp3": "87431b9f58ec6eab800f3fb6abfa5137",
"assets/assets/audio_library/special_words/6_maliah_sultaniah_exam.mp3": "f2cbfa85d10f15d2c0e291e056ee9465",
"assets/assets/audio_library/special_words/21_kafHaYaAinSad_exam.mp3": "0a129610777331812558ad65e396993a",
"assets/assets/audio_library/special_words/21_kafHaYaAinSad_6.mp3": "23fe7706f1fedc793dd869a8875034d1",
"assets/assets/audio_library/special_words/27_dhaaf_fattha.mp3": "f622bfe6d38fcc80d9366316acd89079",
"assets/assets/audio_library/special_words/22_ferqen_exam.mp3": "158afd547238a1d6cde5cb2d4a76fb47",
"assets/assets/audio_library/special_words/21_kafHaYaAinSad_4.mp3": "dfff7819fbbf268cc110a4c221ee7985",
"assets/assets/audio_library/special_words/12_bastah_exercise.mp3": "b9bea1340f209e1795738281fdcb8dcb",
"assets/assets/audio_library/special_words/23_alaikate_almorsaleen_exam.mp3": "641d02e58745398bcc684f957d4d1f81",
"assets/assets/audio_library/special_words/13_yalhath_waqf.mp3": "6e3758dbeefbdd044a84e4170919c8da",
"assets/assets/audio_library/special_words/8_wayabsut_exercise.mp3": "2d437008a363506bb0b95dfbbcadcc9e",
"assets/assets/audio_library/special_words/5_mn_raq.mp3": "2b055efee668c05ba1a80290adf0b0e6",
"assets/assets/sound_effects/result.wav": "3a31a77f3a535e6d620eaf7b0d24ccfd",
"assets/assets/sound_effects/jump.wav": "2c405a25ff2a9c46712886b69435cb4f",
"assets/assets/sound_effects/instant_win.wav": "1ddc3fc0748c21cc4b84a738d6a83154",
"assets/assets/sound_effects/big_win.wav": "0831d581d2789ace24690901067fd2f3",
"assets/assets/sound_effects/click.wav": "feb29173be911eeaa2c1312491acc565",
"assets/assets/sound_effects/wrong_answer2.wav": "8a1b4019034dff1cb614a8b01e33a034",
"assets/assets/sound_effects/wrong_answer3.wav": "b40887310567d33fcba215ff5ed88f98",
"assets/assets/sound_effects/wrong_answer1.wav": "ea7cebd04744a7abf49632c5887fde72",
"assets/assets/fonts/uthmanic_hafs_v20.ttf": "3f345291c97f2eef1e9bb3d946ef3d68",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
