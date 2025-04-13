const fetchReviews = (productURL) => {
  const data = {
    "https://www.amazon.de/-/en/Necklace-stainless-necklace-Stainless-Gemstone/dp/B0C348SRDV?pd_rd_w=C7Nhi&content-id=amzn1.sym.84725dcd-5e7f-4faa-928e-e35ccea16fec&pf_rd_p=84725dcd-5e7f-4faa-928e-e35ccea16fec&pf_rd_r=189HFPAA06ABVW6AXDZT&pd_rd_wg=j7pCc&pd_rd_r=303ed568-1e46-40ee-bf4b-a734b33423c7&pd_rd_i=B0C348SRDV&ref_=l1m-premium_B0C348SRDV&th=1":
      {
        reviews: [
          "Collana maschile",
          "Ottimo articolo, il regalo è stato mooolto gradito",
          "Bonito y con clase",
          "Un collar bonito y con clase",
          "Muy satisfecha",
          "Muy satisfecha con la compra",
          "ottimo prodotto",
          "collana come da descrizione",
        ],
        imagePath:
          "https://m.media-amazon.com/images/I/51-34V382IL._AC_SY675_.jpg",
        title: "Diesel Necklace for men, chain stainless steel necklace",
      },
    "https://www.amazon.de/-/en/Exchange-Stainless-Bracelet-Lobster-Gemstone/dp/B07ZHD7QH2?pd_rd_w=C7Nhi&content-id=amzn1.sym.84725dcd-5e7f-4faa-928e-e35ccea16fec&pf_rd_p=84725dcd-5e7f-4faa-928e-e35ccea16fec&pf_rd_r=189HFPAA06ABVW6AXDZT&pd_rd_wg=j7pCc&pd_rd_r=303ed568-1e46-40ee-bf4b-a734b33423c7&pd_rd_i=B07ZHD7QH2&ref_=l1m-premium_B07ZHD7QH2&th=1":
      {
        reviews: [
          "Good quality and fast delivery",
          "Das Armband ist sehr stabil gefertig, was mir nicht gefällt das es sehr matt ist. Man hätte es einwenig glänzend polieren können. Habe es weiter verschenkt.",
          "Feels and looks just right.Materials are nice and allergies free",
          "Habe das Armband kontinuierlich an und es sieht noch aus wie am ersten Tag. Es sieht nach mehr aus als es eigentlich ist. Da es auch meiner besseren Hälfte gefällt gibt es dafür eine klare Empfehlung",
          "very naice",
          "Quality is sucks, made of so soft metal, that chain elements are opening by themselves after a day of use! But could be squeezed again by two fingers! Never ever! Wounded if that is a genuine product…",
          "Jeder der Armani kennt weiß Qualität immer top und das rechtfertigt oft den Preis auch wenn man natürlich für die Marke mit zahlt hier würde ich aber tatsächlich sagen Mann kann auch auf was günstigeres zurück greifen da der Preis sehr sehr sehr hoch ist für das was man bekommt aber das muss jeder für sich entscheiden alles in allem top Produkt",
        ],
        imagePath:
          "https://m.media-amazon.com/images/I/71xB3fRzKuL._AC_SY695_.jpg",
        title:
          "Armani Exchange Herrenarmband aus Edelstahl mit Karabinerhakenverschluss",
      },
    "https://www.amazon.de/-/en/amazon-Performance-Alkaline-Batteries-Appearance-gray/dp/B00LH3DMUO/ref=zg_bs_c_ce-de_d_sccl_1/259-8960196-0580241?pd_rd_w=NRtX7&content-id=amzn1.sym.23b89adb-9909-4f81-be6e-d852030876a5&pf_rd_p=23b89adb-9909-4f81-be6e-d852030876a5&pf_rd_r=FZQP2VJJ4WEYQ3FGGHBB&pd_rd_wg=39TLc&pd_rd_r=9627aed1-4f9e-43e1-9d96-e052a37bd8f9&pd_rd_i=B00LH3DMUO&th=1":
      {
        reviews: [
          "Ich habe die Amazon Basics AA-Alkalisch Batterien im 48er-Pack gekauft, da ich oft Geräte wie Fernbedienungen, Spielzeuge und tragbare Elektronik im Haus habe, die regelmäßig neue Batterien benötigen. Angesichts des günstigen Preises und der guten Bewertungen war ich neugierig, ob diese Batterien wirklich mit den teureren Marken mithalten können. Nach mehreren Wochen der Nutzung kann ich sagen, dass ich mehr als zufrieden bin. Hier sind meine Eindrücke:",
          "Ob Fernbedienungen, Spielzeug oder Uhren – Batterien sind aus dem Alltag nicht wegzudenken. Die Amazon Basics AAA-Alkalibatterien versprechen eine lange Haltbarkeit, starke Leistung und ein unschlagbares Preis-Leistungs-Verhältnis. Doch halten sie wirklich, was sie versprechen?",
          "Ich nutze die Batterien hauptsächlich für Spielzeug und Lichterketten. Die Leistung ist durchschnittlich, für den Alltag aber völlig ausreichend. Der günstige Preis macht sie besonders attraktiv.Lediglich die Kunststoffverpackung der Batterien ist etwas unpraktisch.Trotzdem ein gutes Produkt für den normalen Gebrauch. Ich hoffe, meine Erfahrung hilft bei der Entscheidung.",
          "من افضل انواع البطاريات جودة",
          "very naice",
          "Batterij doet wat het moet doen.",
          "Doet waar het voor gemaakt is",
        ],
        imagePath:
          "https://m.media-amazon.com/images/I/81Apg8B6+0L._AC_SX679_.jpg",
        title:
          "amazon basics High Performance 1.5 V AAA Alkaline Batteries, Pack of 36 (Appearance May Vary)",
      },
    "https://www.amazon.de/-/en/INSTAX-Mini-Instant-Camera-Green/dp/B0BV6JGPTG/ref=zg_bs_c_photo_d_sccl_2/259-8960196-0580241?pd_rd_w=ftUm0&content-id=amzn1.sym.23b89adb-9909-4f81-be6e-d852030876a5&pf_rd_p=23b89adb-9909-4f81-be6e-d852030876a5&pf_rd_r=QWF8VZGC6NYFHJ070MT4&pd_rd_wg=pGpvo&pd_rd_r=9a5aaa99-b667-49b6-a517-862eb7c8c00b&pd_rd_i=B0BV6JGPTG&th=1":
      {
        reviews: [
          "Ich habe die instax Mini 12 als Geschenk für meine Eltern gekauft. Ich selbst habe auch eine. Insgesamt bin ich sehr zufrieden mit dem Produkt! Die Kamera sieht super aus – der Pastellblaue Farbton ist einfach wunderschön und die Handhabung ist kinderleicht. Die Bilder sind schön und die Sofortbild-Technologie macht einfach Spaß.",
          "Ich bin absolut begeistert von der Sofortbildkamera von INSTAX! Sie ist einfach ein wunderbares Gerät, das den Charme der analogen Fotografie mit moderner Technologie kombiniert. Schon beim ersten Einsatz war ich von der einfachen Handhabung beeindruckt. Die Kamera ist intuitiv und lässt sich problemlos bedienen, auch für Einsteiger. Das Design ist stylisch und kompakt, sodass man sie problemlos überall hin mitnehmen kann – sie passt sogar in meine Handtasche!",
          "Ich nutze die Batterien hauptsächlich für Spielzeug und Lichterketten. Die Leistung ist durchschnittlich, für den Alltag aber völlig ausreichend. Der günstige Preis macht sie besonders attraktiv.Lediglich die Kunststoffverpackung der Batterien ist etwas unpraktisch.Trotzdem ein gutes Produkt für den normalen Gebrauch. Ich hoffe, meine Erfahrung hilft bei der Entscheidung.",
          "Diese Sofortbildkamera bringt den nostalgischen Charme der klassischen Polaroid-Zeit zurück, gepaart mit einer angenehmen Leichtigkeit in der Bedienung. Schon beim ersten Ausprobieren kommt echte Freude auf, besonders bei Partys oder Familienfeiern!",
          "Die INSTAX Mini 12 Sofortbildkamera macht definitiv Spaß! Sie ist einfach zu bedienen und liefert direkt aus der Kamera schöne, nostalgische Sofortbilder. Klar, der Preis für die Filme ist relativ hoch (ca. 1€ pro Bild), aber der Spaßfaktor und die einzigartigen Erinnerungen, die man damit schafft, machen das wieder wett. Perfekt für besondere Anlässe oder als kreatives Geschenk. Wer den Charme von Sofortbildern liebt, wird hier definitiv auf seine Kosten kommen!",
          "Ich bin absolut begeistert von der Instax Mini 12 in Blossom Pink! Das Design ist einfach wunderschön – die Farbe ist frisch, modern und ein echter Hingucker. Die Kamera ist super einfach zu bedienen, selbst für Anfänger.",
          "Have started a scrapbook.. absolutely love! Picture quality is wow!!",
        ],
        imagePath:
          "https://m.media-amazon.com/images/I/51NT2gBjpQL.__AC_SX300_SY300_QL70_ML2_.jpg",
        title: "INSTAX Mini 12 Instant Camera Mint Green",
      },
  };

  return (
    data[productURL] || {
      reviews: [],
      imagePath: "",
      title: "",
    }
  );
};

module.exports = fetchReviews;
