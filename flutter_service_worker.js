'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a32f01150b8a04406ffbd2ee425619d3",
".git/config": "74273928b7b98dc59f5d286f8be60cbe",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bdfe9f30f2fd20adca4bb0d389249ca3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ad2bc7c589231a97d5b0acd00e5c09a5",
".git/logs/refs/heads/master": "f82421ba3d8fedf6f49756bdb75aad5c",
".git/logs/refs/remotes/origin/master": "76fe7bbd02556b36430f61d91ba96617",
".git/objects/00/69d7a4c63f8a26b0cb05350b71293acecea9c3": "1e5565f6ab6bf974758b0744b7cec623",
".git/objects/00/c551b08150ef008cdd290f30852ddc9beff1e8": "63426378c03872b03452e0487630e5f1",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/02/38858e07248d125740adfdd47a8f88b0a31dcd": "f0d5ed2cf1576392839ac2499377c5be",
".git/objects/03/0ba40b379c384cf544732869ded9ab43c70580": "2e7447f1d810f3128651985d865c5cdf",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/798df462c17fdce0da46ea1b98aba21b0aa709": "6d120f4718750f7387ee5735b044c1ec",
".git/objects/05/afb592fe4cd7993c77fea5218d6735a79b80ea": "e568f1f711c18b0b896d6c9a4d7fe66f",
".git/objects/06/1281b4eaf3af6bf730adf2c534abc056114de2": "f97942e1ed164d05c1533ed4c7b05585",
".git/objects/06/8987685135761234fc560ec0b33d23396c050b": "4f1f8a6daef1cdfa10df153fa67c31dd",
".git/objects/06/fcbef4c26a078253cce0c57402921ab01d5762": "0cbdbbc04dcb3d9e790b169f7bad5dbd",
".git/objects/07/1e2d073f95df3704bf4196fedb9b31d749388f": "409b439cd9179a0814a22d6f443d6b96",
".git/objects/07/489b303d9f009f57c36d0e6e3d1dd6ccc06290": "6ef0bb4136e1d744c96d4629da9f406d",
".git/objects/07/91b2b7d1ac76c1ed5162a8a991405d9e917a9b": "0dbcf7fbffafac81cda321ce40b332cf",
".git/objects/0a/94ceec8e14828d47108919154d434b99ac3cc2": "c5977a2c5a6072c5b87995d7180c24d5",
".git/objects/0a/964e77bafab0fc6a31351a27706328696e77a9": "aeddf7743496c2c9f12ac48101f2e0f2",
".git/objects/0b/76fbda2ea7c94d7d02621e4c76706a971fece9": "49216fe14f33d2f508bb0f15851c2188",
".git/objects/0c/53d5f2c2d63fc8c5afaa90fee6d8f89b42858e": "a4df197dfee92e4766082b4d1fa4d631",
".git/objects/0c/b5bdb43f8ac48292988838fa5e12751798894a": "17d7b970fb6fcb16dbe48ac209aa3622",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/8576ac637029927d6279888dec6067c4aedab5": "52682fd8d525e9c16604011b0fc77077",
".git/objects/0e/55b2b55f1a830853e69da9978fa75ff88afcd5": "f51dada66e56deff874908fb8c775f2b",
".git/objects/0e/f90245b5542a6c0e288dd5ca391bc38931db03": "c1ddab286bb07a92d585c703f268a99a",
".git/objects/0f/d2f74b770a96e558f3d5599c848157702d13ee": "2df97ec91bf24670264fef44dea91a47",
".git/objects/12/184b646e57fa0651141246b8d16667065a08e7": "94f06aa11e649c50412cd8d080544516",
".git/objects/12/e72113a494849eefb411d79d0b3cb748e66950": "3a36e3350dcb9fdb6b1fbd969ba166a0",
".git/objects/13/ee3321623f2e702c89cddcc6ed77aa643f7fc7": "469825370dc418af193e9533361107e3",
".git/objects/16/2b7b69ee2ea4a2bbc84127707c2756373ff4c5": "3e56269a80a47d779ea3393135dd3757",
".git/objects/16/54486b035cfcccc4a9b55e63a2ff3f722d7e96": "f8da685f4f8265aaa31ff0557440b6d0",
".git/objects/16/8c69451c15540b3151135c751990f8290fca84": "2c32cf70344cac1b4c4beb5834788c84",
".git/objects/17/681524d7d248deb0be9acd96b3daa8e65747f7": "27ab9370b605dfa7526bfbeadb74f413",
".git/objects/18/0392cb1cf466c8108b8695b49b7d51b9e653a5": "8bfc7f97932d7f2decd57a42d5632e9a",
".git/objects/1a/b56eaf0f787cda4bcdf3cd266826a792746bfc": "fd3412b1b862c42e6da63e001a4a0a9a",
".git/objects/1a/d61a3aab17cfc5952f190a9b1116e2465257ea": "f0b6d6664aa93005cb0e011790598a98",
".git/objects/1b/83d272a8e23f10f6445a268b5960ab46f2f278": "036096707bfdcab0700abc03e0204cce",
".git/objects/1e/96fd4b944c36a8218fc24732fb45529279a515": "f0dec61e26f5142657dfdf74ee59196b",
".git/objects/22/57580e65638d93cae94d07bb6fbffb7c487f39": "6c72fc35718bd194de46c0885140af5f",
".git/objects/23/79901e3342b6fea86f8c2e6d2c1c817edca5d0": "871c810c98e3f4b458dcbc3272469cf4",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/83435d2e1234757a6c8ad693d8e5995fd8e656": "4299ed2ea2c6a478f081c3ba6692a043",
".git/objects/26/fb833c1876ca42c5dda3f7d8a1889f59df73f4": "7d0daf2ac3a3cba91b6071e320c68e36",
".git/objects/27/8c1d2c0df4fc03cffb1ac3fbc08262b9e057d8": "317e7eb8fbc06cced781063bbca7e279",
".git/objects/28/dac5970ad7a158fd71ae71abc78be8388fd5be": "b0f5522af6435b692249a12435101649",
".git/objects/28/f2c0101990fd49690e80125fbbba3b0c513597": "aac9461ff1a5174244eb1c8e7090b4d0",
".git/objects/28/fbd7b03b506724d84bdeb7381bed391bfaba68": "60b5d1563dccceb1006d34c715333c71",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2c/2411a087a28537d931b13f49b09c2d20ddfbae": "eddb6c0e4e4ed915d500999cb2a61a09",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/dc61b4bff1193f8642025712f285502ac24e01": "1aaef4c76edad8364ee0d23c47ae0d45",
".git/objects/2e/7bc8b885dc9206cbbf9bb92dba460aa6f45e33": "95ff3f122dcdd73aff5c3bb300c8681e",
".git/objects/2f/ea4afce0a9e54f17f540c039debbe9a79378f2": "b19889a40e684f4bf479b4bfaeeaa1b5",
".git/objects/32/0b48fb0612a27fcadf14c09b644b4b0d6ea146": "5cff880665a2054ed23320a854fd5958",
".git/objects/33/6e8b07a8b7fdd167b6d82c707b6fab6d135edd": "2ff679a8012fa211baa6c2925ed910ca",
".git/objects/33/97d6d7b89d697d0462f8f5971433a16c9a7288": "3c4aa737404bafa7fbfa35c254e1a52e",
".git/objects/33/ff65af58ab94960da32eabf4ddfb8aa33a92f8": "c7174dad7ebf9c63ee826f85727ccbea",
".git/objects/34/235dd59aec78148f04338a7a19683455f64390": "a31e62f111ddb1792eae28afca0b4039",
".git/objects/36/5abe70d56fa7f199e4a10ca9d3cecae829c556": "5de8b7421db6c09abf62e6ab2e98c5a3",
".git/objects/36/c1d924042c552a78bfc6485b4ebf01ba394d72": "736257b311a90150de851199d786b367",
".git/objects/38/db5f71c40a3686ae33167ec61c5efc5cab4ff4": "e2f83c86f01b9cb31fdb77c40f26edde",
".git/objects/39/66353ce35a6c59181d3502a52729c7bedf4273": "925cad116697b53c96a889ca449a148c",
".git/objects/3b/46842824ba8545f6b317dc32cc87e7a267c185": "4ce1af88d199e5c352dfcae2dffaeeb6",
".git/objects/3b/5e92bed80dae91b93c2f8691f08cec29f042dc": "4dd5ebb38561f5d6c8c7a95d79253cd7",
".git/objects/3d/a3dab3bd8a5707a443f143431ce0ecbf9af0ce": "a882a57bf274e754ced7375e8c72ab8d",
".git/objects/40/509d1da139251e398d012951ced2755a5615a5": "4202b3c14e5997865949d649460f57c3",
".git/objects/40/834d2f68b1b97f336a264daa97aa44578f1ecc": "73ef36f9f6da4961681dd2d566645c52",
".git/objects/42/b4df8a26b695343b8757714daa3578b164deca": "99d9360431b5ae5b8c391a0ac72285eb",
".git/objects/44/3448afe7cbdcb28f5263e0ffc087580c0b15dc": "ae41bfa54975dd706c945a81bbe095f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/41a58d7ce75d9a694b0b385b3e7cce97da1f1f": "6b2a04292750d433eca2cec84c2acffe",
".git/objects/48/ad2158b365ec554d50941903a7ae55f2bddef0": "98094e736f5a1f1ea8daacc754b50c2b",
".git/objects/4a/4e6afb337f1f32f3ee75249f133ad15f3ba280": "2b23487636f1fff65570eefe4cd01019",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/144363270150f29225e6df5fceccbb7b5190eb": "66f8823752d564503af9861423495d93",
".git/objects/4c/485f47fa88628403439bfdedff0648847fc964": "4de1a465d61df666185514f3f14c683f",
".git/objects/4d/458fc106200e3f92e7bef2c59ccb854227c44b": "dc84699a999ccd54e486ce4664a9c38d",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4f/212037de07a90afd71ebc10939ce61d4a6a2c3": "61cf2b34b389ee799c2948690a1c371d",
".git/objects/50/80652c7162eea3b519c376a5b09357bf4138f5": "51fdf369b1c4b6434be97ed0e99d0018",
".git/objects/52/52e3b59a529e55032065dcbe5fcda9191009f4": "7d9edb5cc307aa532cc3feddf84956b7",
".git/objects/54/bb7a0f6501b00e1df8722a126374e7cbc697bd": "8ce90155cc862abefce3322265038657",
".git/objects/57/732619bc4a6e16ad562db70c1b22cd007bad57": "79ffac51dbfa7e33497171cab53cd581",
".git/objects/57/a3a4c10e7d47cdeaae725ceb421fca499f3169": "ed6abe7a5d4d4d8d2f7079b0b3c80915",
".git/objects/58/7e8848c088ea76bbf606796e8d377e03087a7a": "4ecf0aa0a7de317ea134153db0758c1b",
".git/objects/5b/50209d8289315bbe236992971f0ac4e48f04cc": "6e9dc8540ed9d14bd0e5d6d51aa11983",
".git/objects/5b/e8591dc15fe48bef4b67d959d9d7567fa49684": "6b50f173659cb32d4561c228ca3cd3bf",
".git/objects/5c/2f30c9cb446423af285b128deb215f15e203de": "4aa542543bb7a7fbfd6eeab1d3c945cb",
".git/objects/5c/fb156ebb73f5fa00b4d7e15bfbd2467638871e": "e7d11d512f750e551a542dced74e2184",
".git/objects/5f/b8a4bbac840f827e89f0af1c4dd1558f7e02ab": "20591d00a74ce48a986b1437b8b69b57",
".git/objects/5f/bd0c04e47cb7a1a37f1a9d7e7b35ac003b67a3": "2463bf624a0bf2bd66d7801bf37bd520",
".git/objects/5f/d5510f52b66fdf951b5f84e63b986a2e9da489": "23c8dc87cbab4e4673c275ab184f03c3",
".git/objects/61/3c9fadeb464fc17967dd8b1bb57d9f224b1332": "dd370d964780667a525985487f64a3d3",
".git/objects/61/48d2019fae5814acea30421a8d108ed65d15a3": "a6ef0497f73eedaf9e15b0498c4f5b89",
".git/objects/62/75d08de5a9f7cabcadf57e3e752fc972bec785": "9ececb9c10e18657aa705b7c61fd53b2",
".git/objects/62/bbc7aaba20b4db0b2dfd4b45287d0afc7c7828": "33d094a3d4083ad189183a79be7f3e60",
".git/objects/65/045b9d7be1ca9f95f68e3b31717f7af689be59": "8aec4a3a1715e9744ea0b4aa62c598a5",
".git/objects/65/cd9ec9341ac5f71669db8d85684b24fd310328": "428ef0e0edc7cbbe54d0f20cb1c4f59b",
".git/objects/67/e8a0528e8c1ea3e03ea28a598c507db5aa9b8d": "6b604a8a81214d4cfb26020231f60b33",
".git/objects/68/67ed0e6d4a0db19f67ca243d7df55d158cfd47": "f2181f73720d4dd101e574d2bfdd5665",
".git/objects/6a/313cb820c2e1b32a002cce1bb4aae68aecec1b": "80b57e76bcdabce25fe6ba31c2e8d047",
".git/objects/6b/b8dd368ae83b5571aa6a0176e346cac099d4cc": "cf650d0ebc29f622fd13bb353cff4361",
".git/objects/6c/74c70979cd848cbc19057c422ec21e86f646cf": "669e83e20357cca15d9f59ef42aab5b0",
".git/objects/6d/822410a878bdcc5ccbb0f0b7eab5809914a3f0": "6c1ddd7cd12605a90fed5092ef125dd4",
".git/objects/6e/903af97034696910990f8c816d6321a89b0ada": "0d29cf580b30bb82916eb03210329e41",
".git/objects/70/1b6d557f0c73b89e7beec49eadd562cd404881": "9f2b163ef98279cdfff9dff392a5aa09",
".git/objects/71/136918d060fce0fbe0c94d945c9b192e5797c3": "7f84334ea518c772b3c21909134c6980",
".git/objects/73/2524850e63cc41d6e8a93dd8cb42bd5933fcd5": "fcac9905fa6303eb46d01ceca39192e3",
".git/objects/73/842602175764d5599ddb156981e9e112bc31b6": "cd45646b0a772595eb1af829101fe954",
".git/objects/75/9ce388753a436f40b75f574d1377077a7a40ec": "22405202bcf8e16da18d3b49990c9820",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/abcc7f8c641b2e4837651fbba1af229d4189ac": "11b7229226e5ded8ff5b4e43a114324e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/71c32e626e667174028357ffe8474344e7a687": "600db3c5cff6decd2f0b18ec957f01ba",
".git/objects/7b/840ff7b5f18369c69a8bdba4dccc7957b748c7": "27e1dede8ae5ce92d3761df55acbc20a",
".git/objects/7d/f75ddcb91cc831fb02fe2471c186df470cdb3a": "2ec91c10a545b202db58259d9951b98f",
".git/objects/7f/b0d31e4af01f34d0cb6f6142f3225941b1d73d": "503921ec35ad0be89408dca222537e42",
".git/objects/80/b9054745914043ac3e7943ea157e5dea9e6a9c": "1fe7b898bc4300e02f97c454f08202aa",
".git/objects/82/dd0b4b3617ca00d069b39e9b73372ebc564673": "406e361233132fa8dd83d93317d83ecf",
".git/objects/82/f8e683f1e2e79d7a678e793304bc40790ce26e": "497922255ec7f53e520539f3a9011b2c",
".git/objects/83/1b60de3286d1dd8dfde8062d9d41db09d080b4": "663292fe3706d45d6c9496fcf4f330a9",
".git/objects/83/def6cbcd23f6bee04dd63d0150aa958760f651": "a679dbadfdb9ed7fe91a9035380470b5",
".git/objects/83/ebb37903d77055cc68d10ae498ddc8d0575362": "fd926fde01a089975d1ee9567d6616cb",
".git/objects/84/256d90339c68f1ba337365e75c76f826f6ca4f": "12c1a2f3d8c7eecaeed2a995b45524e3",
".git/objects/84/cb78de038f171fdef63575686e2101e5179f49": "3ac4df482580cc8d96bed4db7258b9c4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/912850ae3f32731e9329d62ecb7958ee0cc347": "c893c62753147b9995686965639a4023",
".git/objects/8a/09f054f098e80a3f9871a41a243615b861e133": "6aef01bfb69a2fd9a0baa8eb0e20c01b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3f13515b2bbf853055181a62e0f8a8e81c8abc": "758d59056f69414cbb869988db4f3840",
".git/objects/8e/8cf19a03eb76a196b1e3ddc9aff9c20081fdc8": "b7d336f8a83c4d32591c6600bcb547ff",
".git/objects/8e/b29e39d51005139c9237c472b687d63f1f920e": "8af06991317270345ab7865239cc17a5",
".git/objects/90/82854b6680e0bdf4f2e95355341695b5323835": "9e3245af632bd967d4145d5013e95844",
".git/objects/90/c79c674be6bd2ba1a872e54705b4c6f17016be": "7c8c292dc5a5134d99d35a7df7a6a120",
".git/objects/90/d073f6ee648afe9c3718b443f768d1f7c700ad": "e5691b6bf87b87be705c9f628066af9e",
".git/objects/91/6d203e15dc7e5534b7841651e580a77f85ea0f": "3ffae8aaf25c2025f1d39572161c5cac",
".git/objects/93/b0696f822945a52971eba61c48e5e3ba2af197": "2121cf2e26a011f4d608e5c715f8507f",
".git/objects/94/2f1b631e551b4120630d42f7a0eb694c44a7dd": "ec0cf6a0049d408bf3f8d3cb8f4a5a1b",
".git/objects/95/9e2cc777fc479886425a03cc0a642f9e53d847": "ad29c0e0d731792049f03a5ecfab9b3a",
".git/objects/95/d48397cf1c6c18805b092e3ad8ec6220ec24b8": "44c530e6261711b41f78bb7f7d0a1a8f",
".git/objects/9d/92dd27744d3c471a8759185a9a4d9d21ea027f": "7d48db59ae862a180a516bb7c078ec92",
".git/objects/9d/e48d3c633c6f961629274a5a648cb237ec5418": "84b4205aa3790e16fa7f924ccf142665",
".git/objects/9e/457dbb5f8930039f8dba3b36827e235425219f": "928bc81841ab833fbdc9ee257b41b876",
".git/objects/9e/e5da7ad5c16fd253327e7f88cbb0ec161d2857": "f5223d2579bb8907fe6806b064dbcb24",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/3a863a4f2c4da544c1feb3ca805196708fd172": "742edc7e4c56b40b0d0e89cf64b29fe0",
".git/objects/a3/f59c3f037edbff8c7fde9fe984ad865ead6c5b": "ad2787e64f15d15e8ab7f392d0268f42",
".git/objects/a5/6bd61448de06690d8fe0241acd82eabf76e0eb": "6528f931848a96fc0e909b92f178676b",
".git/objects/a5/8c8ddf4ddde1348acd17a953bc42c13149ad72": "9f7162bbd91fd18d20f358fb0b7b1886",
".git/objects/a5/a306ffca777edaedfaece4a4a86e1f06af0a2e": "4fdf97beefdd9b6dc3e34d1916d10ac3",
".git/objects/a6/4b3dcfc79344f4876ef98a7480386912d57680": "365dc72dbc8402fede7471e601d8d911",
".git/objects/a6/520946d35fd5fc19dff92a2c5445ea4f4fa5b2": "b9ec8289e4e803fc07c919c9fbdc9c6c",
".git/objects/a6/efed14853643072633dad60eb254a8a674d88b": "378469071e3075e6a96649dd948b7aa4",
".git/objects/a7/8b070248c713ec9a2b9c0affdf8cadbcc7790f": "6bf26e3fa89d3ee50891d7df0313adc5",
".git/objects/a8/76ffbd98aaf61fcd20cfe6ce3a8b96a044c39c": "2636040ceda0362dc850e7e6142de07b",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/3853b165cbc71c06df000f1fb5cce373377e0d": "5e7c8816d1f35a76bc6e4b2a0e738a8a",
".git/objects/af/b924f150883034db1ab12bdf44b029f08c108e": "fba9306330e4475cef8e99832aa15e5e",
".git/objects/af/fe8056387e293d6b7da4ca408a2cb996e40425": "481cc1ba36eab9c1057a5b525a578390",
".git/objects/b1/3a5753dc1a741ed0669729dd7f964d31092403": "16bbbd165e35614a2a04b57a6aab13fc",
".git/objects/b1/65ba2d3f44794fd2ad20662babdc3a999d6205": "0bdb721ea7dccf3de030b78b104d71bb",
".git/objects/b1/a11e4991bd326dc02f444bdc4b8dc588d10995": "84785e5428de21c073f8beccfbd7a6a8",
".git/objects/b1/e3e8527644bd57fb3ae815e9611bc6cb56f534": "a34af21a12b89798d9e3317cc35c231e",
".git/objects/b3/4b8f2d11a919816e86000ab047d2025947a5a0": "3efd6059e24dee958b969b2d0ad7097d",
".git/objects/b4/426e3d3751eb7b8b05982ca800bc4f9b6f0c31": "4be17ced2fb147fdd49f6d6cb152414d",
".git/objects/b5/27375df3fb85ee4c8009a6f1ad42a3bf26d3d8": "619fb9f3b19a7f5b2bede7a38fe7d036",
".git/objects/b5/773c8af1920118133adbd049c9a96f9d18ffa2": "31ade5b2b9a4736385067b4dfefa2af0",
".git/objects/b5/8188c83b879dc97620ab388cee250b0f471477": "2ab2ba4c9b92c4f7a8e18b82fec700e3",
".git/objects/b6/4d5bf126a20bb5c2ce862498c4355a84c14418": "2f97007f86810269c970796c5a50e80d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/35b7df386378492479ee19fcf7964c83861b61": "30361a04d9685c9754cfe179fcd1a39a",
".git/objects/b9/12098b7c3c55b940854ce320f25e41ff0b2b45": "e7e09a913a43a8f881a8271b2277752b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8da60d3ee7fcc2c2354858c862759302b09cb9": "7dc60d0ddf2e5557c77ccd4217df33fe",
".git/objects/bb/edc600250d865e86e3d5ed93e9bda60efd56d7": "fe04b862858927857f469c660b94ee38",
".git/objects/bb/fdbab89c06f9679e951c3c4b74e217e3ab892f": "2bc8ed394b55a8c0129e09244c3ebee8",
".git/objects/bd/5cfb658762a75d2012b6f65c01c6fe713f4b4a": "23d400b547d97e69032e287ad787be5a",
".git/objects/be/cb2ca4b2805faa36e58729557fed5599a5db05": "bc5a462c23ba3cd342e368f01e75b2cd",
".git/objects/bf/66c8f08e325ce138caec3f8fc0526ace892a96": "e9eebe9afb3fe2579c53456bb903cd96",
".git/objects/c0/4e595ee13460945629764fded50b80e59cd922": "396ea27f2bf3d9f781028d7e014bd180",
".git/objects/c2/7b88376789f66e047e7b826fba3e34751692a7": "a6b7ba4a14fb831c4c905d6447bcac7c",
".git/objects/c2/ec6c3d989462c4660317e361ed1a04bc95562f": "b4af8801a0716750929cc41f1e4978ea",
".git/objects/c5/11b93ec6a689b802697ff98b9fe9dbbceb6b41": "65644a35569a787ce69faf569ee52e8f",
".git/objects/c6/465eabdd82c80d8c9ef1e229d73a53bec70d06": "c8b0847ea068d42785e1e0c472720327",
".git/objects/c6/61c0c9c61964ead7995a71ef3b6b0f25532562": "74507ab34829934b2ca628e224634ab5",
".git/objects/c6/a7b34d9134882077999c4b8aa4f909cd7b020d": "a8680d07968a98b5a08e998986236b5a",
".git/objects/c7/e41f05eb15845f480e1ce39cf783af77c40952": "e20fcb3c05c4abce471714a38b3ac336",
".git/objects/c8/0765cb95f1a13b33cd5ec34aec60e4624f5963": "3922a73107a91d44906c63b0329a7b5e",
".git/objects/c9/913f93cf63b11ba6d80a7135c37b3729b17297": "5aa674b42210d1d0a588ada4befdd4c6",
".git/objects/cb/68235b5611f8bb22914773693a55ddb7743546": "d9556638d055ffcf7357bb0275cc8bec",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/cc0740f2f60de7ce135699c80a9b63e550b356": "c3d671870fb85db4e58bc1e38efe1ce1",
".git/objects/ce/79337d24a70eb8c0d975c50b4ca6092ca3ba0b": "33da0d9a9ae379624bb0e71f1fed89f2",
".git/objects/ce/c4a7be8d5826f8f349c679c21a2b6b91fdac6d": "f500efe4f8974ae65a937b0297c7930e",
".git/objects/ce/e025c8c727285ddb23fda5f6f6c23d8a0de452": "03da4a933e2abe6e594a67c54a6d8cb6",
".git/objects/cf/0321c41ef1d2aa4c4c65839b23514b043620bd": "4e338fe08096627dc700d4721adffc0f",
".git/objects/d0/250f65de5159ca42b40ba156f62939a0c2dccd": "dc8333d3e5031dee7bd22099400e24ee",
".git/objects/d0/2de68567bb7b35c8b7dd9d131e9191850363bb": "5e50588661c4d820b9a67c0f1812d5be",
".git/objects/d1/293de04e55b8a4816af49e7204f9c58b561a02": "82856008f8c1e15104b2cff93ef9d0bf",
".git/objects/d1/c7c8ebcfe5be1286655c4343276caff7628c09": "2dd3fa2008fedd5485804318813bf64f",
".git/objects/d3/5f7d7b1dfd4fde8aa6f8979552626f5ac6362d": "6e0f828e41d284fc1ffb34e36ee57353",
".git/objects/d3/61ae03ee44fb88f24915f1d11d6936d17f3b86": "54d0fdfdbb097301958b53726c74194f",
".git/objects/d3/b11638a4d491ca7df87abb0408f9f6152bf62a": "9f66932f8b98d5a90bea2b69c5da028d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/8e0b4dd5b44cf6466a98f21fd514553b9add53": "7631a467458e58460cef37776b13fc07",
".git/objects/d9/4331da2bc6e1e71d9b9ec84d1acf80f5170528": "88253677dcedddef17a27702c11c27b0",
".git/objects/da/ffb754158c5a4bb6ea2a85ad9da9446fff56a4": "c1821e3a9aed6ef981f0670eb97f93b2",
".git/objects/db/125c306c6b2352d440a0d216276c2dc77b1e96": "7c3b5da22447803222ef21a46de34776",
".git/objects/db/85f8b175420cdeb316f73d16a274c3772a9796": "1a12b2e939621c8403e87605da2c53aa",
".git/objects/dd/435ecf21e82f55664fd39d4a52bc58263d1775": "70d39f93f283c726cd6ce580497a4b06",
".git/objects/dd/5edb1a7e46855a8138b7028913a7aed7e07a26": "15779bbfbf84adb4b688dcd6964caa7f",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e1/e28e1913a381edcf426f4c5c7db007452d4cb3": "a04faa8d49b70c7530adbc7aed969ca3",
".git/objects/e2/65d5f308cd9887149e6f8d3ab8348d35852077": "4021969ff8563b7c4afae8b694ae2c8b",
".git/objects/e3/49a9ecfbe684f746daa7dee1e78f6eb1845221": "a48af44a9ee6ca0f61180c03528df04e",
".git/objects/e3/4f1d22b0de528b722376f6656301f08996e67d": "476ff15a3b9ad8d9ecbd6bed19590519",
".git/objects/e3/771ff3aa64dda63c9e14de55aaf7df2d389613": "7ce7ec9665bc3a7510f4c1b41c2deb06",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/ea0e9f22f2c473d505efcfe53faac5f3663346": "c9091136d6c3fddb896e296a8100da54",
".git/objects/e6/f3b04afcc0930719fbce41d632b975dc388f82": "6973b02c706a5b9685f9a80eb43f0d0b",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ea/509b841583d896d2b98070da99206e84aac895": "bead15c3a1054ec847a8c501c429283a",
".git/objects/ea/957da8cdbc4d6983ef46dbe3cb6fcfaa5950e0": "d87f170e10093ed4b9994dab9c5fb354",
".git/objects/eb/62d1c143ce96ab56e86f15bc299c95abf74fc4": "0d09c208c57fe4b893dc9a1efabc258d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/e8fd1d889d96d27b484f38834fad2a5fcc8441": "d62eaa02703cedfe8f275477162cfb01",
".git/objects/ec/cc36ad8c478136f372a9c98ad67efa741f083e": "8fd92cfe7667edff987b4a7b0381dba8",
".git/objects/f2/ad40ffcb64c7c7d5ba118c79563003efcaf097": "31fb67c35bb327a86ebf34e6da444e28",
".git/objects/f4/65d027c8d31efbf8d014f43ae146c1b7e93423": "efb0acc2189d5b47a45a5315bdd98b8f",
".git/objects/f6/dd0c0483c8ad21aa1866fd8303f2b5481bb0c5": "0ca7fe568467d1e7e3a205f05497dfd8",
".git/objects/f7/6af406ffc3f799e8977e4ac062717718b69193": "b93b654510ff55df4409f03eb8a49a5b",
".git/objects/f7/82efec68e5a7d9b3b8dbade26f2f69fea174cf": "9e986337489763da31d49871e0f6d75e",
".git/objects/fc/b82e09109e0920a3c5033993d63f29b63a0f40": "640c6904aa8a2fd3ef781c4095763897",
".git/objects/fd/437bbbeadf8d6876f31aa4b2d36a9f17098479": "d2ff32d22fa7d3263ea3d33eaebbff9b",
".git/objects/ff/528a6a78ac830fb8196b17083cdfd401d5105c": "b3bad274cfde1f14303d680019e1d64f",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/master": "8cbda8cbb8e74ddb4cac4e6fffdee763",
".git/refs/remotes/origin/dev": "62a9eb5d0d8ae7da782ab9b797730e88",
".git/refs/remotes/origin/master": "8cbda8cbb8e74ddb4cac4e6fffdee763",
"assets/AssetManifest.json": "94ea9ce8ea71e2c14576c01737f53414",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/AR%2520Logo.png": "6ca0159ab97471b97a43448afa1e527e",
"assets/images/Asutosh%2520Ranjan.png": "0ed45aee32406dff4eff8e1ce816c4f6",
"assets/images/catwalk.gif": "f339afd6cae98b4b926621f9aadc514b",
"assets/images/ClassSchedule.jpg": "dda1ce6423600c3ba1d460f970796436",
"assets/images/DSCLogo.png": "62b95c13e70bf417712b2276e2ce1c7e",
"assets/images/email.png": "8ac3b5d4477a35d7c4e9f75fc077358d",
"assets/images/flutterlogo.png": "46f05a8a2780c74fb685b7a35505cf0c",
"assets/images/IIITDLogo.png": "08e5baf40c02e9d8aca646ea75c531fe",
"assets/images/main.gif": "3c27c2b7005134c9d2a0bb7d8906dfbb",
"assets/images/MMLogo.png": "a9620878807b1fb5571018fa0255ad75",
"assets/images/project1.png": "62957443e886c9b374637949539abbda",
"assets/images/project2.png": "2c50cf7ef25ccf5a78196a9d73a94cd0",
"assets/images/projectPegasus.jpg": "16080ecc0bc382ea3ad1c4d7a2230c47",
"assets/images/red-heart.png": "007a954fed4227314756d2fee5a8ab62",
"assets/loading%20white.gif": "85619082f8fd42ac41c391c47a98a02c",
"assets/NOTICES": "fd94d2a2e880cc7ce1f398552a1ce909",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "e9f2f143310604845f8aa26c42ad5f55",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "cee907708df30c6d9af56899daa44898",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "c13072304f5a4be25990665db802ba6c",
"icons/Icon-512.png": "6c8b1136949efc6c71be921698397a6c",
"icons/Icon-maskable-192.png": "3d94b7f85dde3a45d14293ea4f2f57ce",
"icons/Icon-maskable-512.png": "f5f9ad51603a60aff647a9b662ecd3d2",
"index.html": "27bcf5d58c576f2320cb6f452c82b217",
"/": "27bcf5d58c576f2320cb6f452c82b217",
"main.dart.js": "3d82ee18ffa369327c742bd741fa10bf",
"manifest.json": "a01d5d4e50a3c42d29081efa252a3277",
"version.json": "03acefc4795e8573b194262cd3a4419f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
