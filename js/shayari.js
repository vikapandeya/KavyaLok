// KavyaLok — Shayari Data (100 Hindi + 100 English)

const SHAYARI = [

  // ══════════════════════════════════════════
  //  HINDI SHAYARI
  // ══════════════════════════════════════════

  // — Love Shayari (20) ——————————————————
  { id:"sh1",  lang:"hindi", cat:"Love Shayari",       author:"राजेंद्र प्रसाद शर्मा", likes:2340, trending:true,
    lines:"तुम्हारी आँखों में दुनिया दिखती है मुझे,\nहर सपने में तुम्हारा नाम आता है।\nबिना तुम्हारे जीवन अधूरा है,\nतुम्हारे बिना हर पल सूना लगता है।" },

  { id:"sh2",  lang:"hindi", cat:"Love Shayari",       author:"राजेंद्र प्रसाद शर्मा", likes:1890, trending:false,
    lines:"प्यार करना है तो दिल से करो,\nआधा-अधूरा नहीं चलता।\nजो दिल से दे दो खुद को,\nवही रिश्ता हमेशा चलता।" },

  { id:"sh3",  lang:"hindi", cat:"Love Shayari",       author:"राजेंद्र प्रसाद शर्मा", likes:3100, trending:true,
    lines:"तुम मिले तो जैसे बारिश में भीगा हो,\nतुम गए तो जैसे सूखा आ गया हो।\nतुम्हारे बिना यह दिल बेकार है,\nतुम ही मेरा सब कुछ हो।" },

  { id:"sh4",  lang:"hindi", cat:"Love Shayari",       author:"राजेंद्र प्रसाद शर्मा", likes:1560, trending:false,
    lines:"मोहब्बत वो नहीं जो दिखावे में हो,\nमोहब्बत वो है जो छुपाए न बने।\nजो दिल की गहराई से निकले,\nवही सच्चा प्यार होता है।" },

  { id:"sh5",  lang:"hindi", cat:"Love Shayari",       author:"राजेंद्र प्रसाद शर्मा", likes:2780, trending:true,
    lines:"तेरी मुस्कान देख कर दिल खिल जाता है,\nतेरी आवाज़ सुन कर जहाँ रुक जाता है।\nतू मेरी ज़िंदगी की धड़कन है,\nतेरे बिना हर साँस अधूरी लगती है।" },

  { id:"sh6",  lang:"hindi", cat:"Love Shayari",       author:"राजेंद्र प्रसाद शर्मा", likes:1200, trending:false,
    lines:"प्यार की भाषा सबसे अलग है,\nइसमें शब्द नहीं, एहसास बोलते हैं।\nआँखें मिलती हैं तो दिल से दिल की,\nसारी बात हो जाती है।" },

  { id:"sh7",  lang:"hindi", cat:"Love Shayari",       author:"राजेंद्र प्रसाद शर्मा", likes:1980, trending:false,
    lines:"तुम्हारी याद जब आती है,\nतो लगता है जैसे कोई गा रहा हो।\nदिल के तारों को छूती है वो यादें,\nऔर सब कुछ भूल जाता हूँ मैं।" },

  { id:"sh8",  lang:"hindi", cat:"Love Shayari",       author:"राजेंद्र प्रसाद शर्मा", likes:2450, trending:true,
    lines:"इश्क़ में हारना भी जीत है,\nजब तुमसे हार जाएँ हम।\nतुम्हारे लिए अपना सब हार कर भी,\nखुश रहते हैं हम।" },

  { id:"sh9",  lang:"hindi", cat:"Love Shayari",       author:"राजेंद्र प्रसाद शर्मा", likes:1670, trending:false,
    lines:"चाँद को देखता हूँ तो तुम याद आते हो,\nतारों को देखता हूँ तो तुम याद आते हो।\nजहाँ भी नज़र जाती है मेरी,\nवहाँ-वहाँ तुम्हारा चेहरा दिखता है।" },

  { id:"sh10", lang:"hindi", cat:"Love Shayari",       author:"राजेंद्र प्रसाद शर्मा", likes:3200, trending:true,
    lines:"तुझसे मिलना तो हुआ इत्तेफ़ाक़ से,\nपर तुझसे मुहब्बत करना मेरा फ़ैसला था।\nतेरे बिना अधूरी है यह ज़िंदगी मेरी,\nतू ही मेरी पूरी दुनिया है।" },

  { id:"sh11", lang:"hindi", cat:"Love Shayari",       author:"राजेंद्र प्रसाद शर्मा", likes:1430, trending:false,
    lines:"प्यार है तो दिखाओ भी,\nसिर्फ दिल में रखने से क्या होगा।\nएक बार कह दो मुझसे,\nकि तुम भी मुझे चाहते हो।" },

  { id:"sh12", lang:"hindi", cat:"Love Shayari",       author:"राजेंद्र प्रसाद शर्मा", likes:2100, trending:false,
    lines:"दो दिलों के बीच की दूरी,\nसिर्फ एक कदम से मिटती है।\nवो कदम उठाने की हिम्मत,\nप्यार ही देता है।" },

  { id:"sh13", lang:"hindi", cat:"Love Shayari",       author:"राजेंद्र प्रसाद शर्मा", likes:1750, trending:false,
    lines:"तुम्हारे साथ वक़्त गुज़ारना,\nज़िंदगी की सबसे बड़ी नेमत है।\nतुम्हारे बिना वक़्त रुक जाता है,\nतुम्हारे साथ वक़्त उड़ जाता है।" },

  { id:"sh14", lang:"hindi", cat:"Love Shayari",       author:"राजेंद्र प्रसाद शर्मा", likes:2890, trending:true,
    lines:"एक नज़र देखा तुम्हें तो दिल चुरा लिया,\nएक मुस्कान दिखाई तो जान ले गए।\nअब तो तुम्हारे बिना जीना मुश्किल है,\nयह कैसा इश्क़ कर बैठे हम।" },

  { id:"sh15", lang:"hindi", cat:"Love Shayari",       author:"राजेंद्र प्रसाद शर्मा", likes:1320, trending:false,
    lines:"प्यार में दर्द भी होता है,\nपर यह दर्द भी प्यारा लगता है।\nतुम्हारी याद में जो आँसू आते हैं,\nवो भी मीठे लगते हैं।" },

  { id:"sh16", lang:"hindi", cat:"Love Shayari",       author:"राजेंद्र प्रसाद शर्मा", likes:2200, trending:false,
    lines:"हर सुबह तुम्हारे साथ हो,\nहर शाम तुम्हारे साथ हो।\nज़िंदगी की हर खुशी में,\nसिर्फ तुम हो, तुम हो।" },

  { id:"sh17", lang:"hindi", cat:"Love Shayari",       author:"राजेंद्र प्रसाद शर्मा", likes:1660, trending:false,
    lines:"मेरी ज़िंदगी की किताब में,\nतुम्हारा नाम हर पन्ने पर है।\nहर लफ्ज़ में तुम हो,\nहर जुमले में तुम हो।" },

  { id:"sh18", lang:"hindi", cat:"Love Shayari",       author:"राजेंद्र प्रसाद शर्मा", likes:2450, trending:true,
    lines:"तुम्हारे बिना रात नहीं होती,\nतुम्हारे बिना सुबह नहीं होती।\nतुम्हीं मेरा दिन हो, तुम्हीं रात हो,\nतुम्हीं मेरी साँस हो।" },

  { id:"sh19", lang:"hindi", cat:"Love Shayari",       author:"राजेंद्र प्रसाद शर्मा", likes:1910, trending:false,
    lines:"इश्क़ की राह पर चलते-चलते,\nतुम तक पहुँचना ही मेरी मंज़िल थी।\nअब कहीं नहीं जाना,\nतुम्हारे पास रहना ही जीना है।" },

  { id:"sh20", lang:"hindi", cat:"Love Shayari",       author:"राजेंद्र प्रसाद शर्मा", likes:2700, trending:true,
    lines:"प्यार करो तो इस तरह करो,\nकि सामने वाला महसूस करे।\nदिल से दो, शर्त मत लगाओ,\nयही सच्चे प्यार का रास्ता है।" },

  // — Sad Shayari (10) ——————————————————
  { id:"sh21", lang:"hindi", cat:"Sad Shayari",        author:"राजेंद्र प्रसाद शर्मा", likes:2100, trending:true,
    lines:"बिछड़ने का दर्द कुछ ऐसा होता है,\nजैसे रात में दिया बुझ जाए।\nसब कुछ होते हुए भी कुछ न हो,\nयह अहसास बहुत तकलीफ़ देता है।" },

  { id:"sh22", lang:"hindi", cat:"Sad Shayari",        author:"राजेंद्र प्रसाद शर्मा", likes:1800, trending:false,
    lines:"जब दिल टूटता है तो आवाज़ नहीं होती,\nपर दर्द बहुत गहरा होता है।\nलोग समझते हैं सब ठीक है,\nपर अंदर से सब बिखरा होता है।" },

  { id:"sh23", lang:"hindi", cat:"Sad Shayari",        author:"राजेंद्र प्रसाद शर्मा", likes:2400, trending:true,
    lines:"तुम गए तो लगा जैसे बहार गई,\nदिल का बगीचा उजड़ गया।\nहर तरफ अँधेरा छा गया,\nज़िंदगी का रंग फीका पड़ गया।" },

  { id:"sh24", lang:"hindi", cat:"Sad Shayari",        author:"राजेंद्र प्रसाद शर्मा", likes:1650, trending:false,
    lines:"खामोशी भी बोलती है कभी-कभी,\nआँखें भी कहानी सुनाती हैं।\nजो बात ज़ुबान पर न आए,\nवो आँसू बन बह जाती है।" },

  { id:"sh25", lang:"hindi", cat:"Sad Shayari",        author:"राजेंद्र प्रसाद शर्मा", likes:1970, trending:false,
    lines:"दर्द को सीने में दफ़न करके,\nमुस्कुराते हैं हम।\nकोई नहीं जानता इस दर्द को,\nअकेले ही सहते हैं हम।" },

  { id:"sh26", lang:"hindi", cat:"Sad Shayari",        author:"राजेंद्र प्रसाद शर्मा", likes:1450, trending:false,
    lines:"कुछ रिश्ते टूट जाते हैं यूँ ही,\nबिना किसी वजह के।\nपर उनकी याद नहीं जाती,\nज़िंदगी भर साथ रहती है।" },

  { id:"sh27", lang:"hindi", cat:"Sad Shayari",        author:"राजेंद्र प्रसाद शर्मा", likes:2200, trending:true,
    lines:"जो हमें छोड़ के चले गए,\nउनकी याद आज भी आती है।\nभूलने की कोशिश करते हैं,\nपर वो यादें नहीं जाती।" },

  { id:"sh28", lang:"hindi", cat:"Sad Shayari",        author:"राजेंद्र प्रसाद शर्मा", likes:1780, trending:false,
    lines:"तन्हाई में बैठ कर सोचते हैं,\nकाश तुम होते पास में।\nपर अब तो तुम दूर हो,\nबस यादें हैं पास में।" },

  { id:"sh29", lang:"hindi", cat:"Sad Shayari",        author:"राजेंद्र प्रसाद शर्मा", likes:1900, trending:false,
    lines:"दिल के दर्द को कहाँ ले जाएँ,\nकोई समझने वाला नहीं।\nहर जगह अजनबी हैं,\nअपना कोई नहीं।" },

  { id:"sh30", lang:"hindi", cat:"Sad Shayari",        author:"राजेंद्र प्रसाद शर्मा", likes:2350, trending:true,
    lines:"रो लेते हैं कभी-कभी अकेले में,\nदिल हल्का हो जाता है।\nआँसू दिल का बोझ हल्का करते हैं,\nयह राज़ किसी को न बताना।" },

  // — Friendship Shayari (10) ——————————
  { id:"sh31", lang:"hindi", cat:"Friendship Shayari", author:"राजेंद्र प्रसाद शर्मा", likes:2560, trending:true,
    lines:"दोस्त वो जो मुश्किल में साथ हो,\nदोस्त वो जो हर हाल में याद रखे।\nऐसे दोस्त कम मिलते हैं दुनिया में,\nजब मिलें तो कभी न छोड़ना।" },

  { id:"sh32", lang:"hindi", cat:"Friendship Shayari", author:"राजेंद्र प्रसाद शर्मा", likes:1890, trending:false,
    lines:"यारी निभाना आसान नहीं होता,\nदिल से करना पड़ता है।\nजो दिल से यार होते हैं,\nवो ज़िंदगी भर याद रहते हैं।" },

  { id:"sh33", lang:"hindi", cat:"Friendship Shayari", author:"राजेंद्र प्रसाद शर्मा", likes:2100, trending:false,
    lines:"दोस्ती का रिश्ता सबसे अनोखा है,\nना खून का रिश्ता, ना वादे का।\nबस दिल से दिल का जोड़ है,\nजो हर मुश्किल में काम आता है।" },

  { id:"sh34", lang:"hindi", cat:"Friendship Shayari", author:"राजेंद्र प्रसाद शर्मा", likes:1670, trending:false,
    lines:"पुराने दोस्त यादों की तरह होते हैं,\nजितना याद करो उतना मीठे लगते हैं।\nज़िंदगी में नए लोग आते हैं,\nपर पुरानों की जगह नहीं ले पाते।" },

  { id:"sh35", lang:"hindi", cat:"Friendship Shayari", author:"राजेंद्र प्रसाद शर्मा", likes:2300, trending:true,
    lines:"अच्छे दोस्त किताब की तरह होते हैं,\nजितना पढ़ो उतना सीखते हो।\nउनकी हर बात में ज्ञान है,\nउनका साथ जीवन की धरोहर है।" },

  { id:"sh36", lang:"hindi", cat:"Friendship Shayari", author:"राजेंद्र प्रसाद शर्मा", likes:1450, trending:false,
    lines:"दोस्त का प्यार माँ की ममता जैसा होता है,\nबिना कहे समझ जाता है।\nजब दुनिया साथ छोड़ दे,\nतब भी दोस्त पास होता है।" },

  { id:"sh37", lang:"hindi", cat:"Friendship Shayari", author:"राजेंद्र प्रसाद शर्मा", likes:1980, trending:false,
    lines:"दोस्ती में हिसाब नहीं होता,\nना तू मेरा, ना मैं तेरा।\nबस एक-दूसरे के लिए जीते हैं,\nयही दोस्ती का असली जज़्बा है।" },

  { id:"sh38", lang:"hindi", cat:"Friendship Shayari", author:"राजेंद्र प्रसाद शर्मा", likes:2780, trending:true,
    lines:"यारों का साथ हो तो राह आसान हो जाती है,\nमुश्किलें भी छोटी लगती हैं।\nजीवन की हर चुनौती का,\nमिल कर सामना करते हैं।" },

  { id:"sh39", lang:"hindi", cat:"Friendship Shayari", author:"राजेंद्र प्रसाद शर्मा", likes:1560, trending:false,
    lines:"सच्चे दोस्त की एक बात,\nझूठे हज़ार रिश्तों से बेहतर है।\nजो सच बोले, जो राह दिखाए,\nवही असली दोस्त है।" },

  { id:"sh40", lang:"hindi", cat:"Friendship Shayari", author:"राजेंद्र प्रसाद शर्मा", likes:2150, trending:false,
    lines:"दोस्तों के साथ बिताए पल,\nज़िंदगी की सबसे अमूल्य याद है।\nवो हँसी, वो शरारतें, वो बातें,\nहमेशा दिल में ज़िंदा रहेंगी।" },

  // — Attitude Shayari (10) —————————————
  { id:"sh41", lang:"hindi", cat:"Attitude Shayari",   author:"राजेंद्र प्रसाद शर्मा", likes:3400, trending:true,
    lines:"मैं वो नहीं जो तुम सोचते हो,\nमैं उससे कहीं ज़्यादा हूँ।\nजो मुझे कमज़ोर समझे,\nवो मुझे जानता नहीं।" },

  { id:"sh42", lang:"hindi", cat:"Attitude Shayari",   author:"राजेंद्र प्रसाद शर्मा", likes:2900, trending:true,
    lines:"अपनी राह खुद बनाते हैं हम,\nभीड़ का रास्ता नहीं चलते।\nजो कहते हैं नहीं होगा,\nउन्हें ही जवाब देते हैं।" },

  { id:"sh43", lang:"hindi", cat:"Attitude Shayari",   author:"राजेंद्र प्रसाद शर्मा", likes:2600, trending:true,
    lines:"ज़िंदगी में आगे बढ़ना है तो,\nपीछे देखना बंद करो।\nजो गया वो गया,\nआगे क्या है वो देखो।" },

  { id:"sh44", lang:"hindi", cat:"Attitude Shayari",   author:"राजेंद्र प्रसाद शर्मा", likes:2100, trending:false,
    lines:"मेरी खामोशी को कमज़ोरी मत समझो,\nयह मेरी ताक़त है।\nजब बोलूँगा तो दुनिया सुनेगी,\nइसलिए अभी चुप हूँ।" },

  { id:"sh45", lang:"hindi", cat:"Attitude Shayari",   author:"राजेंद्र प्रसाद शर्मा", likes:3100, trending:true,
    lines:"लोग क्या कहते हैं इससे क्या फ़र्क,\nमुझे बस आगे जाना है।\nनाम कमाना है दुनिया में,\nयही मेरा एकमात्र सपना है।" },

  { id:"sh46", lang:"hindi", cat:"Attitude Shayari",   author:"राजेंद्र प्रसाद शर्मा", likes:1880, trending:false,
    lines:"गिराने की कोशिश करते हैं जो,\nउन्हें पता नहीं मैं कैसे उठता हूँ।\nहर बार और मज़बूत होकर,\nफिर से खड़ा हो जाता हूँ।" },

  { id:"sh47", lang:"hindi", cat:"Attitude Shayari",   author:"राजेंद्र प्रसाद शर्मा", likes:2400, trending:false,
    lines:"अपनी तरह जीते हैं हम,\nकिसी की नकल नहीं करते।\nअसली होना बेहतर है,\nनकली अच्छाई से।" },

  { id:"sh48", lang:"hindi", cat:"Attitude Shayari",   author:"राजेंद्र प्रसाद शर्मा", likes:2750, trending:true,
    lines:"ज़माना समझता है हम गिर गए,\nपर हम उठ कर और आगे चले।\nयही हमारी पहचान है,\nहम हारते नहीं, हम सीखते हैं।" },

  { id:"sh49", lang:"hindi", cat:"Attitude Shayari",   author:"राजेंद्र प्रसाद शर्मा", likes:1650, trending:false,
    lines:"दुश्मन बनाने में मेरा वक़्त नहीं जाता,\nखुद को बेहतर बनाने में लगा हूँ।\nजब मंज़िल पर पहुँचूँगा,\nसब अपने आप जवाब मिल जाएगा।" },

  { id:"sh50", lang:"hindi", cat:"Attitude Shayari",   author:"राजेंद्र प्रसाद शर्मा", likes:2200, trending:false,
    lines:"जो चाहते हो वो पाना है,\nतो पहले खुद पर भरोसा रखो।\nदुनिया की परवाह छोड़ो,\nबस अपने सपनों पर ध्यान दो।" },

  // — Motivational Shayari (10) ——————————
  { id:"sh51", lang:"hindi", cat:"Motivational Shayari", author:"राजेंद्र प्रसाद शर्मा", likes:3800, trending:true,
    lines:"उठो, जागो और आगे बढ़ो,\nमंज़िल बुला रही है तुम्हें।\nहर रोज़ एक नया सफर है,\nहर कदम एक नई जीत है।" },

  { id:"sh52", lang:"hindi", cat:"Motivational Shayari", author:"राजेंद्र प्रसाद शर्मा", likes:3200, trending:true,
    lines:"हार मत मानो इस जहाँ में,\nहर मुश्किल का हल होता है।\nजो डटा रहे अपने सपनों पर,\nउसी का नसीब बदलता है।" },

  { id:"sh53", lang:"hindi", cat:"Motivational Shayari", author:"राजेंद्र प्रसाद शर्मा", likes:2700, trending:true,
    lines:"सपने देखना बंद मत करो,\nक्योंकि सपने ही हमें जीना सिखाते हैं।\nजो सपना देखता है और मेहनत करता है,\nवो एक दिन सफल ज़रूर होता है।" },

  { id:"sh54", lang:"hindi", cat:"Motivational Shayari", author:"राजेंद्र प्रसाद शर्मा", likes:2100, trending:false,
    lines:"मेहनत का कोई शॉर्टकट नहीं होता,\nपसीना बहाना पड़ता है।\nजो रात में जागकर काम करता है,\nदिन उसी का होता है।" },

  { id:"sh55", lang:"hindi", cat:"Motivational Shayari", author:"राजेंद्र प्रसाद शर्मा", likes:3500, trending:true,
    lines:"एक दिन वो दिन आएगा,\nजब सब देखेंगे और मानेंगे।\nआज की मेहनत और त्याग,\nकल की सफलता बनेगी।" },

  { id:"sh56", lang:"hindi", cat:"Motivational Shayari", author:"राजेंद्र प्रसाद शर्मा", likes:1900, trending:false,
    lines:"रुको मत, थको मत, झुको मत,\nराह कठिन है पर मंज़िल पास है।\nजो हिम्मत से चलता है,\nउसे राह मिल ही जाती है।" },

  { id:"sh57", lang:"hindi", cat:"Motivational Shayari", author:"राजेंद्र प्रसाद शर्मा", likes:2450, trending:false,
    lines:"अपने आप को कम मत आंको,\nतुम में भी अनगिनत शक्तियाँ हैं।\nज़रूरत है बस उन्हें पहचानने की,\nफिर कोई नहीं रोक सकता तुम्हें।" },

  { id:"sh58", lang:"hindi", cat:"Motivational Shayari", author:"राजेंद्र प्रसाद शर्मा", likes:2800, trending:true,
    lines:"सफलता उनको मिलती है,\nजो हार कर भी हारते नहीं।\nजो गिर कर भी उठते हैं,\nवही जीवन की दौड़ जीतते हैं।" },

  { id:"sh59", lang:"hindi", cat:"Motivational Shayari", author:"राजेंद्र प्रसाद शर्मा", likes:2100, trending:false,
    lines:"हर रात के बाद सुबह होती है,\nहर तूफान के बाद शांति आती है।\nहर मुश्किल के बाद आसानी है,\nबस थोड़ा और धैर्य रखो।" },

  { id:"sh60", lang:"hindi", cat:"Motivational Shayari", author:"राजेंद्र प्रसाद शर्मा", likes:2600, trending:true,
    lines:"जब कोई राह न दिखे,\nतो खुद अपनी राह बनाओ।\nजो कदम चलने से डरते हैं,\nउन्हें चलना सिखाओ।" },

  // — Life / Emotional / Heartbreak / Romantic / Success (30) ——
  { id:"sh61", lang:"hindi", cat:"Life Shayari",        author:"राजेंद्र प्रसाद शर्मा", likes:1870, trending:false,
    lines:"ज़िंदगी में जो मिला उसे संजोया,\nजो नहीं मिला उसे भूल गए।\nखुश रहना ही सबसे बड़ी कला है,\nयह सीखते-सीखते बड़े हुए।" },

  { id:"sh62", lang:"hindi", cat:"Life Shayari",        author:"राजेंद्र प्रसाद शर्मा", likes:2100, trending:false,
    lines:"ज़िंदगी एक सफर है,\nजिसमें रोज़ नए मोड़ आते हैं।\nकभी खुशी, कभी ग़म,\nयही तो ज़िंदगी के रंग हैं।" },

  { id:"sh63", lang:"hindi", cat:"Life Shayari",        author:"राजेंद्र प्रसाद शर्मा", likes:1650, trending:false,
    lines:"हर दिन एक नई शुरुआत है,\nहर पल एक नया मौका है।\nज़िंदगी को पूरी तरह जियो,\nकल का क्या पता।" },

  { id:"sh64", lang:"hindi", cat:"Emotional Shayari",   author:"राजेंद्र प्रसाद शर्मा", likes:2400, trending:true,
    lines:"भावनाओं को समझना आसान नहीं,\nदिल की भाषा सबसे मुश्किल है।\nजो दिल को पढ़ सके,\nवो इंसान सबसे अनोखा है।" },

  { id:"sh65", lang:"hindi", cat:"Emotional Shayari",   author:"राजेंद्र प्रसाद शर्मा", likes:1980, trending:false,
    lines:"जब दिल भारी हो और मन उदास हो,\nतो किसी से बात कर लो।\nशायद कुछ हल्का हो जाए,\nशायद दर्द कम हो जाए।" },

  { id:"sh66", lang:"hindi", cat:"Emotional Shayari",   author:"राजेंद्र प्रसाद शर्मा", likes:2200, trending:false,
    lines:"आँखों में आँसू, होठों पर मुस्कान,\nयही है इंसान की सबसे बड़ी पहचान।\nहर दर्द को छुपा कर जीता है,\nयही उसकी सबसे बड़ी ताक़त है।" },

  { id:"sh67", lang:"hindi", cat:"Heartbreak Shayari",  author:"राजेंद्र प्रसाद शर्मा", likes:3100, trending:true,
    lines:"टूटे दिल को जोड़ना आसान नहीं,\nपर नामुमकिन भी नहीं।\nवक़्त सब ठीक कर देता है,\nबस थोड़ा इंतज़ार करो।" },

  { id:"sh68", lang:"hindi", cat:"Heartbreak Shayari",  author:"राजेंद्र प्रसाद शर्मा", likes:2700, trending:true,
    lines:"जिसने दिल दिया था उसी ने तोड़ा,\nयही इश्क़ की रवायत है।\nपर इस दर्द से भी उठ कर,\nफिर से जीना पड़ता है।" },

  { id:"sh69", lang:"hindi", cat:"Heartbreak Shayari",  author:"राजेंद्र प्रसाद शर्मा", likes:2100, trending:false,
    lines:"बिछड़ने के बाद भी याद आते हो,\nभूलने की कोशिश में भी दिखते हो।\nयह दिल भी अजीब है,\nजिसे भूलना चाहे उसे ही याद करता है।" },

  { id:"sh70", lang:"hindi", cat:"Romantic Shayari",    author:"राजेंद्र प्रसाद शर्मा", likes:3400, trending:true,
    lines:"तुम्हारे पास बैठना ही काफी है,\nकुछ कहने की ज़रूरत नहीं।\nखामोश बैठ कर भी हम बात करते हैं,\nयही हमारे प्यार की ख़ासियत है।" },

  { id:"sh71", lang:"hindi", cat:"Romantic Shayari",    author:"राजेंद्र प्रसाद शर्मा", likes:2900, trending:true,
    lines:"तुम्हारे साथ हर जगह जन्नत लगती है,\nतुम्हारे बिना जन्नत भी सूनी लगती है।\nतुम मेरी दुनिया हो, मेरी जान हो,\nतुम्हारे बिना कुछ भी नहीं।" },

  { id:"sh72", lang:"hindi", cat:"Romantic Shayari",    author:"राजेंद्र प्रसाद शर्मा", likes:2450, trending:false,
    lines:"हाथ थामो तो यूँ लगे,\nपूरी दुनिया मिल गई हो।\nतुम्हारी हर छुअन में जादू है,\nजो दिल को सुकून देती है।" },

  { id:"sh73", lang:"hindi", cat:"Success Shayari",     author:"राजेंद्र प्रसाद शर्मा", likes:2800, trending:true,
    lines:"सफलता का स्वाद तभी मीठा होता है,\nजब मेहनत से कमाया हो।\nआसानी से मिली जीत में,\nवो मज़ा नहीं जो संघर्ष में है।" },

  { id:"sh74", lang:"hindi", cat:"Success Shayari",     author:"राजेंद्र प्रसाद शर्मा", likes:2300, trending:false,
    lines:"जब मंज़िल मिलती है,\nतो सारी तकलीफें भूल जाती हैं।\nउस एक पल की खुशी,\nसालों की मेहनत का फल होती है।" },

  { id:"sh75", lang:"hindi", cat:"Success Shayari",     author:"राजेंद्र प्रसाद शर्मा", likes:3100, trending:true,
    lines:"जो ठान लिया वो कर के दिखाएँगे,\nचाहे कितनी भी मुश्किलें आएँ।\nसफलता हमारा इंतज़ार कर रही है,\nबस थोड़ी और मेहनत करनी है।" },

  { id:"sh76", lang:"hindi", cat:"Life Shayari",        author:"राजेंद्र प्रसाद शर्मा", likes:1700, trending:false,
    lines:"रिश्ते निभाना आसान नहीं,\nपर निभाने वाले ही असली होते हैं।\nजो मुश्किल में साथ दे,\nवही सच्चा रिश्ता है।" },

  { id:"sh77", lang:"hindi", cat:"Emotional Shayari",   author:"राजेंद्र प्रसाद शर्मा", likes:2000, trending:false,
    lines:"दिल में जो है वो कह नहीं पाते,\nज़ुबान पर जो आए वो सच नहीं होता।\nइस दोराहे पर खड़े हैं हम,\nना कह पाते, ना रह पाते।" },

  { id:"sh78", lang:"hindi", cat:"Life Shayari",        author:"राजेंद्र प्रसाद शर्मा", likes:1850, trending:false,
    lines:"ज़िंदगी में कुछ चीज़ें बदलती नहीं,\nचाहे कितना भी बदलने की कोशिश करो।\nउन्हें स्वीकार करना ही समझदारी है,\nयही जीवन का सबसे बड़ा सबक है।" },

  { id:"sh79", lang:"hindi", cat:"Motivational Shayari", author:"राजेंद्र प्रसाद शर्मा", likes:2650, trending:true,
    lines:"जो बीत गया उसकी चिंता न करो,\nजो आने वाला है उसकी तैयारी करो।\nआज का दिन सबसे ख़ास है,\nइसे पूरी तरह जियो।" },

  { id:"sh80", lang:"hindi", cat:"Romantic Shayari",    author:"राजेंद्र प्रसाद शर्मा", likes:2200, trending:false,
    lines:"प्यार की कोई उम्र नहीं होती,\nप्यार की कोई सीमा नहीं होती।\nदिल जब किसी को अपना माने,\nवहीं से शुरू होती है एक नई दुनिया।" },

  { id:"sh81", lang:"hindi", cat:"Success Shayari",     author:"राजेंद्र प्रसाद शर्मा", likes:1950, trending:false,
    lines:"असफलता से घबराओ मत,\nयह सफलता का पहला कदम है।\nहर गलती एक सबक है,\nहर हार एक नई सीख।" },

  { id:"sh82", lang:"hindi", cat:"Heartbreak Shayari",  author:"राजेंद्र प्रसाद शर्मा", likes:2400, trending:false,
    lines:"जो छोड़ गए वो वापस न आएँ,\nयह दुनिया का दस्तूर है।\nपर जो याद छोड़ गए वो रहेंगी,\nज़िंदगी भर साथ।" },

  { id:"sh83", lang:"hindi", cat:"Friendship Shayari",  author:"राजेंद्र प्रसाद शर्मा", likes:1780, trending:false,
    lines:"दोस्त की एक बात में हज़ार मतलब होते हैं,\nदुश्मन की हज़ार बातों में एक भी नहीं।\nदोस्ती की कद्र करो यारों,\nयह बेशकीमती खज़ाना है।" },

  { id:"sh84", lang:"hindi", cat:"Sad Shayari",         author:"राजेंद्र प्रसाद शर्मा", likes:2050, trending:false,
    lines:"कभी-कभी ज़िंदगी में ऐसा दौर आता है,\nजब सब कुछ सही होते हुए भी गलत लगता है।\nउस वक़्त बस यक़ीन रखो,\nयह दौर भी गुज़र जाएगा।" },

  { id:"sh85", lang:"hindi", cat:"Life Shayari",        author:"राजेंद्र प्रसाद शर्मा", likes:1600, trending:false,
    lines:"हर पल को जीना सीखो,\nहर लम्हे को जियो।\nज़िंदगी बहुत छोटी है,\nकल का इंतज़ार मत करो।" },

  { id:"sh86", lang:"hindi", cat:"Motivational Shayari", author:"राजेंद्र प्रसाद शर्मा", likes:2900, trending:true,
    lines:"तुम्हारे अंदर वो ताक़त है,\nजो दुनिया बदल सकती है।\nबस उसे पहचानो और जगाओ,\nफिर कोई रोक नहीं सकता।" },

  { id:"sh87", lang:"hindi", cat:"Love Shayari",        author:"राजेंद्र प्रसाद शर्मा", likes:2750, trending:true,
    lines:"तुम्हारी याद एक मीठी तकलीफ है,\nजिसे भूलना नहीं चाहता।\nतुम्हारे बिना जीना मुश्किल है,\nतुम्हारे साथ जीना आसान।" },

  { id:"sh88", lang:"hindi", cat:"Emotional Shayari",   author:"राजेंद्र प्रसाद शर्मा", likes:1850, trending:false,
    lines:"कुछ दर्द ऐसे होते हैं,\nजो दिखते नहीं पर होते हैं।\nउन्हें शब्दों में बयान नहीं होता,\nबस महसूस किया जाता है।" },

  { id:"sh89", lang:"hindi", cat:"Attitude Shayari",    author:"राजेंद्र प्रसाद शर्मा", likes:3000, trending:true,
    lines:"अपनी चाल चलते हैं हम,\nदूसरों की राह नहीं चलते।\nहमें पता है कहाँ जाना है,\nइसलिए भटकते नहीं।" },

  { id:"sh90", lang:"hindi", cat:"Romantic Shayari",    author:"राजेंद्र प्रसाद शर्मा", likes:2350, trending:false,
    lines:"तेरी बातें सुनना ही काफी है,\nतेरी आवाज़ ही दवाई है।\nतू मेरे पास हो तो,\nदुनिया की कोई तकलीफ नहीं।" },

  { id:"sh91", lang:"hindi", cat:"Success Shayari",     author:"राजेंद्र प्रसाद शर्मा", likes:2700, trending:true,
    lines:"जब भी थको तो रुको, पर रुकने के बाद चलो,\nमंज़िल उसी की होती है जो चलता रहता है।\nज़िंदगी की दौड़ में,\nअंतिम कदम सबसे ज़रूरी है।" },

  { id:"sh92", lang:"hindi", cat:"Life Shayari",        author:"राजेंद्र प्रसाद शर्मा", likes:1700, trending:false,
    lines:"ज़िंदगी में कुछ रिश्ते अनमोल हैं,\nजिन्हें खोने का डर हमेशा रहता है।\nउन्हें सँभाल कर रखो दिल में,\nयही ज़िंदगी का सबसे बड़ा खज़ाना है।" },

  { id:"sh93", lang:"hindi", cat:"Sad Shayari",         author:"राजेंद्र प्रसाद शर्मा", likes:1950, trending:false,
    lines:"अकेलेपन में जब रात गुज़रती है,\nतो सोचते हैं कितने अकेले हैं।\nपर यह अकेलापन भी एक सबक देता है,\nखुद से मिलने का मौका देता है।" },

  { id:"sh94", lang:"hindi", cat:"Friendship Shayari",  author:"राजेंद्र प्रसाद शर्मा", likes:2100, trending:false,
    lines:"यारी का एक क़ानून होता है,\nमुश्किल में साथ देना।\nजो इस क़ानून को माने,\nवो असली यार है।" },

  { id:"sh95", lang:"hindi", cat:"Heartbreak Shayari",  author:"राजेंद्र प्रसाद शर्मा", likes:2800, trending:true,
    lines:"दिल टूटा पर ज़िंदगी नहीं रुकी,\nआँसू आए पर हँसना नहीं छोड़ा।\nहर ज़ख्म पर मरहम लगाया,\nऔर फिर से जीना शुरू किया।" },

  { id:"sh96", lang:"hindi", cat:"Motivational Shayari", author:"राजेंद्र प्रसाद शर्मा", likes:3200, trending:true,
    lines:"आज की मेहनत ही कल की नींव है,\nआज का त्याग ही कल की जीत है।\nजो आज बोता है वो कल काटता है,\nइसलिए आज से शुरुआत करो।" },

  { id:"sh97", lang:"hindi", cat:"Love Shayari",        author:"राजेंद्र प्रसाद शर्मा", likes:2500, trending:false,
    lines:"तुम नहीं हो तो यह दुनिया अधूरी है,\nतुम हो तो यह दुनिया पूरी है।\nतुम्हारे बिना ज़िंदगी का कोई मतलब नहीं,\nतुम ही मेरे जीने की वजह हो।" },

  { id:"sh98", lang:"hindi", cat:"Attitude Shayari",    author:"राजेंद्र प्रसाद शर्मा", likes:2650, trending:true,
    lines:"हम वो हैं जो मुड़ के नहीं देखते,\nआगे बढ़ना ही हमारा स्वभाव है।\nजो पीछे रह गया वो रहने दो,\nहमें तो आगे जाना है।" },

  { id:"sh99", lang:"hindi", cat:"Emotional Shayari",   author:"राजेंद्र प्रसाद शर्मा", likes:1900, trending:false,
    lines:"कुछ बातें दिल में रह जाती हैं,\nज़ुबान पर आते-आते रुक जाती हैं।\nकाश कोई होता जो समझता,\nबिना कहे ही सब जानता।" },

  { id:"sh100",lang:"hindi", cat:"Romantic Shayari",    author:"राजेंद्र प्रसाद शर्मा", likes:3000, trending:true,
    lines:"तुम्हारे साथ हर पल बेमिसाल है,\nतुम्हारे साथ जीना एक जश्न है।\nप्यार है तो ज़िंदगी है,\nतुम हो तो दुनिया है।" },

  // ══════════════════════════════════════════
  //  ENGLISH SHAYARI
  // ══════════════════════════════════════════

  // — Love (20) ——————————————————————————
  { id:"se1",  lang:"english", cat:"Love Shayari",       author:"Rajendra Prasad Sharma", likes:2100, trending:true,
    lines:"Your smile is the morning I was waiting for,\nYour voice the song that opens every door.\nIn all the world's great wonders, you remain\nThe one I'd choose again and yet again." },

  { id:"se2",  lang:"english", cat:"Love Shayari",       author:"Rajendra Prasad Sharma", likes:1780, trending:false,
    lines:"I have loved you in the silence between words,\nIn the pause before the answer, warm and long.\nLove is not always said — it's often heard\nIn the way we stay when everything goes wrong." },

  { id:"se3",  lang:"english", cat:"Love Shayari",       author:"Rajendra Prasad Sharma", likes:2450, trending:true,
    lines:"You are the reason seasons feel like grace,\nThe reason every ordinary day\nBecomes a story worth the telling twice.\nYou are why I choose to stay." },

  { id:"se4",  lang:"english", cat:"Love Shayari",       author:"Rajendra Prasad Sharma", likes:1650, trending:false,
    lines:"Not the grand gestures, not the borrowed lines —\nBut your hand on mine when sleep won't come,\nThe quiet trust that needs no grand designs:\nThis is the love I've always wanted. Some." },

  { id:"se5",  lang:"english", cat:"Love Shayari",       author:"Rajendra Prasad Sharma", likes:2800, trending:true,
    lines:"If distance is a test, then we have passed,\nIf time is a judge, then we have won.\nWhatever this world throws at us to last,\nI find my way back to you — always one." },

  { id:"se6",  lang:"english", cat:"Love Shayari",       author:"Rajendra Prasad Sharma", likes:1900, trending:false,
    lines:"I did not know what home meant until you,\nDid not know what warmth was until your name.\nYou taught me that the truest things are few,\nAnd love, when real, is always worth the flame." },

  { id:"se7",  lang:"english", cat:"Love Shayari",       author:"Rajendra Prasad Sharma", likes:2200, trending:false,
    lines:"You are the thought that interrupts my sleep,\nThe first thing that arrives when morning breaks.\nYou are the promise I intend to keep,\nThe only choice that nothing ever shakes." },

  { id:"se8",  lang:"english", cat:"Love Shayari",       author:"Rajendra Prasad Sharma", likes:3100, trending:true,
    lines:"To love you is to know the value of\nA single word, a glance across a room.\nTo love you is to understand that love\nIs not the garden — it is tending to the bloom." },

  { id:"se9",  lang:"english", cat:"Love Shayari",       author:"Rajendra Prasad Sharma", likes:1450, trending:false,
    lines:"Your laughter is the cure I never knew I sought,\nYour presence is the answer, not the prayer.\nThe best things in my life were never bought —\nThey walked in quietly and settled there." },

  { id:"se10", lang:"english", cat:"Love Shayari",       author:"Rajendra Prasad Sharma", likes:2650, trending:true,
    lines:"Tell me every story you have never told,\nI have time enough and heart enough to hear.\nLove is not the new — it is the old,\nThe kind that only grows in year on year." },

  { id:"se11", lang:"english", cat:"Love Shayari",       author:"Rajendra Prasad Sharma", likes:1750, trending:false,
    lines:"In all the lives I might have lived before,\nI hope I found you somewhere in each one.\nAnd in the lives that wait beyond this shore,\nI hope you are the one I'm running to." },

  { id:"se12", lang:"english", cat:"Love Shayari",       author:"Rajendra Prasad Sharma", likes:2300, trending:false,
    lines:"Love is a verb, not a noun on a shelf,\nIt is the act of showing up each day.\nIt is the choosing not to choose yourself,\nWhen someone else needs you to stay." },

  { id:"se13", lang:"english", cat:"Love Shayari",       author:"Rajendra Prasad Sharma", likes:2050, trending:false,
    lines:"The world has many beauties, this is true —\nBut none that makes me pause the way you do.\nYou are the sentence I could read all day,\nThe word I almost know but cannot say." },

  { id:"se14", lang:"english", cat:"Love Shayari",       author:"Rajendra Prasad Sharma", likes:1600, trending:false,
    lines:"You gave me back the part of me that hid,\nYou made it safe to be entirely known.\nOf all the gentle things that love has did,\nThe best was this: you made me feel at home." },

  { id:"se15", lang:"english", cat:"Love Shayari",       author:"Rajendra Prasad Sharma", likes:2750, trending:true,
    lines:"I was half a story looking for its page,\nA candle that had never found its room.\nThen you arrived — you quieted the age —\nAnd everything that was a bud became a bloom." },

  { id:"se16", lang:"english", cat:"Love Shayari",       author:"Rajendra Prasad Sharma", likes:1950, trending:false,
    lines:"Some loves arrive like weather, unannounced,\nAnd settle in before you know they're there.\nBy the time you know, you find they've bounced\nThrough every corner — love is everywhere." },

  { id:"se17", lang:"english", cat:"Love Shayari",       author:"Rajendra Prasad Sharma", likes:2500, trending:true,
    lines:"I do not ask for perfect — only true.\nI do not need the stars — I need your hand.\nThe greatest gift that love can ever do\nIs help the other person understand." },

  { id:"se18", lang:"english", cat:"Love Shayari",       author:"Rajendra Prasad Sharma", likes:1700, trending:false,
    lines:"Your kindness is a language I have learned,\nYour patience is a gift I still unwrap.\nIn everything you gave and nothing earned,\nYou drew a map I'll always circle back." },

  { id:"se19", lang:"english", cat:"Love Shayari",       author:"Rajendra Prasad Sharma", likes:2200, trending:false,
    lines:"We don't need an occasion to love well,\nEvery ordinary Tuesday is enough.\nLove lives in the things we never tell,\nIn the soft made soft inside the rough." },

  { id:"se20", lang:"english", cat:"Love Shayari",       author:"Rajendra Prasad Sharma", likes:3000, trending:true,
    lines:"Of all the things the years have given me,\nYour love remains the greatest, brightest part.\nI'd lose the world and still live happily,\nAs long as you remain inside my heart." },

  // — Sad (10) ——————————————————————————
  { id:"se21", lang:"english", cat:"Sad Shayari",        author:"Rajendra Prasad Sharma", likes:2200, trending:true,
    lines:"Some goodbyes are not spoken, only felt —\nA door that closes just a bit too soft.\nThe silence after is the hand that's dealt,\nAnd we learn to carry what was left aloft." },

  { id:"se22", lang:"english", cat:"Sad Shayari",        author:"Rajendra Prasad Sharma", likes:1850, trending:false,
    lines:"There is a kind of grief that has no name,\nThat lives behind the eyes and will not speak.\nYou carry it exactly like a flame —\nIt warms but also burns through every week." },

  { id:"se23", lang:"english", cat:"Sad Shayari",        author:"Rajendra Prasad Sharma", likes:1600, trending:false,
    lines:"I smiled today for reasons no one saw,\nAnd cried tonight for reasons no one knew.\nThis is the life we live without a law —\nFull of things we feel and things we never show." },

  { id:"se24", lang:"english", cat:"Sad Shayari",        author:"Rajendra Prasad Sharma", likes:2400, trending:true,
    lines:"The ones we love the most can hurt us most —\nNot out of cruelty, but out of trust.\nWe let them past the walls, and then the cost\nIs paid in tears when things return to dust." },

  { id:"se25", lang:"english", cat:"Sad Shayari",        author:"Rajendra Prasad Sharma", likes:1950, trending:false,
    lines:"Empty chairs remember those who sat,\nAnd empty rooms remember voices clear.\nGrief is just the love that has gone flat —\nAll the love that has nowhere to appear." },

  // — Friendship (10) ——————————————————
  { id:"se26", lang:"english", cat:"Friendship Shayari", author:"Rajendra Prasad Sharma", likes:2500, trending:true,
    lines:"A friend is someone who has heard your worst\nAnd chosen you regardless, still the same.\nWho shows up not just at your best and first,\nBut in the dark, and asks no praise or claim." },

  { id:"se27", lang:"english", cat:"Friendship Shayari", author:"Rajendra Prasad Sharma", likes:1900, trending:false,
    lines:"Friendship is not measured in the years\nBut in the moments someone held you up.\nWho sat beside you through the darkest fears,\nAnd refilled, without being asked, your cup." },

  { id:"se28", lang:"english", cat:"Friendship Shayari", author:"Rajendra Prasad Sharma", likes:2100, trending:false,
    lines:"The truest friends tell you what no one will,\nNot to be cruel but because they care.\nThey love you in the valley, on the hill,\nThey love you everywhere." },

  { id:"se29", lang:"english", cat:"Friendship Shayari", author:"Rajendra Prasad Sharma", likes:1700, trending:false,
    lines:"Good friends are the chapters in your book\nThat you go back to when the new ones bore.\nThey are the ones for whom you always look\nWhen you need reminding what you're for." },

  { id:"se30", lang:"english", cat:"Friendship Shayari", author:"Rajendra Prasad Sharma", likes:2350, trending:true,
    lines:"We have laughed in rooms the world forgot,\nWe have held each other through the fall.\nFriendship is the single golden knot\nThat tightens most when you've lost all." },

  // — Attitude (10) ——————————————————
  { id:"se31", lang:"english", cat:"Attitude Shayari",   author:"Rajendra Prasad Sharma", likes:3200, trending:true,
    lines:"I am not the version they imagined me to be,\nI am the one I've shaped through every scar.\nUnderestimate the quiet ones — you'll see:\nThe quietest rivers travel the farthest far." },

  { id:"se32", lang:"english", cat:"Attitude Shayari",   author:"Rajendra Prasad Sharma", likes:2700, trending:true,
    lines:"I do not rise for applause or for name,\nI rise because this life is mine to build.\nLet those who doubt me watch and feel their shame\nWhen they see the cup I chose to fill." },

  { id:"se33", lang:"english", cat:"Attitude Shayari",   author:"Rajendra Prasad Sharma", likes:2000, trending:false,
    lines:"I have been broken — I will not pretend.\nBut broken things are not the same as gone.\nThe cracked ones let the light in, in the end,\nAnd that's precisely how we carry on." },

  { id:"se34", lang:"english", cat:"Attitude Shayari",   author:"Rajendra Prasad Sharma", likes:2400, trending:false,
    lines:"Your opinion of me is yours to keep,\nMy opinion of myself is mine to tend.\nI do not lose my sleep over your sleep,\nI know precisely where my stories end." },

  { id:"se35", lang:"english", cat:"Attitude Shayari",   author:"Rajendra Prasad Sharma", likes:2900, trending:true,
    lines:"They said I wouldn't — watch me anyway.\nThey counted me out — I'm still counting in.\nEvery day I wake is a day to say:\nI showed up, and that's where I begin." },

  // — Motivational (10) —————————————————
  { id:"se36", lang:"english", cat:"Motivational Shayari", author:"Rajendra Prasad Sharma", likes:3500, trending:true,
    lines:"You are not behind — you are on your own road.\nStop comparing your chapter one to their ten.\nThe weight you carry is your own sacred load,\nAnd you will rise, if not now, then again." },

  { id:"se37", lang:"english", cat:"Motivational Shayari", author:"Rajendra Prasad Sharma", likes:2900, trending:true,
    lines:"Every master was once a beginner lost,\nEvery sunrise came after a night.\nWhatever your dream, whatever the cost,\nShow up one more time and fight." },

  { id:"se38", lang:"english", cat:"Motivational Shayari", author:"Rajendra Prasad Sharma", likes:2400, trending:false,
    lines:"The only failure is the one you keep,\nThe rest are lessons wearing failure's clothes.\nDig deep into whatever made you weep —\nThat's where your greatest strength still grows." },

  { id:"se39", lang:"english", cat:"Motivational Shayari", author:"Rajendra Prasad Sharma", likes:3100, trending:true,
    lines:"Start before you're ready — readiness\nIs just a story fear tells very well.\nThe world respects the one who says yes,\nAnd steps across the comfortable spell." },

  { id:"se40", lang:"english", cat:"Motivational Shayari", author:"Rajendra Prasad Sharma", likes:2700, trending:true,
    lines:"You have survived every hard day so far,\nOne hundred percent of your worst.\nThat record stands. You are further than\nYou think — and the best is not the first." },

  // — Life / Emotional / Heartbreak / Romantic / Success (35) ——
  { id:"se41", lang:"english", cat:"Life Shayari",        author:"Rajendra Prasad Sharma", likes:1900, trending:false,
    lines:"Life is not a problem to be solved,\nBut a story to be lived with open hands.\nLet the questions stay until resolved,\nAnd trust the grace that no one understands." },

  { id:"se42", lang:"english", cat:"Life Shayari",        author:"Rajendra Prasad Sharma", likes:2100, trending:false,
    lines:"Some seasons last too long and some too brief,\nBut seasons do not last — they only pass.\nHold the joy, hold the grief — hold every leaf,\nBecause the good days too, go fast." },

  { id:"se43", lang:"english", cat:"Emotional Shayari",   author:"Rajendra Prasad Sharma", likes:2300, trending:true,
    lines:"The bravest thing I ever had to do\nWas let someone see me when I fell.\nTo say, I'm not alright, to say it true —\nTo stop pretending I was doing well." },

  { id:"se44", lang:"english", cat:"Emotional Shayari",   author:"Rajendra Prasad Sharma", likes:1800, trending:false,
    lines:"Not all wounds are visible to sight,\nNot all storms announce with thunder and rain.\nSome battles happen only in the night,\nAnd leave no scar the morning can explain." },

  { id:"se45", lang:"english", cat:"Heartbreak Shayari",  author:"Rajendra Prasad Sharma", likes:2700, trending:true,
    lines:"You left and took the light you used to be,\nBut left the memory of how the light once fell.\nI live in that remaining light, you see —\nAnd honestly, I'm learning to live well." },

  { id:"se46", lang:"english", cat:"Heartbreak Shayari",  author:"Rajendra Prasad Sharma", likes:2200, trending:false,
    lines:"I will not call what we had a mistake,\nI'll call it what it was: a real thing, real.\nSome loves are not forever — for their sake,\nThey were exactly what we needed to feel." },

  { id:"se47", lang:"english", cat:"Romantic Shayari",    author:"Rajendra Prasad Sharma", likes:3000, trending:true,
    lines:"Sit with me a little while tonight,\nLet the world outside do what it will.\nHere between us there is enough light,\nAnd enough of everything — be still." },

  { id:"se48", lang:"english", cat:"Romantic Shayari",    author:"Rajendra Prasad Sharma", likes:2500, trending:true,
    lines:"I don't need the world to know your name,\nI only need to know it for myself.\nSome loves don't want the spotlight or the fame —\nThey live quietly on the highest shelf." },

  { id:"se49", lang:"english", cat:"Success Shayari",     author:"Rajendra Prasad Sharma", likes:2800, trending:true,
    lines:"Success is not a trophy on a shelf,\nIt is the shape of how you've chosen to grow.\nThe greatest victory belongs to yourself —\nTo become more than what you used to know." },

  { id:"se50", lang:"english", cat:"Success Shayari",     author:"Rajendra Prasad Sharma", likes:2300, trending:false,
    lines:"They'll celebrate your victory in the sun,\nBut few will know the dark that came before.\nThe unseen work, the battles fought and won —\nThat is the truest story, at the core." },

  { id:"se51", lang:"english", cat:"Life Shayari",        author:"Rajendra Prasad Sharma", likes:1750, trending:false,
    lines:"The ordinary days are the ones that count,\nThe ones where nothing grand or famous falls.\nLife is built upon a quiet account\nOf small good choices, answered honest calls." },

  { id:"se52", lang:"english", cat:"Motivational Shayari", author:"Rajendra Prasad Sharma", likes:2600, trending:true,
    lines:"Don't wait for the courage before you begin,\nCourage is a thing that follows action.\nStep into the work — let courage in,\nIt will follow you with satisfaction." },

  { id:"se53", lang:"english", cat:"Emotional Shayari",   author:"Rajendra Prasad Sharma", likes:2000, trending:false,
    lines:"It is all right to grieve what didn't last,\nTo mourn the version that you had to leave.\nThe future needs you to release the past —\nSo breathe, and let yourself begin to breathe." },

  { id:"se54", lang:"english", cat:"Heartbreak Shayari",  author:"Rajendra Prasad Sharma", likes:2500, trending:true,
    lines:"Healing is not linear — this I know.\nSome days you're stronger than you were before.\nSome days you find the tears have started, so\nYou let them, and then close the door." },

  { id:"se55", lang:"english", cat:"Romantic Shayari",    author:"Rajendra Prasad Sharma", likes:2850, trending:true,
    lines:"You make the difficult things feel possible,\nYou make the ordinary feel like grace.\nWith you, the world is somehow reconciled —\nAnd I am glad I have this particular space." },

  { id:"se56", lang:"english", cat:"Attitude Shayari",    author:"Rajendra Prasad Sharma", likes:2400, trending:false,
    lines:"My silence is a form of self-respect,\nNot every battle deserves a reply.\nI know my worth — I do not need to check\nWith anyone below my standard sky." },

  { id:"se57", lang:"english", cat:"Friendship Shayari",  author:"Rajendra Prasad Sharma", likes:2100, trending:false,
    lines:"We don't need the same opinions to be close,\nWe need the same commitment to be kind.\nFriendship is the thing I value most —\nThe knot of honest heart and honest mind." },

  { id:"se58", lang:"english", cat:"Sad Shayari",         author:"Rajendra Prasad Sharma", likes:1900, trending:false,
    lines:"Some people leave and take a piece of you —\nNot stolen, only carried without knowing.\nYou don't begrudge them what they traveled to,\nYou just feel the gap where you'd been glowing." },

  { id:"se59", lang:"english", cat:"Life Shayari",        author:"Rajendra Prasad Sharma", likes:2000, trending:false,
    lines:"Regret less — not because the past was fine,\nBut because the past already is.\nEverything you are was shaped by that design —\nAnd you are not yet what you will be." },

  { id:"se60", lang:"english", cat:"Success Shayari",     author:"Rajendra Prasad Sharma", likes:2700, trending:true,
    lines:"The mountain does not care about your plan —\nIt only asks if you will keep on climbing.\nBe the kind of relentless, stubborn one\nWho finds the next handhold without whining." },

  { id:"se61", lang:"english", cat:"Romantic Shayari",    author:"Rajendra Prasad Sharma", likes:2300, trending:false,
    lines:"I fell in love with how you read the room,\nWith how you listen until someone's done.\nWith how you carry sunshine through the gloom —\nWith how you are when nobody has won." },

  { id:"se62", lang:"english", cat:"Motivational Shayari", author:"Rajendra Prasad Sharma", likes:2800, trending:true,
    lines:"You are allowed to start again today,\nAs many times as starting takes.\nThe only life wasted is the one that stays\nWhere it has always been, afraid of mistakes." },

  { id:"se63", lang:"english", cat:"Life Shayari",        author:"Rajendra Prasad Sharma", likes:1850, trending:false,
    lines:"Be gentle with the person you have been,\nThat version did the best that they could do.\nSelf-compassion is the discipline\nOf giving grace the way you'd give to you." },

  { id:"se64", lang:"english", cat:"Emotional Shayari",   author:"Rajendra Prasad Sharma", likes:2200, trending:false,
    lines:"Feeling everything deeply is not weak —\nIt is how the deepest people live.\nThose who feel the most are the ones who seek\nThe truest things that human lives can give." },

  { id:"se65", lang:"english", cat:"Heartbreak Shayari",  author:"Rajendra Prasad Sharma", likes:2600, trending:true,
    lines:"What we had was real, and so was ending it.\nBoth things can be true at the same time.\nLoss is not a sentence to regret — it\nIs simply the other side of every prime." },

  { id:"se66", lang:"english", cat:"Attitude Shayari",    author:"Rajendra Prasad Sharma", likes:2100, trending:false,
    lines:"Let them talk — your actions speak in due course.\nLet them doubt — your results will introduce.\nThe only way to prove them wrong, of course,\nIs to keep going until they applaud." },

  { id:"se67", lang:"english", cat:"Friendship Shayari",  author:"Rajendra Prasad Sharma", likes:1950, trending:false,
    lines:"Some friendships are the home you didn't know\nYou were looking for until you walked inside.\nWhere all the awkward parts of you can show,\nAnd still be loved — and that is all you need." },

  { id:"se68", lang:"english", cat:"Success Shayari",     author:"Rajendra Prasad Sharma", likes:2450, trending:false,
    lines:"Build your dream so you have something real\nTo hand to those who come after you're gone.\nThe greatest success is what others feel\nBecause you cared enough to carry on." },

  { id:"se69", lang:"english", cat:"Sad Shayari",         author:"Rajendra Prasad Sharma", likes:2000, trending:false,
    lines:"The hardest goodbyes are the ones unsaid,\nThe ones that lived forever in the pause.\nWhere words got caught somewhere inside the head,\nAnd silence filled up all the empty doors." },

  { id:"se70", lang:"english", cat:"Romantic Shayari",    author:"Rajendra Prasad Sharma", likes:2700, trending:true,
    lines:"The best love is the one that doesn't ask\nFor you to be different from what you are.\nIt simply holds the light up like a flask —\nAnd says, here, drink — you've traveled very far." },

  { id:"se71", lang:"english", cat:"Life Shayari",        author:"Rajendra Prasad Sharma", likes:1800, trending:false,
    lines:"There is no perfect version of your life —\nThere is only the version that you live.\nStop waiting for the end of every strife;\nThe best life is the one you learn to give." },

  { id:"se72", lang:"english", cat:"Motivational Shayari", author:"Rajendra Prasad Sharma", likes:2900, trending:true,
    lines:"One more day of showing up is worth\nMore than a hundred days of thinking about it.\nEvery small consistent act on earth\nOutlasts the inspiration, without a doubt." },

  { id:"se73", lang:"english", cat:"Emotional Shayari",   author:"Rajendra Prasad Sharma", likes:2100, trending:false,
    lines:"The things we carry quietly are heavy,\nHeavier than those we speak aloud.\nFind one person who can make you ready\nTo lower what you've carried like a shroud." },

  { id:"se74", lang:"english", cat:"Attitude Shayari",    author:"Rajendra Prasad Sharma", likes:2600, trending:true,
    lines:"I did not come this far to only come this far.\nI came to see what waits beyond the bend.\nEach day I am the navigator's star —\nAnd I won't stop until I reach the end." },

  { id:"se75", lang:"english", cat:"Heartbreak Shayari",  author:"Rajendra Prasad Sharma", likes:2200, trending:false,
    lines:"Loving someone doesn't always mean forever.\nSometimes it means loving someone free.\nThe kindest gift you give each other, ever,\nIs knowing when to let what is, just be." },

  { id:"se76", lang:"english", cat:"Friendship Shayari",  author:"Rajendra Prasad Sharma", likes:2300, trending:false,
    lines:"Pick up the phone and call the one you've missed.\nSend the message that you've been writing long.\nThe people who deserve to be on your list\nAre the ones who make you feel you can't go wrong." },

  { id:"se77", lang:"english", cat:"Success Shayari",     author:"Rajendra Prasad Sharma", likes:2800, trending:true,
    lines:"The ones who win the race are not always fast —\nThey are the ones who simply do not quit.\nThe tortoise of the ancient fable last\nTaught us that consistency is it." },

  { id:"se78", lang:"english", cat:"Sad Shayari",         author:"Rajendra Prasad Sharma", likes:1700, trending:false,
    lines:"Not every chapter ends the way we planned,\nNot every character stays through the close.\nBut stories that are honest, raw, and grand\nAre always richer for what everyone knows." },

  { id:"se79", lang:"english", cat:"Romantic Shayari",    author:"Rajendra Prasad Sharma", likes:2950, trending:true,
    lines:"I love you in the language without words —\nIn a cup of tea, a blanket, staying late.\nIn the small ways love most clearly heard:\nI chose you, and I'd choose you in any state." },

  { id:"se80", lang:"english", cat:"Life Shayari",        author:"Rajendra Prasad Sharma", likes:2050, trending:false,
    lines:"Water your own garden before you seek\nThe beauty in a stranger's plot of ground.\nThe flowers that you need are in the week\nYou spent attending to what you have found." },

  { id:"se81", lang:"english", cat:"Motivational Shayari", author:"Rajendra Prasad Sharma", likes:3000, trending:true,
    lines:"No one remembers the years of learning,\nOnly the moment the learning paid.\nKeep going through the difficult discerning —\nThe stage is set. Don't be afraid." },

  { id:"se82", lang:"english", cat:"Emotional Shayari",   author:"Rajendra Prasad Sharma", likes:1900, trending:false,
    lines:"It is enough to feel it and move on,\nYou don't need answers for every why.\nSome feelings are just music, then they're gone —\nLet them play, then let them wave goodbye." },

  { id:"se83", lang:"english", cat:"Attitude Shayari",    author:"Rajendra Prasad Sharma", likes:2500, trending:true,
    lines:"I have learned to be unbothered by the noise,\nTo keep my peace as others raise their voice.\nThe clearest sign of confidence, the poise:\nMoving forward without second choice." },

  { id:"se84", lang:"english", cat:"Heartbreak Shayari",  author:"Rajendra Prasad Sharma", likes:2100, trending:false,
    lines:"The door is closed but I kept the memory warm —\nNot to return, but to remember I was loved.\nSome rooms we leave intact against the storm,\nTo remind us where our softest part once lived." },

  { id:"se85", lang:"english", cat:"Friendship Shayari",  author:"Rajendra Prasad Sharma", likes:2200, trending:false,
    lines:"True friends don't vanish when the weather turns,\nThey are the ones who show up in the rain.\nWhat a friendship loses and what it earns\nIs most clearly seen in seasons of great pain." },

  { id:"se86", lang:"english", cat:"Love Shayari",        author:"Rajendra Prasad Sharma", likes:2600, trending:true,
    lines:"The day I met you, something rearranged\nIts self inside my chest and settled new.\nI didn't know then just how much had changed —\nI only knew I wanted more of you." },

  { id:"se87", lang:"english", cat:"Success Shayari",     author:"Rajendra Prasad Sharma", likes:2700, trending:true,
    lines:"Dream it, then work it — in that order.\nDreams without work are wishes in the air.\nWork without dreams has no reason or border.\nBoth together? That's the rarest pair." },

  { id:"se88", lang:"english", cat:"Sad Shayari",         author:"Rajendra Prasad Sharma", likes:1850, trending:false,
    lines:"Missing someone is a form of love —\nA tax the heart pays for having cared.\nGrief is proof of all the good stuff\nThat happened when you dared to share." },

  { id:"se89", lang:"english", cat:"Romantic Shayari",    author:"Rajendra Prasad Sharma", likes:2800, trending:true,
    lines:"Love me in the language of small things —\nA note, a meal, a door held open wide.\nThose are the acts that give the heart its wings,\nMore than the grand gestures set aside." },

  { id:"se90", lang:"english", cat:"Life Shayari",        author:"Rajendra Prasad Sharma", likes:2100, trending:false,
    lines:"Not everything that falls apart is broken,\nSome things fall apart to be remade.\nNot every painful chapter leaves a token —\nSome simply clear the ground where something's laid." },

  { id:"se91", lang:"english", cat:"Motivational Shayari", author:"Rajendra Prasad Sharma", likes:2400, trending:false,
    lines:"Your story is not over — not by far.\nThe best chapters haven't yet been penned.\nYou are the writer, you decide who you are —\nAnd right now, you're somewhere in the middle end." },

  { id:"se92", lang:"english", cat:"Emotional Shayari",   author:"Rajendra Prasad Sharma", likes:2000, trending:false,
    lines:"It's okay to not be okay right now.\nIt's okay to need a moment, need a week.\nStrength is not the refusal to bow —\nStrength is finding what your tears would speak." },

  { id:"se93", lang:"english", cat:"Attitude Shayari",    author:"Rajendra Prasad Sharma", likes:2750, trending:true,
    lines:"They underestimated quiet and kind.\nThey took the gentle for the weak.\nBut watch the ones who've made up their mind —\nThe gentle ones are those who peak." },

  { id:"se94", lang:"english", cat:"Heartbreak Shayari",  author:"Rajendra Prasad Sharma", likes:2300, trending:false,
    lines:"I am not who I was before we ended,\nI am both less and more in different ways.\nSome parts of me were broken, some were mended —\nAnd I am still here, counting better days." },

  { id:"se95", lang:"english", cat:"Friendship Shayari",  author:"Rajendra Prasad Sharma", likes:2100, trending:false,
    lines:"The best investment is in people — true.\nNot portfolios, not properties or land.\nA friend who shows up when the sky turns blue\nIs worth more than all the gold at hand." },

  { id:"se96", lang:"english", cat:"Success Shayari",     author:"Rajendra Prasad Sharma", likes:2650, trending:true,
    lines:"They'll say you peaked too early or too late.\nIgnore them — peaks are not on schedules made.\nYour breakthrough has its own appointed date —\nJust be there when the harvest is not delayed." },

  { id:"se97", lang:"english", cat:"Sad Shayari",         author:"Rajendra Prasad Sharma", likes:1950, trending:false,
    lines:"I sat with my sadness like a guest,\nI gave it tea and let it say its piece.\nAnd when it finally finished, I confessed:\nI'm learning how to give my hurting peace." },

  { id:"se98", lang:"english", cat:"Romantic Shayari",    author:"Rajendra Prasad Sharma", likes:3100, trending:true,
    lines:"You are the comma in my endless sentence —\nThe pause that makes the meaning clear.\nYou are the warmth inside the cold repentance,\nThe reason I am glad that I am here." },

  { id:"se99", lang:"english", cat:"Life Shayari",        author:"Rajendra Prasad Sharma", likes:2200, trending:false,
    lines:"The years go quietly — don't let them pass\nWithout looking up from what you chase.\nThe fastest time is time poured into glass —\nMake sure you're present in the race." },

  { id:"se100",lang:"english", cat:"Motivational Shayari", author:"Rajendra Prasad Sharma", likes:3300, trending:true,
    lines:"You are your only real competition.\nCompare yourself to who you were before.\nThe only worthy, honest expedition\nIs to become, each day, a little more." },
];
