const cities = {
  "01": {
    name: "Adana",
    image: "https://via.placeholder.com/400x200",
    location: "Akdeniz",
    population: "2.2M",
    highlights: ["Taşköprü", "Adana Merkez Parkı", "Sabancı Merkez Camii"]
  },
  "02": {
    name: "Adıyaman",
    image: "https://via.placeholder.com/400x200",
    location: "Güneydoğu Anadolu",
    population: "626K",
    highlights: ["Nemrut Dağı", "Cendere Köprüsü", "Perre Antik Kenti"]
  },
  "03": {
    name: "Afyonkarahisar",
    image: "https://via.placeholder.com/400x200",
    location: "Ege",
    population: "736K",
    highlights: ["Afyon Kalesi", "Frig Vadisi", "İscehisar Peri Bacaları"]
  },
  "04": {
    name: "Ağrı",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Great_Ararat.jpg/1599px-Great_Ararat.jpg",
    location: "Doğu Anadolu",
    population: "539K",
    highlights: ["İshak Paşa Sarayı", "Ağrı Dağı", "Doğubayazıt Kalesi"]
  },
  "05": {
    name: "Amasya",
    image: "https://via.placeholder.com/400x200",
    location: "Karadeniz",
    population: "337K",
    highlights: ["Kral Kaya Mezarları", "Amasya Kalesi", "Ferhat Su Kanalı"]
  },
  "06": {
    name: "Ankara",
    image: "https://via.placeholder.com/400x200",
    location: "İç Anadolu",
    population: "5.5M",
    highlights: ["Anıtkabir", "Kocatepe Camii", "Atatürk Orman Çiftliği"]
  },
  "07": {
    name: "Antalya",
    image: "https://via.placeholder.com/400x200",
    location: "Akdeniz",
    population: "2.5M",
    highlights: ["Konyaaltı Plajı", "Aspendos Tiyatrosu", "Kaleiçi"]
  },
  "08": {
    name: "Artvin",
    image: "https://via.placeholder.com/400x200",
    location: "Karadeniz",
    population: "169K",
    highlights: ["Karagöl Sahara Milli Parkı", "Macahel", "Artvin Kalesi"]
  },
  "09": {
    name: "Aydın",
    image: "https://via.placeholder.com/400x200",
    location: "Ege",
    population: "1.1M",
    highlights: ["Kuşadası", "Didim", "Aphrodisias"]
  },
  "10": {
    name: "Balıkesir",
    image: "https://via.placeholder.com/400x200",
    location: "Marmara",
    population: "1.2M",
    highlights: ["Cunda Adası", "Kazdağı Milli Parkı", "Ayvalık"]
  },
  "11": {
    name: "Bilecik",
    image: "https://via.placeholder.com/400x200",
    location: "Marmara",
    population: "223K",
    highlights: ["Söğüt", "Şeyh Edebali Türbesi", "Osmanlı Padişahları Tarih Şeridi"]
  },
  "12": {
    name: "Bingöl",
    image: "https://via.placeholder.com/400x200",
    location: "Doğu Anadolu",
    population: "281K",
    highlights: ["Yüzen Adalar", "Bingöl Kayak Merkezi", "Zağ Mağarası"]
  },
  "13": {
    name: "Bitlis",
    image: "https://via.placeholder.com/400x200",
    location: "Doğu Anadolu",
    population: "349K",
    highlights: ["Nemrut Krater Gölü", "Bitlis Kalesi", "Ahlat Selçuklu Mezarlığı"]
  },
  "14": {
    name: "Bolu",
    image: "https://via.placeholder.com/400x200",
    location: "Karadeniz",
    population: "316K",
    highlights: ["Abant Gölü", "Yedigöller Milli Parkı", "Kartalkaya Kayak Merkezi"]
  },
  "15": {
    name: "Burdur",
    image: "https://via.placeholder.com/400x200",
    location: "Akdeniz",
    population: "264K",
    highlights: ["Salda Gölü", "Sagalassos Antik Kenti", "Burdur Müzesi"]
  },
  "16": {
    name: "Bursa",
    image: "https://via.placeholder.com/400x200",
    location: "Marmara",
    population: "3.1M",
    highlights: ["Uludağ", "Yeşil Türbe", "Cumalıkızık"]
  },
  "17": {
    name: "Çanakkale",
    image: "https://via.placeholder.com/400x200",
    location: "Marmara",
    population: "540K",
    highlights: ["Truva Antik Kenti", "Gelibolu Yarımadası", "Assos"]
  },
  "18": {
    name: "Çankırı",
    image: "https://via.placeholder.com/400x200",
    location: "İç Anadolu",
    population: "183K",
    highlights: ["Çankırı Kalesi", "Tuz Mağarası", "Ilgaz Dağı Milli Parkı"]
  },
  "19": {
    name: "Çorum",
    image: "https://via.placeholder.com/400x200",
    location: "Karadeniz",
    population: "536K",
    highlights: ["Hattuşaş", "Alacahöyük", "Çorum Kalesi"]
  },
  "20": {
    name: "Denizli",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/26/Pamukkale_12.jpg",
    location: "Ege",
    population: "1M",
    highlights: ["Pamukkale", "Hierapolis", "Laodikeia"]
  },
  "20": {
    name: "Denizli",
    image: "https://via.placeholder.com/400x200",
    location: "Ege",
    population: "1M",
    highlights: ["Pamukkale", "Hierapolis", "Laodikeia"]
  },
  "21": {
    name: "Diyarbakır",
    image: "https://via.placeholder.com/400x200",
    location: "Güneydoğu Anadolu",
    population: "1.7M",
    highlights: ["Diyarbakır Surları", "Hevsel Bahçeleri", "On Gözlü Köprü"]
  },
  "22": {
    name: "Edirne",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Edirne_7333_Nevit.JPG",
    location: "Marmara",
    population: "407K",
    highlights: ["Selimiye Camii", "Edirne Sarayı", "Karaağaç"]
  },
  "23": {
    name: "Elazığ",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Minarett_Ulu_Camii_Harput.jpg/800px-Minarett_Ulu_Camii_Harput.jpg",
    location: "Doğu Anadolu",
    population: "587K",
    highlights: ["Harput Kalesi", "Hazar Gölü", "Buzluk Mağarası"]
  },
  "24": {
    name: "Erzincan",
    image: "https://via.placeholder.com/400x200",
    location: "Doğu Anadolu",
    population: "234K",
    highlights: ["Erzincan Kalesi", "Girlevik Şelalesi", "Mama Hatun Türbesi"]
  },
  "25": {
    name: "Erzurum",
    image: "https://via.placeholder.com/400x200",
    location: "Doğu Anadolu",
    population: "762K",
    highlights: ["Palandöken Kayak Merkezi", "Çifte Minareli Medrese", "Yakutiye Medresesi"]
  },
  "26": {
    name: "Eskişehir",
    image: "https://via.placeholder.com/400x200",
    location: "İç Anadolu",
    population: "888K",
    highlights: ["Odunpazarı Evleri", "Porsuk Çayı", "Sazova Parkı"]
  },
  "27": {
    name: "Gaziantep",
    image: "https://via.placeholder.com/400x200",
    location: "Güneydoğu Anadolu",
    population: "2M",
    highlights: ["Zeugma Mozaik Müzesi", "Gaziantep Kalesi", "Bakırcılar Çarşısı"]
  },
  "28": {
    name: "Giresun",
    image: "https://via.placeholder.com/400x200",
    location: "Karadeniz",
    population: "448K",
    highlights: ["Giresun Kalesi", "Giresun Adası", "Kuzalan Şelalesi"]
  },
  "29": {
    name: "Gümüşhane",
    image: "https://via.placeholder.com/400x200",
    location: "Karadeniz",
    population: "162K",
    highlights: ["Karaca Mağarası", "Santa Harabeleri", "Tomara Şelalesi"]
  },
  "30": {
    name: "Hakkari",
    image: "https://via.placeholder.com/400x200",
    location: "Doğu Anadolu",
    population: "278K",
    highlights: ["Cilo Dağı", "Sat Buzul Gölleri", "Mergabütan Kayak Merkezi"]
  },
  "31": {
    name: "Hatay",
    image: "https://via.placeholder.com/400x200",
    location: "Akdeniz",
    population: "1.6M",
    highlights: ["Antakya Arkeoloji Müzesi", "St. Pierre Kilisesi", "Harbiye Şelaleleri"]
  },
  "32": {
    name: "Isparta",
    image: "https://via.placeholder.com/400x200",
    location: "Akdeniz",
    population: "444K",
    highlights: ["Eğirdir Gölü", "Gölcük Krater Gölü", "Davraz Kayak Merkezi"]
  },
  "33": {
    name: "Mersin",
    image: "https://via.placeholder.com/400x200",
    location: "Akdeniz",
    population: "1.8M",
    highlights: ["Kızkalesi", "Cennet ve Cehennem Mağaraları", "Mersin Marina"]
  },
  "34": {
    name: "İstanbul",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Bosphorus_Bridge%2C_Istanboul.jpg/1600px-Bosphorus_Bridge%2C_Istanboul.jpg",
    location: "Avrupa & Asya",
    population: "15M",
    highlights: ["Ayasofya", "Sultanahmet Camii", "Topkapı Sarayı"]
  },
  "35": {
    name: "İzmir",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Izmir_coast.jpg",
    location: "Ege",
    population: "4.3M",
    highlights: ["Efes", "Saat Kulesi", "Kemeraltı Çarşısı"]
  },
  "36": {
    name: "Kars",
    image: "https://via.placeholder.com/400x200",
    location: "Doğu Anadolu",
    population: "285K",
    highlights: ["Ani Harabeleri", "Kars Kalesi", "Çıldır Gölü"]
  },
  "37": {
    name: "Kastamonu",
    image: "https://via.placeholder.com/400x200",
    location: "Karadeniz",
    population: "383K",
    highlights: ["Kastamonu Kalesi", "İsmail Bey Külliyesi", "Ilgaz Dağı Milli Parkı"]
  },
  "38": {
    name: "Kayseri",
    image: "https://via.placeholder.com/400x200",
    location: "İç Anadolu",
    population: "1.4M",
    highlights: ["Erciyes Kayak Merkezi", "Kapuzbaşı Şelalesi", "Hunat Hatun Külliyesi"]
  },
  "39": {
    name: "Kırklareli",
    image: "https://via.placeholder.com/400x200",
    location: "Marmara",
    population: "361K",
    highlights: ["Dupnisa Mağarası", "Kırklareli Müzesi", "Aya Nikola Manastırı"]
  },
  "40": {
    name: "Kırşehir",
    image: "https://via.placeholder.com/400x200",
    location: "İç Anadolu",
    population: "242K",
    highlights: ["Cacabey Medresesi", "Kuşdili Parkı", "Kalehöyük Arkeoloji Müzesi"]
  },
  "40": {
    name: "Kırşehir",
    image: "https://via.placeholder.com/400x200",
    location: "İç Anadolu",
    population: "242K",
    highlights: ["Cacabey Medresesi", "Kuşdili Parkı", "Kalehöyük Arkeoloji Müzesi"]
  },
  "41": {
    name: "Kocaeli",
    image: "https://via.placeholder.com/400x200",
    location: "Marmara",
    population: "1.9M",
    highlights: ["İzmit Saat Kulesi", "Kartepe", "Osman Hamdi Bey Müzesi"]
  },
  "42": {
    name: "Konya",
    image: "https://via.placeholder.com/400x200",
    location: "İç Anadolu",
    population: "2.2M",
    highlights: ["Mevlana Müzesi", "Alaaddin Tepesi", "Sille Köyü"]
  },
  "43": {
    name: "Kütahya",
    image: "https://via.placeholder.com/400x200",
    location: "Ege",
    population: "578K",
    highlights: ["Kütahya Kalesi", "Frig Vadisi", "Aizonai Antik Kenti"]
  },
  "44": {
    name: "Malatya",
    image: "https://via.placeholder.com/400x200",
    location: "Doğu Anadolu",
    population: "800K",
    highlights: ["Nemrut Dağı", "Malatya Müzesi", "Battalgazi Ulu Camii"]
  },
  "45": {
    name: "Manisa",
    image: "https://via.placeholder.com/400x200",
    location: "Ege",
    population: "1.4M",
    highlights: ["Spil Dağı Milli Parkı", "Manisa Tarzanı Anıtı", "Akhisar Müzesi"]
  },
  "46": {
    name: "Kahramanmaraş",
    image: "https://via.placeholder.com/400x200",
    location: "Akdeniz",
    population: "1.1M",
    highlights: ["Kahramanmaraş Kalesi", "Eshab-ı Kehf Külliyesi", "Maraş Dondurması"]
  },
  "47": {
    name: "Mardin",
    image: "https://via.placeholder.com/400x200",
    location: "Güneydoğu Anadolu",
    population: "854K",
    highlights: ["Mardin Evleri", "Zinciriye Medresesi", "Midyat"]
  },
  "48": {
    name: "Muğla",
    image: "https://via.placeholder.com/400x200",
    location: "Ege",
    population: "1M",
    highlights: ["Bodrum Kalesi", "Ölüdeniz", "Saklıkent Kanyonu"]
  },
  "49": {
    name: "Muş",
    image: "https://via.placeholder.com/400x200",
    location: "Doğu Anadolu",
    population: "411K",
    highlights: ["Muş Kalesi", "Muradiye Camii", "Arak Manastırı"]
  },
  "50": {
    name: "Nevşehir",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Cappadocia_Chimneys_Wikimedia_Commons.jpg/1600px-Cappadocia_Chimneys_Wikimedia_Commons.jpg",
    location: "İç Anadolu",
    population: "298K",
    highlights: ["Göreme Milli Parkı", "Ürgüp", "Derinkuyu Yeraltı Şehri"]
  },
  "51": {
    name: "Niğde",
    image: "https://via.placeholder.com/400x200",
    location: "İç Anadolu",
    population: "362K",
    highlights: ["Niğde Kalesi", "Tyana Su Kemerleri", "Gümüşler Manastırı"]
  },
  "52": {
    name: "Ordu",
    image: "https://via.placeholder.com/400x200",
    location: "Karadeniz",
    population: "761K",
    highlights: ["Boztepe", "Yason Burnu", "Perşembe Yaylası"]
  },
  "53": {
    name: "Rize",
    image: "https://via.placeholder.com/400x200",
    location: "Karadeniz",
    population: "348K",
    highlights: ["Ayder Yaylası", "Zilkale", "Rize Kalesi"]
  },
  "54": {
    name: "Sakarya",
    image: "https://via.placeholder.com/400x200",
    location: "Marmara",
    population: "1M",
    highlights: ["Sapanca Gölü", "Taraklı", "Acarlar Longozu"]
  },
  "55": {
    name: "Samsun",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Onur_An%C4%B1t%C4%B1.JPG/1600px-Onur_An%C4%B1t%C4%B1.JPG",
    location: "Karadeniz",
    population: "1.3M",
    highlights: ["Bandırma Vapuru", "Amisos Tepesi", "Amazon Köyü"]
  },
  "56": {
    name: "Siirt",
    image: "https://via.placeholder.com/400x200",
    location: "Güneydoğu Anadolu",
    population: "331K",
    highlights: ["Veysel Karani Türbesi", "Siirt Ulu Camii", "Botan Vadisi"]
  },
  "57": {
    name: "Sinop",
    image: "https://via.placeholder.com/400x200",
    location: "Karadeniz",
    population: "219K",
    highlights: ["Sinop Kalesi", "Hamsilos Koyu", "Tarihi Sinop Cezaevi"]
  },
  "58": {
    name: "Sivas",
    image: "https://via.placeholder.com/400x200",
    location: "İç Anadolu",
    population: "635K",
    highlights: ["Divriği Ulu Camii", "Gök Medrese", "Sivas Kongre Binası"]
  },
  "59": {
    name: "Tekirdağ",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Kumbag_Tekirdag_2010.jpg/250px-Kumbag_Tekirdag_2010.jpg",
    location: "Marmara",
    population: "1.1M",
    highlights: ["Rüstem Paşa Külliyesi", "Tekirdağ Şarapları", "Uçmakdere"]
  },
  "60": {
    name: "Tokat",
    image: "https://tokat.gov.tr/kurumlar/tokat.gov.tr/Genel/Dokumanlar/2022/Haziran(2)/Tokat-Kalesi.jpg",
    location: "Karadeniz",
    population: "612K",
    highlights: ["Ballıca Mağarası", "Tokat Kalesi", "Sulusaray Antik Kenti"]
  },
  "60": {
    name: "Tokat",
    image: "https://via.placeholder.com/400x200",
    location: "Karadeniz",
    population: "612K",
    highlights: ["Ballıca Mağarası", "Tokat Kalesi", "Sulusaray Antik Kenti"]
  },
  "61": {
    name: "Trabzon",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Uzung%C3%B6l_lake_and_town.jpg/1599px-Uzung%C3%B6l_lake_and_town.jpg",
    location: "Karadeniz",
    population: "807K",
    highlights: ["Sümela Manastırı", "Trabzon Ayasofya Müzesi", "Uzungöl"]
  },
  "62": {
    name: "Tunceli",
    image: "https://via.placeholder.com/400x200",
    location: "Doğu Anadolu",
    population: "84K",
    highlights: ["Munzur Vadisi Milli Parkı", "Ovacık", "Tunceli Müzesi"]
  },
  "63": {
    name: "Şanlıurfa",
    image: "https://via.placeholder.com/400x200",
    location: "Güneydoğu Anadolu",
    population: "2M",
    highlights: ["Balıklıgöl", "Göbeklitepe", "Harran"]
  },
  "64": {
    name: "Uşak",
    image: "https://via.placeholder.com/400x200",
    location: "Ege",
    population: "369K",
    highlights: ["Ulubey Kanyonu", "Blaundus Antik Kenti", "Uşak Arkeoloji Müzesi"]
  },
  "65": {
    name: "Van",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/37/Akhtamar_Island_on_Lake_Van_with_the_Armenian_Cathedral_of_the_Holy_Cross.jpg",
    location: "Doğu Anadolu",
    population: "1.1M",
    highlights: ["Van Gölü", "Akdamar Adası", "Van Kalesi"]
  },
  "66": {
    name: "Yozgat",
    image: "https://via.placeholder.com/400x200",
    location: "İç Anadolu",
    population: "421K",
    highlights: ["Çamlık Milli Parkı", "Yozgat Saat Kulesi", "Kerkenes Harabeleri"]
  },
  "67": {
    name: "Zonguldak",
    image: "https://via.placeholder.com/400x200",
    location: "Karadeniz",
    population: "598K",
    highlights: ["Ereğli", "Gökgöl Mağarası", "Kozlu"]
  },
  "68": {
    name: "Aksaray",
    image: "https://via.placeholder.com/400x200",
    location: "İç Anadolu",
    population: "416K",
    highlights: ["Ihlara Vadisi", "Saratlı Kırkgöz Yeraltı Şehri", "Aksaray Müzesi"]
  },
  "69": {
    name: "Bayburt",
    image: "https://via.placeholder.com/400x200",
    location: "Karadeniz",
    population: "82K",
    highlights: ["Bayburt Kalesi", "Aydıntepe Yeraltı Şehri", "Baksı Müzesi"]
  },
  "70": {
    name: "Karaman",
    image: "https://via.placeholder.com/400x200",
    location: "İç Anadolu",
    population: "254K",
    highlights: ["Karaman Kalesi", "Binbir Kilise", "Manazan Mağaraları"]
  },
  "71": {
    name: "Kırıkkale",
    image: "https://via.placeholder.com/400x200",
    location: "İç Anadolu",
    population: "278K",
    highlights: ["Silah Sanayi Müzesi", "Celal Bayar Parkı", "Çeşnigir Köprüsü"]
  },
  "72": {
    name: "Batman",
    image: "https://via.placeholder.com/400x200",
    location: "Güneydoğu Anadolu",
    population: "620K",
    highlights: ["Hasankeyf", "Malabadi Köprüsü", "Memikan Köprüsü"]
  },
  "73": {
    name: "Şırnak",
    image: "https://via.placeholder.com/400x200",
    location: "Güneydoğu Anadolu",
    population: "529K",
    highlights: ["Cizre Ulu Camii", "Kasrik Boğazı", "Şah Köprüsü"]
  },
  "74": {
    name: "Bartın",
    image: "https://via.placeholder.com/400x200",
    location: "Karadeniz",
    population: "198K",
    highlights: ["Amasra", "Küre Dağları Milli Parkı", "Bartın Kalesi"]
  },
  "75": {
    name: "Ardahan",
    image: "https://via.placeholder.com/400x200",
    location: "Doğu Anadolu",
    population: "96K",
    highlights: ["Çıldır Gölü", "Ardahan Kalesi", "Yalnızçam Yaylası"]
  },
  "76": {
    name: "Iğdır",
    image: "https://via.placeholder.com/400x200",
    location: "Doğu Anadolu",
    population: "199K",
    highlights: ["Iğdır Ovası", "Meteor Çukuru", "Karasu Çayı"]
  },
  "77": {
    name: "Yalova",
    image: "https://via.placeholder.com/400x200",
    location: "Marmara",
    population: "276K",
    highlights: ["Yalova Termal Kaplıcaları", "Yürüyen Köşk", "Çınarcık"]
  },
  "78": {
    name: "Karabük",
    image: "https://via.placeholder.com/400x200",
    location: "Karadeniz",
    population: "243K",
    highlights: ["Safranbolu", "Yenice Ormanları", "Karabük Demir Çelik Fabrikası"]
  },
  "79": {
    name: "Kilis",
    image: "https://via.placeholder.com/400x200",
    location: "Güneydoğu Anadolu",
    population: "142K",
    highlights: ["Oylum Höyük", "Ravanda Kalesi", "Şeyh Hilal Camii"]
  },
  "80": {
    name: "Osmaniye",
    image: "https://via.placeholder.com/400x200",
    location: "Akdeniz",
    population: "538K",
    highlights: ["Karatepe Aslantaş", "Toprakkale Kalesi", "Ala Cami"]
  },
  "81": {
    name: "Düzce",
    image: "https://via.placeholder.com/400x200",
    location: "Karadeniz",
    population: "392K",
    highlights: ["Güzeldere Şelalesi", "Samandere Şelalesi", "Efteni Gölü"]
  }

};
