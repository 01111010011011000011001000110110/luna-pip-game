window.STORY = {
  startNodeId: "start_1",
  defaultState: {
    warmth: 0,
    trust: 0,
    memory: 0,
    boundary: 0,
    repair: 0,
    patience: 0,
    sadness: 0,
    joy: 0,
    flower: 0,
    future: 0
  },
  statLabels: {
    warmth: "Sıcaklık",
    trust: "Güven",
    memory: "Anılar",
    boundary: "Luna’nın Çizgisi",
    repair: "Onarım",
    patience: "Sabır",
    sadness: "Kırgınlık",
    joy: "Neşe",
    flower: "Çiçek Hatırası",
    future: "Gelecek Hayali"
  },
  nodes: {
    start_1: {
      chapter: "Bölüm 1: Doğru Yerde Miyim?",
      scene: "Telefon Ekranı",
      speaker: "Luna",
      mood: "warm",
      text: "Telefon ekranı gece ışığı gibi parlıyor. Luna yeni gelen mesaja bakıyor.\n\n' Selam ' yazıyor. Ardından kendi içinden geçen o cümle beliriyor:\n\n'Doğru yerde miyim ki?'\n\nPip, pencere kenarından ekranı izliyor. 'Bir kedi olarak konuşuyorum: doğru yer genelde kalbin yumuşadığı yerdir. Ama acele etmeyelim, miyav analizimiz yeni başladı.'",
      choices: [
        { text: "Samimi ama kontrollü cevap ver", next: "first_answer_soft", effects: { warmth: 1, boundary: 1, trust: 1 } },
        { text: "Önce Pip’e danış", next: "pip_first_advice", effects: { patience: 1, boundary: 1 } },
        { text: "İçinden geldiği gibi gülümseyerek cevapla", next: "first_answer_warm", effects: { warmth: 2, joy: 1 } }
      ]
    },
    pip_first_advice: {
      chapter: "Bölüm 1: Doğru Yerde Miyim?",
      scene: "Pencere Kenarı",
      speaker: "Pip",
      mood: "warm",
      text: "Pip kuyruğunu toparlayıp ciddi bir danışman gibi oturuyor.\n\n'Kural bir: Kalp hızlanabilir, parmaklar yavaş yazmalı. Kural iki: Samimiyet güzeldir ama Luna’nın çizgisi daima önce gelir.'\n\nLuna hafifçe gülüyor. 'Sen gerçekten bir kediden fazlasısın.'\n\n'Bunu mama saatinde de hatırlatırım.'",
      choices: [
        { text: "Pip’in dediği gibi yumuşak ve ölçülü yaz", next: "first_answer_soft", effects: { boundary: 2, patience: 1, trust: 1 } },
        { text: "Bu sefer içinden geldiği gibi cevapla", next: "first_answer_warm", effects: { warmth: 2, joy: 1 } }
      ]
    },
    first_answer_soft: {
      chapter: "Bölüm 1: Doğru Yerde Miyim?",
      scene: "İlk Cevap",
      speaker: "Luna",
      mood: "warm",
      text: "Luna kısa ama sıcak bir cevap yazıyor. Mesajlar yavaş yavaş akmaya başlıyor.\n\nBir süre sonra karşı taraftan içten bir rahatlık geliyor: 'Evet, doğru yerdesin.'\n\nBu cümle Luna’nın içinde küçük bir ışık yakıyor. Pip ekranı kokluyor. 'Hmm. Koku profili: nezaket, merak, biraz da heyecan.'",
      choices: [
        { text: "Sohbeti doğal şekilde sürdür", next: "letters_1", effects: { trust: 1, warmth: 1 } },
        { text: "Kendi hızını koruyarak ilerle", next: "letters_1", effects: { boundary: 1, patience: 1 } }
      ]
    },
    first_answer_warm: {
      chapter: "Bölüm 1: Doğru Yerde Miyim?",
      scene: "İlk Gülümseme",
      speaker: "Luna",
      mood: "warm",
      text: "Luna cevap yazarken fark etmeden gülümsüyor. Konuşma hızlıca yumuşuyor; cümleler kısa değil, sanki küçük mektuplar gibi uzuyor.\n\nPip gözlerini kısıyor. 'Dikkat. Mesajlaşma sıcaklığı normal seviyenin üstüne çıktı. Kalp kliması açılmalı mı?'",
      choices: [
        { text: "Uzun mesajlara izin ver", next: "letters_1", effects: { warmth: 2, memory: 1 } },
        { text: "Ritmi biraz yavaşlat", next: "letters_1", effects: { patience: 1, boundary: 1 } }
      ]
    },
    letters_1: {
      chapter: "Bölüm 2: Mektup Gibi Mesajlar",
      scene: "Gece Sohbeti",
      speaker: "Luna",
      mood: "warm",
      text: "Saat ilerliyor ama konuşma bitmiyor. İşten, yorgunluktan, günlük şeylerden, bazen de hiçbir şeyden konuşuyorlar.\n\nLuna içinden geçiriyor: 'Mektup gibi uzun uzun yazasım geliyor.'\n\nPip patisini ekrana koyuyor. 'Uzun mesaj riski algılandı. Ama kabul edelim, bazı kalpler kısa mesajla çalışmıyor.'",
      choices: [
        { text: "İçten ve uzun yaz", next: "letters_2", effects: { warmth: 2, memory: 1, trust: 1 } },
        { text: "Az yaz ama hep orada olduğunu hissettir", next: "letters_2", effects: { patience: 2, trust: 1 } },
        { text: "Pip’e göre romantik cevap seç", next: "pip_romance_filter", effects: { joy: 2, warmth: 1 } }
      ]
    },
    pip_romance_filter: {
      chapter: "Bölüm 2: Mektup Gibi Mesajlar",
      scene: "Pip’in Editör Masası",
      speaker: "Pip",
      mood: "warm",
      text: "Pip hayali bir gözlük takmış gibi yapıyor.\n\n'Birinci taslak fazla ciddi. İkinci taslak fazla şiirsel. Üçüncü taslakta mama kelimesi yok, onu reddediyorum.'\n\nLuna kahkaha atıyor. Bazen yakınlık büyük cümlelerle değil, birlikte saçmalayabilmekle kuruluyor.",
      choices: [
        { text: "Şakayı sürdür", next: "letters_2", effects: { joy: 2, warmth: 1 } },
        { text: "Şakadan sonra ciddi bir şey paylaş", next: "letters_2", effects: { trust: 2, warmth: 1 } }
      ]
    },
    letters_2: {
      chapter: "Bölüm 2: Mektup Gibi Mesajlar",
      scene: "Güvenli Cümleler",
      speaker: "Luna",
      mood: "warm",
      text: "Konuşma ilerledikçe Luna şunu fark ediyor: Bazı insanlar cevap vermek için değil, gerçekten duymak için bekliyor.\n\nEkranda küçük cümleler birikiyor: 'İstediğin zaman yazabilirsin.' 'Bende seni dinlerim.' 'Sadece olması gerektiği gibiyim.'\n\nPip usulca mırlıyor. 'Bu cümleler mama gibi değil ama ruhu doyuruyor.'",
      choices: [
        { text: "Bu cümleleri anı olarak sakla", next: "flowers_1", effects: { memory: 2, trust: 1 } },
        { text: "Güvenin yavaş oluştuğunu kabul et", next: "flowers_1", effects: { patience: 2, trust: 1 } }
      ]
    },
    flowers_1: {
      chapter: "Bölüm 3: Çiçekleri Severim",
      scene: "Gül Işıklı Oda",
      speaker: "Luna",
      mood: "warm",
      text: "Bir konuşmada çiçeklerden bahsediliyor. Luna’nın yüzü yumuşuyor. Güller arka planda yavaşça düşerken masadaki orkide daha sessiz ve özel duruyor.\n\nPip orkideyi inceliyor. 'Gül romantizmi duyurur. Orkide ise susup kalıcı olur. Ben de ikincisini seçerdim; daha az bakım talep ediyor gibi görünüyor ama yalan.'",
      choices: [
        { text: "Orkideyi özel anı yap", next: "flowers_2", effects: { flower: 3, memory: 1, warmth: 1 } },
        { text: "Gülleri romantik atmosfer olarak sakla", next: "flowers_2", effects: { warmth: 2, joy: 1 } },
        { text: "Çiçeği değil, verilen emeği önemse", next: "flowers_2", effects: { trust: 2, boundary: 1 } }
      ]
    },
    flowers_2: {
      chapter: "Bölüm 3: Çiçekleri Severim",
      scene: "Orkide Hatırası",
      speaker: "Luna",
      mood: "warm",
      text: "Luna çiçeğe bakarken küçük jestlerin neden büyük hissettirdiğini anlıyor. Çünkü mesele çiçek değil; hatırlanmak.\n\nPip burnunu yapraklara yaklaştırıyor. 'Bu çiçek şunu söylüyor: sevgi gösterilebilir ama dayatılmaz. Estetik ve etik aynı saksıda.'",
      choices: [
        { text: "Bu cümleyi sakla", next: "game_x4_1", effects: { memory: 1, boundary: 1, flower: 1 } },
        { text: "Pip’in fazla bilge olmasına şaşır", next: "game_x4_1", effects: { joy: 1, trust: 1 } }
      ]
    },
    game_x4_1: {
      chapter: "Bölüm 4: x4 Kalp Oyunu",
      scene: "Oyun İçinde Oyun",
      speaker: "Pip",
      mood: "warm",
      text: "Mesajlaşmanın ortasında küçük bir oyun açılıyor. Ekranda 'x4' yazıyor.\n\nPip heyecanla patisini kaldırıyor. 'Dikkat Luna, bu seçim duyguyu dörtle çarpabilir. Kalp ekonomisi dalgalanıyor.'\n\nLuna gülüyor. Bu ilişkide ciddi şeylerin yanında oyun da var; belki bu yüzden hafif hissettiriyor.",
      choices: [
        { text: "Şaka yaparak ortamı yumuşat", next: "game_x4_2", effects: { joy: 3, warmth: 1 } },
        { text: "İçinden geçeni direkt söyle", next: "game_x4_2", effects: { trust: 2, warmth: 2 } },
        { text: "Biraz saklan, biraz belli et", next: "game_x4_2", effects: { patience: 1, memory: 1 } }
      ]
    },
    game_x4_2: {
      chapter: "Bölüm 4: x4 Kalp Oyunu",
      scene: "Kazandık Sayılır",
      speaker: "Luna",
      mood: "warm",
      text: "Oyunun sonucu ne olursa olsun gülüşleri aynı yere çıkıyor.\n\n'Güzel oynadık,' diyor içinden Luna. Vakit ayırmak, bazen en net sevgi diline dönüşüyor.\n\nPip ciddi ciddi not alıyor: 'Oyuncu raporu: kazanılan şey puan değil, yakınlık.'",
      choices: [
        { text: "Bu hafifliği hatırla", next: "future_1", effects: { memory: 2, joy: 1, warmth: 1 } },
        { text: "Yakınlığın acele etmek olmadığını fark et", next: "future_1", effects: { patience: 2, boundary: 1 } }
      ]
    },
    future_1: {
      chapter: "Bölüm 5: Haziran’a Saklanan Plan",
      scene: "Cam Teras Hayali",
      speaker: "Luna",
      mood: "hope",
      text: "Konuşmalar yavaş yavaş geleceğe uzanıyor. Cam teras, yürüyüş yolu, Haziran, Ege... Hepsi henüz yaşanmamış ama sanki kalpte yer ayırtmış anılar gibi.\n\nPip hayali valizini kapatıyor. 'Ben mama kabımı aldım. Siz romantizmle uğraşırken lojistik bende.'",
      choices: [
        { text: "Cam terasta yürüyüş hayali kur", next: "future_2", effects: { future: 3, warmth: 1 } },
        { text: "Haziran planını içinden geçir", next: "future_2", effects: { future: 2, patience: 1 } },
        { text: "Pip’e gelecek planı kurmak erken mi diye sor", next: "pip_future", effects: { patience: 2, boundary: 1 } }
      ]
    },
    pip_future: {
      chapter: "Bölüm 5: Haziran’a Saklanan Plan",
      scene: "Pencere Önü",
      speaker: "Pip",
      mood: "hope",
      text: "Pip dışarıdaki geceye bakıyor.\n\n'Gelecek planı kurmak erken olabilir. Ama güzel ihtimallere küçük bir sandalye çekmek yasak değil. Yeter ki o sandalyeye kimse seni zorla oturtmasın.'",
      choices: [
        { text: "Bunu Luna’nın çizgisi olarak kabul et", next: "future_2", effects: { boundary: 2, patience: 1, trust: 1 } },
        { text: "Gelecek hayaline izin ver", next: "future_2", effects: { future: 2, warmth: 1 } }
      ]
    },
    future_2: {
      chapter: "Bölüm 5: Haziran’a Saklanan Plan",
      scene: "Yürüyüş Yolu",
      speaker: "Luna",
      mood: "hope",
      text: "Luna, cam terasta yan yana yürüdüklerini hayal ediyor. Konuşmadan da anlaşılabilen bir sessizlik var.\n\nAma o hayalin içinde bile Luna’nın kendi hızı var. Yakınlık güzel; çizgisi korunursa daha güzel.\n\nPip başını sallıyor. 'Romantik yürüyüş protokolü: pati mesafesi karşılıklı rızayla ayarlanır.'",
      choices: [
        { text: "Her şeyin zamanı var de", next: "time_1", effects: { patience: 3, boundary: 2 } },
        { text: "Bu hayali sıcak bir anı gibi sakla", next: "time_1", effects: { memory: 2, future: 1 } }
      ]
    },
    time_1: {
      chapter: "Bölüm 6: Her Şeyin Zamanı Var",
      scene: "Sınır Çizgisi",
      speaker: "Luna",
      mood: "warm",
      text: "Luna bir şeyi net biliyor: Sevgi güzel olabilir ama hızını kendi belirlemeli.\n\n'Her şeyin zamanı var,' diyor. Bunu duymak ve buna saygı duyulması, kalbinin en güvenli yerine dokunuyor.\n\nPip bu kez şaka yapmadan konuşuyor: 'Güven dediğin şey, birinin senin dur dediğin yerde duracağını bilmektir.'",
      choices: [
        { text: "Bu çizgiyi açıkça sahiplen", next: "time_2", effects: { boundary: 3, trust: 1 } },
        { text: "Sevginin sabırla güçlendiğini düşün", next: "time_2", effects: { patience: 2, warmth: 1, trust: 1 } }
      ]
    },
    time_2: {
      chapter: "Bölüm 6: Her Şeyin Zamanı Var",
      scene: "Sıcak Eşik",
      speaker: "Luna",
      mood: "warm",
      text: "O güne kadar her şey çok güzel ilerler. Mesajlar, gülüşler, çiçekler, planlar... Luna bazen 'biz çok güzel gidiyoruz' diye düşünür.\n\nPip mırıldanır. 'Mükemmel ilişkiler bile insanlardan oluşur Luna. İnsanların da en önemli sınavı, sevdiği kişinin çizgisini kendi isteğinden önde tutabilmektir.'",
      choices: [
        { text: "Bu cümleyi aklında tut", next: "silence_1", effects: { memory: 1, boundary: 2 } },
        { text: "Hikâyenin böyle sıcak kalmasını dile", next: "silence_1", effects: { warmth: 1, sadness: 1 } }
      ]
    },
    silence_1: {
      chapter: "Bölüm 7: Bir Anda Sessizlik",
      scene: "Sessizleşen Mesaj",
      speaker: "Luna",
      mood: "sad",
      text: "Sonra bir an gelir. Çok kısa, çok hızlı, ama Luna’nın içinde uzun süren bir an.\n\nSevgilisi Luna istemeden, Luna hazır değilken cinsel yakınlıkta derin bir hamle yapar. Hemen durur. Hemen pişman olur. Ama Luna’nın içinde bir şey değişmiştir.\n\nEskiden mesaj geldiğinde yüzü yumuşardı. Şimdi önce içi kasılır.",
      choices: [
        { text: "Hemen iyi olmak zorunda olmadığını kabul et", next: "pip_serious_1", effects: { boundary: 3, sadness: 2 } },
        { text: "Ne hissettiğini anlamak için dur", next: "pip_serious_1", effects: { patience: 2, sadness: 1, boundary: 1 } },
        { text: "Eski sıcaklığı özlediğini inkâr etme", next: "pip_serious_1", effects: { memory: 2, sadness: 1 } }
      ]
    },
    pip_serious_1: {
      chapter: "Bölüm 8: Pip’in Ciddi Miyavı",
      scene: "Yatak Ucu",
      speaker: "Pip",
      mood: "sad",
      text: "Pip yatağın ucuna çıkıyor. Bu kez alaycı değil.\n\n'Luna, pişman olması önemli. Ama senin canının sıkılmış olması da önemli. Birinin üzgün olması, senin hemen iyi olmak zorunda olduğun anlamına gelmez.'\n\nLuna gözlerini ekrandan ayırmıyor. 'Onu seviyorum Pip. Ama eski gibi bakamıyorum.'\n\nPip usulca cevaplıyor: 'Kalp eskiyi hatırlar. Beden bugünü unutmaz.'",
      choices: [
        { text: "Pip’e hak ver", next: "apology_1", effects: { boundary: 2, trust: 1 } },
        { text: "Sevgi ve güven aynı şey mi diye sor", next: "pip_love_trust", effects: { patience: 2, sadness: 1 } },
        { text: "Eski anıları düşünmekten korktuğunu söyle", next: "memories_1", effects: { memory: 1, sadness: 2 } }
      ]
    },
    pip_love_trust: {
      chapter: "Bölüm 8: Pip’in Ciddi Miyavı",
      scene: "Yatak Ucu",
      speaker: "Pip",
      mood: "sad",
      text: "Pip başını eğiyor.\n\n'Sevgi bir sıcaklık. Güven ise o sıcaklığın yakmayacağını bilmektir. İkisi aynı yerde yaşayabilir ama biri kırılınca diğerinin de sesi kısılır.'\n\nLuna derin bir nefes alıyor. Bu cümle ağır ama doğru geliyor.",
      choices: [
        { text: "Özür mesajını okumaya hazır ol", next: "apology_1", effects: { patience: 2, boundary: 1 } },
        { text: "Önce eski anıları hatırla", next: "memories_1", effects: { memory: 2, sadness: 1 } }
      ]
    },
    apology_1: {
      chapter: "Bölüm 9: Özür Savunma Değildir",
      scene: "Pişmanlık Mesajı",
      speaker: "Sevgili",
      mood: "sad",
      text: "Mesaj gelir. Bu kez uzun ama kendini savunan bir mesaj değildir.\n\n'Seni sevdiğimi söyleyerek yaptığım şeyi hafifletemem. Sen istemeden ileri gittim. O anda durmam gerekiyordu. Pişmanım ama senden hemen iyi olmanı beklemiyorum.'\n\nLuna mesajı birkaç kez okur. İçindeki kırgınlık geçmez; ama ilk kez karşısında inkâr değil, sorumluluk görür.",
      choices: [
        { text: "Savunma yapmadığını fark et", next: "apology_2", effects: { repair: 2, trust: 1 } },
        { text: "Yine de içinin kasıldığını kabul et", next: "apology_2", effects: { boundary: 2, sadness: 1 } },
        { text: "Pip’e bu özrün yeterli olup olmadığını sor", next: "pip_apology", effects: { patience: 1, boundary: 1 } }
      ]
    },
    pip_apology: {
      chapter: "Bölüm 9: Özür Savunma Değildir",
      scene: "Pencere Kenarı",
      speaker: "Pip",
      mood: "sad",
      text: "Pip mesajı okur gibi ekrana bakıyor.\n\n'Özür kapıyı çalar Luna. Ama kapıyı açıp açmamak hâlâ senin kararın. Yeterli olup olmadığı sözle değil, bundan sonra aynı çizgide durmasıyla anlaşılır.'",
      choices: [
        { text: "Bundan sonrasına bakmaya karar ver", next: "apology_2", effects: { repair: 2, patience: 1 } },
        { text: "Kendi çizgini tekrar hatırla", next: "apology_2", effects: { boundary: 2, trust: 1 } }
      ]
    },
    apology_2: {
      chapter: "Bölüm 9: Özür Savunma Değildir",
      scene: "İkinci Mesaj",
      speaker: "Sevgili",
      mood: "sad",
      text: "Bir mesaj daha gelir.\n\n'Bu ilişkinin bitmesini istemiyorum. Ama bunu istemem, senden hemen eskisi gibi davranmanı bekleyebileceğim anlamına gelmiyor. Senin çizgin artık benim çizgim. Bunu sözle değil, davranışla göstermek zorundayım.'\n\nLuna’nın gözleri doluyor. Çünkü bu kez istenen şey unutması değil; kendi hızında kalmasıdır.",
      choices: [
        { text: "Bu cümlenin içindeki sorumluluğu kabul et", next: "memories_1", effects: { repair: 3, trust: 1 } },
        { text: "Hemen yumuşamadan sadece not et", next: "memories_1", effects: { boundary: 2, patience: 2 } },
        { text: "Eski günleri hatırlamaya cesaret et", next: "memories_1", effects: { memory: 2, warmth: 1 } }
      ]
    },
    memories_1: {
      chapter: "Bölüm 10: Sen - Ben - Anılarım",
      scene: "Eski Mesajlar",
      speaker: "Luna",
      mood: "sad",
      text: "Üzgün müzik odanın içine yayılır. Luna eski konuşmaları tek tek hatırlar: ilk 'doğru yerde miyim', uzun mesajlar, çiçekler, x4 oyunu, sabah uyandırma şakası, cam teras planı.\n\nPip yanına kıvrılır. 'Güzel anılar, kötü bir anı silmez Luna. Sadece kararının tek renkten oluşmadığını hatırlatır.'",
      choices: [
        { text: "İlk mesajı hatırla", next: "memories_first", effects: { memory: 2, warmth: 1 } },
        { text: "Orkide hatırasına bak", next: "memories_flower", effects: { flower: 2, memory: 1 } },
        { text: "Cam teras hayalini hatırla", next: "memories_future", effects: { future: 2, memory: 1 } },
        { text: "Önce kendi sınırını tekrar oku", next: "luna_speed_1", effects: { boundary: 3, patience: 1 } }
      ]
    },
    memories_first: {
      chapter: "Bölüm 10: Sen - Ben - Anılarım",
      scene: "İlk Işık",
      speaker: "Luna",
      mood: "sad",
      text: "Luna ilk geceyi hatırlıyor. 'Doğru yerde miyim ki?' diye sormuştu. Gelen cevap basitti ama içini ısıtmıştı: 'Evet.'\n\nŞimdi o evet kırılmış gibi değil; sadece daha fazla sorumluluk isteyen bir evete dönüşmüş gibi.",
      choices: [
        { text: "Bu anıyı bugünün gerçeğiyle birlikte taşı", next: "luna_speed_1", effects: { memory: 1, repair: 1, boundary: 1 } },
        { text: "Pip’e hâlâ doğru yerde miyim diye sor", next: "pip_right_place", effects: { patience: 1, trust: 1 } }
      ]
    },
    memories_flower: {
      chapter: "Bölüm 10: Sen - Ben - Anılarım",
      scene: "Orkide",
      speaker: "Luna",
      mood: "hope",
      text: "Orkide masada duruyor. Solmamış. Ama suyu, ışığı, yeri değişmek zorunda.\n\nLuna fısıldıyor: 'Bazı şeyler kırılınca bitmiyor. Ama bakım istiyor.'\n\nPip yapraklara bakıyor. 'Orkideler de öyle. Çok su verirsen boğulur, hiç su vermezsen kurur. İlişkiler de dramatik bitkiler zaten.'",
      choices: [
        { text: "İlişkinin bakıma ihtiyacı olduğunu kabul et", next: "luna_speed_1", effects: { repair: 2, patience: 1, flower: 1 } },
        { text: "Orkideyi onarım sembolü yap", next: "luna_speed_1", effects: { flower: 2, memory: 1, warmth: 1 } }
      ]
    },
    memories_future: {
      chapter: "Bölüm 10: Sen - Ben - Anılarım",
      scene: "Cam Teras",
      speaker: "Luna",
      mood: "hope",
      text: "Cam teras hayali geri gelir. Bu kez sadece romantik bir yürüyüş değil; konuşulacak, anlaşılacak, sınırların yeniden netleşeceği bir yer gibidir.\n\nPip çantasını kapar. 'Ben de geliyorum. Duygusal güvenlik danışmanı olarak.'",
      choices: [
        { text: "Yüz yüze konuşma fikrine yaklaş", next: "luna_speed_1", effects: { future: 2, repair: 1, trust: 1 } },
        { text: "Önce mesajla kendi hızını anlat", next: "luna_speed_1", effects: { boundary: 2, patience: 1 } }
      ]
    },
    pip_right_place: {
      chapter: "Bölüm 10: Sen - Ben - Anılarım",
      scene: "Pip’in Yanıtı",
      speaker: "Pip",
      mood: "sad",
      text: "Pip bir süre susuyor.\n\n'Doğru yer, hiç hata olmayan yer değildir Luna. Doğru yer, hata olunca senin canının acısını küçültmeye çalışmayan, çizgini benimseyen ve beklemeyi öğrenen yerdir.'\n\n'Yine de karar senin hızında.'",
      choices: [
        { text: "Luna’nın hızına geç", next: "luna_speed_1", effects: { boundary: 2, repair: 1, patience: 2 } },
        { text: "Eski sıcaklığı tamamen değil, yavaşça hatırla", next: "luna_speed_1", effects: { warmth: 1, memory: 1, patience: 1 } }
      ]
    },
    luna_speed_1: {
      chapter: "Bölüm 11: Luna’nın Hızı",
      scene: "Cevap Taslağı",
      speaker: "Luna",
      mood: "hope",
      text: "Luna cevap kutusunu açıyor. Yazıyor, siliyor, tekrar yazıyor.\n\nHedefi eskiye bir anda dönmek değil. Hedefi, kendi hızını kaybetmeden bu ilişkiye devam edebilmek.\n\nPip ekrana bakıyor. 'Romantizm devam edebilir. Ama hız sınırı Luna tarafından belirleniyor.'",
      choices: [
        { text: "Yavaş ilerlemek istediğini yaz", next: "reply_slow", effects: { boundary: 2, repair: 2, patience: 2 } },
        { text: "Cam terasta konuşmayı teklif et", next: "reply_terrace", effects: { future: 2, trust: 1, repair: 1 } },
        { text: "Orkide gibi bakım gerektiğini söyle", next: "reply_orchid", effects: { flower: 2, patience: 2, repair: 1 } },
        { text: "Kısa ama kapıyı kapatmayan bir cevap yaz", next: "reply_short", effects: { boundary: 1, sadness: 1, patience: 2 } }
      ]
    },
    reply_slow: {
      chapter: "Bölüm 11: Luna’nın Hızı",
      scene: "Yavaşça",
      speaker: "Luna",
      mood: "hope",
      text: "Luna mesajı gönderir:\n\n'Eskisi gibi hemen yumuşayamıyorum. Ama konuşmayı kapatmak istemiyorum. Devam etmek istiyorum; yavaşça, benim hızımda.'\n\nCevap gecikmez:\n\n'Biliyorum. Eskisi gibi olmanı beklemiyorum. Senin hızında, senin çizginde.'",
      choices: [
        { text: "Kararı ver", next: "ending", effects: { repair: 2, trust: 1, warmth: 1 } }
      ]
    },
    reply_terrace: {
      chapter: "Bölüm 11: Luna’nın Hızı",
      scene: "Cam Teras Daveti",
      speaker: "Luna",
      mood: "hope",
      text: "Luna yazıyor:\n\n'Mesajla toparlayamıyorum. Cam terasta yürüyelim. Sakince konuşalım. Hiçbir şeyi yok saymak için değil; anlamak için.'\n\nGelen cevap kısa ve net:\n\n'Olur. Sadece konuşacağız. Sen ne kadar istersen o kadar.'",
      choices: [
        { text: "Kararı ver", next: "ending", effects: { repair: 2, future: 2, trust: 1 } }
      ]
    },
    reply_orchid: {
      chapter: "Bölüm 11: Luna’nın Hızı",
      scene: "Orkide Mesajı",
      speaker: "Luna",
      mood: "hope",
      text: "Luna orkideye bakıp yazıyor:\n\n'Devam etmek istiyorum. Ama bazı şeyleri yeniden kurmamız gerek. Çok hızlı değil, ihmal ederek de değil. Bakım ister gibi.'\n\nPip saksının yanında esniyor. 'Bu ilişki botanik onarım moduna geçti.'",
      choices: [
        { text: "Kararı ver", next: "ending", effects: { flower: 2, repair: 1, patience: 2, warmth: 1 } }
      ]
    },
    reply_short: {
      chapter: "Bölüm 11: Luna’nın Hızı",
      scene: "Kısa Cevap",
      speaker: "Luna",
      mood: "sad",
      text: "Luna uzun uzun yazar, siler. Sonunda kısa bir mesaj gönderir:\n\n'Şu an eskisi gibi değilim. Ama konuşmayı kapatmak istemiyorum.'\n\nCevap gelir:\n\n'Ben buradayım. Acele etmeyeceğim.'\n\nPip usulca mırıldanır. 'Bu bir son değil Luna. Sadece nokta yerine virgül koydun.'",
      choices: [
        { text: "Kararı ver", next: "ending", effects: { patience: 2, repair: 1, boundary: 1 } }
      ]
    }
  },
  endings: {
    slow_again: {
      chapter: "Final: Yavaşça Yeniden",
      scene: "Yeni Sıcaklık",
      speaker: "Luna",
      mood: "hope",
      title: "Yavaşça Yeniden",
      text: "Luna eski sıcaklığı bir anda geri vermiyor. Ama ilk kez mesaj geldiğinde içi tamamen kasılmıyor.\n\n'Eskisi gibi değilim,' diyor.\n\nSevgilisi cevaplıyor: 'Biliyorum. Eskisi gibi olmanı istemeye hakkım yok.'\n\nLuna uzun bir nefes alıyor. 'Ben de her şeyi unutmuş değilim. Ama denemek istiyorum. Yavaşça.'\n\nPip ekranın yanına kıvrılıyor. 'Harika. Romantik trafik levhası dikildi: hız sınırı Luna.'\n\nİlişki bitmez. Daha bilinçli, daha yavaş ve daha güçlü bir yerden devam eder."
    },
    terrace_talk: {
      chapter: "Final: Cam Terasta Konuşma",
      scene: "Yürüyüş Yolu",
      speaker: "Luna",
      mood: "hope",
      title: "Cam Terasta Konuşma",
      text: "Luna, eski sıcaklığı mesajla tam veremeyeceğini anlar. Ama ilişkiyi kapatmak istemez. Cam teras artık sadece romantik bir plan değil; onarımın konuşulacağı sakin bir yer olur.\n\n'Yürüyelim,' der Luna. 'Ama hiçbir şeyi yok saymak için değil. Konuşmak için.'\n\nSevgilisi kabul eder: 'Sadece konuşacağız. Senin hızında.'\n\nPip çantaya atlar. 'Duygusal güvenlik danışmanı görev başında.'\n\nİlişki devam eder; bu kez açık konuşmalarla, sınırları daha görünür kılarak."
    },
    orchid_care: {
      chapter: "Final: Orkideyi Yeniden Sulamak",
      scene: "Orkide Işığı",
      speaker: "Luna",
      mood: "hope",
      title: "Orkideyi Yeniden Sulamak",
      text: "Luna orkideyi pencerenin daha güvenli, daha yumuşak ışık alan yerine koyar.\n\n'Bazı şeyler kırılınca bitmiyor,' der. 'Ama bakım istiyor.'\n\nSevgilisi bunu bir söz değil, bir sorumluluk olarak kabul eder. Daha dikkatli, daha sabırlı, Luna’nın çizgisine daha bağlı davranmak zorundadır.\n\nPip yaprağı koklar. 'Orkideler dramatik bitkilerdir. Ama doğru bakılırsa yeniden açarlar.'\n\nİlişki bitmez. Bir bakım dönemine girer; küçük jestler, net sınırlar ve sabırla yeniden güçlenir."
    },
    slow_message: {
      chapter: "Final: Yavaş Yazılan Mesaj",
      scene: "Virgül",
      speaker: "Luna",
      mood: "sad",
      title: "Yavaş Yazılan Mesaj",
      text: "Luna hâlâ kırgındır. Eski sıcaklığı özler ama acele edemez. Uzun bir mesaj yazar, siler, sonra kısa ama umutlu bir cevap gönderir.\n\n'Şu an eskisi gibi değilim. Ama konuşmayı kapatmak istemiyorum.'\n\nSevgilisi sadece şunu yazar: 'Ben buradayım. Acele etmeyeceğim.'\n\nPip başını Luna’nın dizine koyar. 'Bu ayrılık değil Luna. Bu, cümlenin devamını daha dikkatli yazmak.'\n\nİlişki bitmez. Sadece daha yavaş, daha temkinli ve Luna’nın ritmine saygılı şekilde devam eder."
    }
  }
};
