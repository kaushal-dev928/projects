const sampleListings = [
  {
    title: "Sinhagad Fort",
    description:
      "Known for the bravery of Tanaji Malusare, Sinhagad Fort offers panoramic views and deep Maratha history.",
    image: "https://www.istockphoto.com/photo/pune-darwaja-of-sinhagad-fort-located-in-pune-maharashtra-india-gm2178815475-598127642?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fsinhagad-fort&utm_term=sinhagad+fort%3A%3Alayout-below-fold-units-2%3Aexperiment",
    timing: "5:00 AM - 6:00 PM",
    location: "Pune",
    state: "Maharashtra",
  },
  {
    title: "Rajgad Fort",
    description:
      "The first capital of the Maratha Empire, Rajgad Fort symbolizes the glory and strategy of Shivaji Maharaj.",
    image: "https://unsplash.com/photos/green-and-black-mountain-under-white-sky-during-daytime-SaK-VRGVvtM",
    timing: "6:00 AM - 6:00 PM",
    location: "Pune",
    state: "Maharashtra",
  },
  {
    title: "Raigad Fort",
    description:
      "The coronation site of Chhatrapati Shivaji Maharaj, Raigad Fort served as the capital of the Maratha Kingdom.",
    image:  "https://unsplash.com/photos/building-on-top-of-mountain-SBkT1yvW0Xw",
    timing: "6:00 AM - 6:00 PM",
    location: "Raigad",
    state: "Maharashtra",
  },
  {
    title: "Pratapgad Fort",
    description:
      "Site of the famous battle between Shivaji Maharaj and Afzal Khan, this fort holds immense historic importance.",
    image:
    "https://unsplash.com/photos/a-very-tall-hill-with-a-castle-on-top-of-it-_e9qPYXz1gQ",
    timing: "6:00 AM - 7:00 PM",
    location: "Satara",
    state: "Maharashtra",
  },
  {
    title: "Torna Fort",
    description:
      "The first fort captured by Shivaji Maharaj at age 16, marking the beginning of the Maratha Empire.",
    image: 
   "https://unsplash.com/photos/a-very-tall-green-mountain-with-a-very-steep-hill-K3YVhcqMgF0",
    timing: "6:00 AM - 6:00 PM",
    location: "Velhe, Pune",
    state: "Maharashtra",
  },
  {
    title: "Lohagad Fort",
    description:
      "A popular trekking spot, Lohagad Fort combines scenic beauty with rich Maratha-era history.",
    image:
    "https://unsplash.com/photos/a-stone-building-with-a-dome-with-lohagad-in-the-background-7Kl0-d89hIg",
    timing: "6:00 AM - 6:00 PM",
    location: "Lonavala",
    state: "Maharashtra",
  },
  {
    title: "Visapur Fort",
    description:
      "Situated near Lohagad, this twin fort offers panoramic views of the Sahyadri ranges and ancient caves.",
    image: 
   "https://www.google.com/search?sca_esv=497cb87f152d986c&sxsrf=AE3TifMGbkQ3pvTu1f_iR8QhoATxrV_ILA:1762343194991&udm=2&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIeuYzzFkfneXafNx6OMdA4MQUafbvnu2jqORbxlgbMxvgK2ZI98ZtIwWPWxhix0wpn9_qK6Fq014yFE2y_eRZix3yUwn2_HKj24fJr8kDzMgJG_-cfoOkGgpXWykGqc0Io1MNI3fZa4nN3NEITD6L06tqy4u_RaSQ3HnTWDFNmCpt_JjLZg&q=visapur+fort&sa=X&ved=2ahUKEwiSm_CA-NqQAxXb7TgGHQD7GSwQtKgLegQIFRAB&biw=767&bih=730&dpr=1.25#vhid=fosEbX1JBOICTM&vssid=mosaic",
    timing: "6:00 AM - 6:00 PM",
    location: "Lonavala",
    state: "Maharashtra",
  },
  {
    title: "Shivneri Fort",
    description:
      "The birthplace of Chhatrapati Shivaji Maharaj, Shivneri Fort is a must-visit for history enthusiasts.",
    image:
   "https://www.google.com/search?q=shivneri+fort&sca_esv=497cb87f152d986c&udm=2&biw=767&bih=730&sxsrf=AE3TifPVZ_PS52hsjuCsbkbjJQcNAhkIPg%3A1762343200089&ei=IDkLaceJBeeHg8UP8v-QWQ&oq=shiv+fort&gs_lp=Egtnd3Mtd2l6LWltZyIJc2hpdiBmb3J0KgIIADIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeSL4-UIAPWKwucAJ4AJABAJgBswKgAfINqgEIMC4xMC4wLjG4AQPIAQD4AQGYAgugAt4KwgINEAAYgAQYsQMYQxiKBcICBRAAGIAEwgIKEAAYgAQYQxiKBcICCBAAGIAEGLEDmAMAiAYBkgcDMi45oAeDR7IHAzAuObgHzgrCBwcwLjMuNy4xyAcx&sclient=gws-wiz-img#vhid=I7Miru5XrC1CZM&vssid=mosaic",
    timing: "6:00 AM - 6:00 PM",
    location: "Junnar, Pune",
    state: "Maharashtra",
  },
  {
    title: "Purandar Fort",
    description:
      "Purandar Fort was key in the Treaty of Purandar; it offers stunning views and deep historical roots.",
    image: 
    "https://www.google.com/search?q=purandar+fort&sca_esv=497cb87f152d986c&udm=2&biw=767&bih=730&sxsrf=AE3TifOojI1B44qlzotCiUsScqJpH-PvZA%3A1762343303462&ei=hzkLab_2G9ar4-EPjq_t4Q0&oq=purandar+fort&gs_lp=Egtnd3Mtd2l6LWltZyINcHVyYW5kYXIgZm9ydCoCCAAyCBAAGIAEGLEDMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESOY-UKAJWMMxcAF4AJABAJgB_wGgAdkSqgEGMC4xNS4xuAEDyAEA-AEBmAIQoAKUEsICBxAjGCcYyQLCAgoQABiABBhDGIoFwgIGEAAYBxgewgINEAAYgAQYsQMYQxiKBcICCBAAGAcYChgemAMAiAYBkgcGMS4xNC4xoAfbbLIHBjAuMTQuMbgHjBLCBwYwLjEuMTXIB0k&sclient=gws-wiz-img#vhid=DdcGV6_qZHnBEM&vssid=mosaic",
    timing: "6:00 AM - 6:00 PM",
    location: "Saswad, Pune",
    state: "Maharashtra",
  },
  {
    title: "Tikona Fort",
    description:
      "Named after its triangular shape, Tikona Fort provides breathtaking valley views and ancient caves.",
    image: 
   "https://www.google.com/search?q=tikona+fort&sca_esv=497cb87f152d986c&udm=2&biw=767&bih=730&sxsrf=AE3TifP9kWxrLe1pmKnPdijGfSZshcYBeg%3A1762343338012&ei=qjkLaZY4z4bj4Q-w3-hg&oq=tik+fort&gs_lp=Egtnd3Mtd2l6LWltZyIIdGlrIGZvcnQqAggAMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB5IoR1QvQRYlRRwAXgAkAEAmAHfAaAB-AmqAQUwLjcuMbgBA8gBAPgBAZgCBqAC9gbCAg0QABiABBixAxhDGIoFwgIKEAAYgAQYQxiKBcICBRAAGIAEwgIIEAAYgAQYsQOYAwCIBgGSBwUxLjQuMaAHtTSyBwUwLjQuMbgH7wbCBwMyLTbIBx8&sclient=gws-wiz-img#vhid=4vHCvXPk_oqsIM&vssid=mosaic",
    timing: "6:00 AM - 6:00 PM",
    location: "Pawna, Lonavala",
    state: "Maharashtra",
  },
  {
    title: "Harishchandragad Fort",
    description:
      "A trekking paradise with ancient caves and temples, Harishchandragad offers unmatched scenic beauty.",
    image:
    "https://www.google.com/search?q=harishchandra+fort&sca_esv=497cb87f152d986c&udm=2&biw=767&bih=730&sxsrf=AE3TifN4Yacm70PGYXf3hqQXHEipAGtpVg%3A1762343366187&ei=xjkLaa2ZC53C4-EPrrjHgA4&oq=harifort&gs_lp=Egtnd3Mtd2l6LWltZyIIaGFyaWZvcnQqAggDMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB5Io0NQqQRYiBxwAXgAkAEAmAHWAaABnQuqAQUwLjguMbgBA8gBAPgBAZgCBqACmAbCAg0QABiABBixAxhDGIoFwgIFEAAYgATCAgoQABiABBhDGIoFwgIIEAAYgAQYsQOYAwCIBgGSBwMxLjWgB7gusgcDMC41uAeQBsIHBTAuMi40yAcZ&sclient=gws-wiz-img#vhid=bgOUGzLRzeMEKM&vssid=mosaic",
    timing: "5:00 AM - 6:30 PM",
    location: "Ahmednagar",
    state: "Maharashtra",
  },
  {
    title: "Ratangad Fort",
    description:
      "Surrounded by the Bhandardara region, Ratangad Fort is known for its natural rock peak and views.",
    image: 
       "https://www.google.com/search?q=ratangad+fort&sca_esv=497cb87f152d986c&udm=2&biw=767&bih=730&sxsrf=AE3TifOOOTGU-OOHVwGvJsrLveSZZwo6-A%3A1762343676175&ei=_DoLacSvCuWh1e8P5K_xqAI&oq=rata+fort&gs_lp=Egtnd3Mtd2l6LWltZyIJcmF0YSBmb3J0KgIIADIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeSN4dUABYsgRwAHgAkAEAmAGVAaABvwSqAQMwLjS4AQPIAQD4AQGYAgSgAtwEmAMAkgcDMC40oAe2GLIHAzAuNLgH3ATCBwMyLTTIBxY&sclient=gws-wiz-img#vhid=2Cj9hB49FsIsUM&vssid=mosaic",
    timing: "5:30 AM - 6:00 PM",
    location: "Bhandardara",
    state: "Maharashtra",
  },
  {
    title: "Korigad Fort",
    description:
      "A scenic fort near Lonavala, Korigad offers views of the Amby Valley and ancient stone structures.",
    image: 
      "https://www.google.com/search?q=korigad+fort&sca_esv=497cb87f152d986c&udm=2&biw=767&bih=730&sxsrf=AE3TifP5GfQfdiWC6Ff96RV0mryfKjOlhA%3A1762343717329&ei=JTsLaaflE7zf1e8PsLKtoA4&oq=kori+fort&gs_lp=Egtnd3Mtd2l6LWltZyIJa29yaSBmb3J0KgIIADIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeSNwRUABY_AVwAHgAkAEAmAGgAaAB0gSqAQMwLjS4AQPIAQD4AQGYAgSgAuwEmAMAkgcDMC40oAfEGLIHAzAuNLgH7ATCBwMyLTTIBxQ&sclient=gws-wiz-img#vhid=dwvdwZL7mh-jLM&vssid=mosaic",
    timing: "6:00 AM - 6:30 PM",
    location: "Lonavala",
    state: "Maharashtra",
  },
  {
    title: "Murud-Janjira Fort",
    description:
      "Built on an island, Murud-Janjira Fort is famous for its impregnable sea defenses and grand architecture.",
    image: 
      "https://www.google.com/search?q=murud+janjira+fort&sca_esv=497cb87f152d986c&udm=2&biw=767&bih=730&sxsrf=AE3TifN_ZInRHAorBqAgu2RIEqlnA9ptVA%3A1762343748864&ei=RDsLafOrNO7a1e8PnqWs4AI&oq=murud+fort&gs_lp=Egtnd3Mtd2l6LWltZyIKbXVydWQgZm9ydCoCCAAyBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHkjsFFAAWOULcAB4AJABAJgBxQKgAaIHqgEHMC40LjAuMbgBA8gBAPgBAZgCBaACuweYAwCSBwcwLjQuMC4xoAevIrIHBzAuNC4wLjG4B7sHwgcFMC4xLjTIBxQ&sclient=gws-wiz-img#vhid=e58qM44862I18M&vssid=mosaic",
    timing: "7:00 AM - 6:00 PM",
    location: "Raigad",
    state: "Maharashtra",
  },
  {
    title: "Vijaydurg Fort",
    description:
      "A coastal fort built by Shivaji Maharaj, Vijaydurg Fort is known as the 'Gibraltar of the East'.",
    image: 
      "https://www.google.com/search?q=vijaydurg+fort&sca_esv=497cb87f152d986c&udm=2&biw=767&bih=730&sxsrf=AE3TifPCLvUvfokbL_I3GXMZUIEkI2h98w%3A1762343777861&ei=YTsLaZCuNP_Y1e8Pq62P8A0&oq=vijay+fort&gs_lp=Egtnd3Mtd2l6LWltZyIKdmlqYXkgZm9ydCoCCAAyBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHkjkHlAAWLsQcAB4AJABAJgBtgGgAZ0GqgEDMC41uAEDyAEA-AEBmAIFoAK1BpgDAJIHAzAuNaAHyhyyBwMwLjW4B7UGwgcFMC4xLjTIBxI&sclient=gws-wiz-img#vhid=8sby4oFRQxPDZM&vssid=mosaic",
    timing: "6:30 AM - 6:00 PM",
    location: "Sindhudurg",
    state: "Maharashtra",
  },
  {
    title: "Sindhudurg Fort",
    description:
      "A sea fort built by Shivaji Maharaj near Malvan, it features temples and strong stone walls.",
    image:
      "https://www.google.com/search?q=vijaydurg+fort&sca_esv=497cb87f152d986c&udm=2&biw=767&bih=730&sxsrf=AE3TifPCLvUvfokbL_I3GXMZUIEkI2h98w%3A1762343777861&ei=YTsLaZCuNP_Y1e8Pq62P8A0&oq=vijay+fort&gs_lp=Egtnd3Mtd2l6LWltZyIKdmlqYXkgZm9ydCoCCAAyBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHkjkHlAAWLsQcAB4AJABAJgBtgGgAZ0GqgEDMC41uAEDyAEA-AEBmAIFoAK1BpgDAJIHAzAuNaAHyhyyBwMwLjW4B7UGwgcFMC4xLjTIBxI&sclient=gws-wiz-img#vhid=8sby4oFRQxPDZM&vssid=mosaic",
    timing: "6:30 AM - 6:30 PM",
    location: "Malvan",
    state: "Maharashtra",
  },
  {
    title: "Panhalgad Fort",
    description:
      "A massive fort near Kolhapur that played an important role during Shivaji Maharaj’s campaigns.",
    image: 
      "https://www.google.com/search?q=panhalgad+fort&sca_esv=497cb87f152d986c&udm=2&biw=767&bih=730&sxsrf=AE3TifMWAEl-BnpI6r8ItOzCY-xNPL-3aA%3A1762343863917&ei=tzsLadzZN4bT1e8Pp5SpoAY&ved=0ahUKEwickey_-tqQAxWGafUHHSdKCmQQ4dUDCBI&uact=5&oq=panhalgad+fort&gs_lp=Egtnd3Mtd2l6LWltZyIOcGFuaGFsZ2FkIGZvcnQyBxAAGIAEGAoyBhAAGAcYHjIFEAAYgAQyBRAAGIAEMggQABgHGAoYHjIHEAAYgAQYCjIHEAAYgAQYCjIFEAAYgAQyBRAAGIAEMgcQABiABBgKSPt6UJYIWJpfcAF4AJABAJgBsQGgAfsMqgEEMC4xMbgBA8gBAPgBAZgCDKACxQ3CAg0QABiABBixAxhDGIoFwgIKEAAYgAQYQxiKBcICCBAAGIAEGLEDmAMAiAYBkgcEMS4xMaAH-EuyBwQwLjExuAe_DcIHBjAuMS4xMcgHOw&sclient=gws-wiz-img#vhid=Y3-AfyP1hNNFJM&vssid=mosaic",
    timing: "6:00 AM - 6:00 PM",
    location: "Kolhapur",
    state: "Maharashtra",
  },
  {
    title: "Vasota Fort",
    description:
      "Hidden in the Koyna Wildlife Sanctuary, Vasota Fort is a nature lover’s and trekker’s paradise.",
    image: 
      "https://www.google.com/search?q=vasota+fort&sca_esv=497cb87f152d986c&udm=2&biw=767&bih=730&sxsrf=AE3TifNaNZhnJ4J5e4y1SjqWTsq8foYVDQ%3A1762343902667&ei=3jsLacerKPORvr0P7deRgAo&oq=vasofort&gs_lp=Egtnd3Mtd2l6LWltZyIIdmFzb2ZvcnQqAggAMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB5Imh5Q2Q5Y5hRwAXgAkAEAmAGoAqABqwaqAQUwLjMuMbgBA8gBAPgBAZgCBKACmQTCAgwQABiABBhDGIoFGArCAgUQABiABMICBxAAGIAEGArCAggQABgHGAoYHpgDAIgGAZIHAzEuM6AH-ROyBwMwLjO4B5UEwgcDMi00yAcR&sclient=gws-wiz-img#vhid=VTiNjE3NU-zHlM&vssid=mosaic",
    timing: "6:30 AM - 5:30 PM",
    location: "Satara",
    state: "Maharashtra",
  },
  {
    title: "Sudhagad Fort",
    description:
      "Once considered as a possible capital for the Maratha Empire, Sudhagad Fort offers vast ruins and scenic trails.",
    image: 
      "https://www.google.com/search?q=sudhagad+fort&sca_esv=497cb87f152d986c&udm=2&biw=767&bih=730&sxsrf=AE3TifPtw5BP_ovpPtRMRykqKQhMct4WSQ%3A1762343930858&ei=-jsLab2KNNbS1e8Prs2hoAQ&ved=0ahUKEwi97-Hf-tqQAxVWafUHHa5mCEQQ4dUDCBI&uact=5&oq=sudhagad+fort&gs_lp=Egtnd3Mtd2l6LWltZyINc3VkaGFnYWQgZm9ydDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARI6yFQAFjKGHAAeACQAQCYAfoBoAGhCqoBBTAuNi4yuAEDyAEA-AEBmAIHoALXCMICBhAAGAcYHpgDAJIHBTAuNi4xoAejN7IHBTAuNi4xuAfXCMIHBTAuMi41yAca&sclient=gws-wiz-img#vhid=eqXWzZT7_PPFYM&vssid=mosaic",
    timing: "6:00 AM - 6:30 PM",
    location: "Raigad",
    state: "Maharashtra",
  },
  {
    title: "Karnala Fort",
    description:
      "Located within the Karnala Bird Sanctuary, this fort combines natural beauty and ancient architecture.",
    image:
      "https://www.google.com/search?q=karnala+fort&sca_esv=497cb87f152d986c&udm=2&biw=767&bih=730&sxsrf=AE3TifP0dcE-bEruNM4Vehcvv7OaO9IyEQ%3A1762343992504&ei=ODwLaZrDHqmqvr0P98Gp4Qs&oq=kar+fort&gs_lp=Egtnd3Mtd2l6LWltZyIIa2FyIGZvcnQqAggAMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB5Ikw9QAFiKBHAAeACQAQCYAcEBoAHTA6oBAzAuM7gBA8gBAPgBAZgCA6AC7gOYAwCSBwUwLjIuMaAHyhGyBwUwLjIuMbgH7gPCBwUyLTIuMcgHFQ&sclient=gws-wiz-img#vhid=Ktsxtdhe95Y1pM&vssid=mosaic",
    timing: "7:00 AM - 6:00 PM",
    location: "Panvel",
    state: "Maharashtra",
  },
  {
    title: "Dhulegad Fort",
    description:
      "A lesser-known fort showcasing traditional Maratha architecture and strategic hilltop placement.",
    image: 
      "https://www.google.com/search?q=dhulegad+fort&sca_esv=497cb87f152d986c&udm=2&biw=767&bih=730&sxsrf=AE3TifNp_tbHFaBOFCZq7CBcANxHYZX2Wg%3A1762344024060&ei=WDwLacyzA4mOvr0Pvebo2QQ&ved=0ahUKEwjMv5qM-9qQAxUJh68BHT0zOksQ4dUDCBI&uact=5&oq=dhulegad+fort&gs_lp=Egtnd3Mtd2l6LWltZyINZGh1bGVnYWQgZm9ydEjBQlAAWPYtcAB4AJABAJgBsQGgAfsJqgEDMC44uAEDyAEA-AEBmAIFoALXBsICBhAAGAcYHsICBRAAGIAEwgIGEAAYCBgemAMAkgcDMC41oAfzHrIHAzAuNbgH1wbCBwMyLTXIBxw&sclient=gws-wiz-img#vhid=U1DoLOVlT6cQvM&vssid=mosaic",
    timing: "6:30 AM - 6:00 PM",
    location: "Nashik",
    state: "Maharashtra",
  },
  {
    title: "Malhargad Fort",
    description:
      "The youngest of the Maratha forts, Malhargad overlooks the Jejuri plains and is rich in heritage.",
    image:
      "https://www.google.com/search?q=malhargad+fort&sca_esv=497cb87f152d986c&udm=2&biw=767&bih=730&sxsrf=AE3TifO3OB4bpHLKDiGDDUXw2j1UygynyA%3A1762344067240&ei=gzwLaamyDv_f1e8PmM3OuAM&oq=malhar+fort&gs_lp=Egtnd3Mtd2l6LWltZyILbWFsaGFyIGZvcnQqAggAMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBRAAGIAEMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHkjwG1AAWJkScAB4AJABAJgBpAKgAf8IqgEFMC40LjK4AQPIAQD4AQGYAgWgAsEHmAMAkgcFMC40LjGgB_kosgcFMC40LjG4B8EHwgcDMi01yAcg&sclient=gws-wiz-img#vhid=6_mDA89zsAIWiM&vssid=mosaic",
    timing: "6:00 AM - 6:00 PM",
    location: "Pune",
    state: "Maharashtra",
  },
  {
    title: "Narayangad Fort",
    description:
      "Built to monitor the trade route, Narayangad Fort offers peaceful trekking and stunning sunsets.",
    image: 
      "https://www.google.com/search?q=narayangad+fort&sca_esv=497cb87f152d986c&udm=2&biw=767&bih=730&sxsrf=AE3TifOcVHi61idYYffAIDLirC4x5Q8SWw%3A1762344103051&ei=pzwLafjwAvWj1e8PmLCuuA8&oq=narayan+fort&gs_lp=Egtnd3Mtd2l6LWltZyIMbmFyYXlhbiBmb3J0KgIIADIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBRAAGIAEMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB5IzxxQAFiDE3AAeACQAQCYAcUBoAHoB6oBAzAuN7gBA8gBAPgBAZgCBqACxgaYAwCSBwMwLjagB_AssgcDMC42uAfGBsIHBTAuMS41yAcb&sclient=gws-wiz-img#vhid=kTevysfNbvOWwM&vssid=mosaic",
    timing: "6:00 AM - 6:30 PM",
    location: "Junnar, Pune",
    state: "Maharashtra",
  },
  {
    title: "Mahuli Fort",
    description:
      "A favorite among trekkers, Mahuli Fort is the highest point in Thane district and rich with Maratha history.",
    image:
      "https://www.google.com/search?q=mahuli+fort&sca_esv=497cb87f152d986c&udm=2&biw=767&bih=730&sxsrf=AE3TifM2SV6neAQOjIVfIX1ozm4hYSGILQ%3A1762344146853&ei=0jwLabLiM6Tt1e8P0eKd2Ak&oq=mahuli+fort&gs_lp=Egtnd3Mtd2l6LWltZyILbWFodWxpIGZvcnQqAggAMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEi-GFAAWMQMcAB4AJABAJgBjwGgAaMGqgEDMC42uAEDyAEA-AEBmAIGoALFBsICBhAAGAcYHpgDAJIHAzAuNqAHuSWyBwMwLja4B8UGwgcFMC4yLjTIBxo&sclient=gws-wiz-img#vhid=9YDaMv9gGDjJ6M&vssid=mosaic",
    timing: "6:00 AM - 6:30 PM",
    location: "Thane",
    state: "Maharashtra",
  },
  {
    title: "Salher Fort",
    description:
      "The highest fort in Maharashtra, Salher was a major battlefield in the Maratha-Mughal war.",
    image: 
      "https://www.google.com/search?q=salher+fort&sca_esv=497cb87f152d986c&udm=2&biw=767&bih=730&sxsrf=AE3TifNN8aa4Mf6FYHvtSP6xIHw5AaWQNQ%3A1762344173259&ei=7TwLaea8D9anvr0P4cjFmQY&oq=salfort&gs_lp=Egtnd3Mtd2l6LWltZyIHc2FsZm9ydCoCCAAyBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHkj2DVAAWO8DcAB4AJABAJgBkwGgAbADqgEDMC4zuAEDyAEA-AEBmAIDoALCA8ICCBAAGAcYChgemAMAkgcDMC4zoAfiD7IHAzAuM7gHwgPCBwMyLTPIBw0&sclient=gws-wiz-img#vhid=HbPJay88QY27aM&vssid=mosaic",
    timing: "6:00 AM - 5:30 PM",
    location: "Nashik",
    state: "Maharashtra",
  },
  {
    title: "Anjaneri Fort",
    description:
      "Believed to be the birthplace of Lord Hanuman, Anjaneri is spiritually and historically significant.",
    image: 
      "https://www.google.com/search?q=anjaneri+fort&sca_esv=497cb87f152d986c&udm=2&biw=767&bih=730&sxsrf=AE3TifMhuqmtHkTBmSjXbHLY9CChIE_MxA%3A1762344203021&ei=Cz0Laf2HAd2Xvr0P89HiMA&oq=anjanfort&gs_lp=Egtnd3Mtd2l6LWltZyIJYW5qYW5mb3J0KgIIADIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeSIkcUABY9BJwAHgAkAEAmAGgAaAByAWqAQMwLjW4AQPIAQD4AQGYAgWgAt8FwgIIEAAYBxgKGB6YAwCSBwMwLjWgB7gZsgcDMC41uAffBcIHBTAuMi4zyAcQ&sclient=gws-wiz-img#vhid=EQ6oJ4_DaLZfXM&vssid=mosaic",
    timing: "6:00 AM - 6:30 PM",
    location: "Nashik",
    state: "Maharashtra",
  },
  {
    title: "Jaigad Fort",
    description:
      "Overlooking the Arabian Sea, Jaigad Fort is known for its lighthouse and strong sea defenses.",
    image: 
      "https://www.google.com/search?q=jaigad+fort&sca_esv=497cb87f152d986c&udm=2&biw=767&bih=730&sxsrf=AE3TifNFj-4t5XNAazqM7WBEqUmeXHlXWA%3A1762344261491&ei=RT0LaYXgHbO6vr0P_8SEwQQ&ved=0ahUKEwjFlrb9-9qQAxUzna8BHX8iIUgQ4dUDCBI&uact=5&oq=jaigad+fort&gs_lp=Egtnd3Mtd2l6LWltZyILamFpZ2FkIGZvcnQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESJsXUJAEWOkNcAF4AJABAJgBnwGgAckDqgEDMC4zuAEDyAEA-AEBmAICoAKzAsICBhAAGAcYHpgDAIgGAZIHAzAuMqAHnQuyBwMwLjK4B7MCwgcDMi0yyAcH&sclient=gws-wiz-img#vhid=PTbHgUWQwnd8UM&vssid=mosaic",
    timing: "6:30 AM - 6:30 PM",
    location: "Ratnagiri",
    state: "Maharashtra",
  },
  {
    title: "Kundana Fort",
    description:
      "Kundana Fort offers mesmerizing views of the valley and nearby Shivneri range, ideal for short treks.",
    image: 
      "https://www.google.com/search?q=kundana+fort&sca_esv=497cb87f152d986c&udm=2&biw=767&bih=730&sxsrf=AE3TifOgRsOcL0CrkU7QTuI5xgV6Zg0vTA%3A1762344273134&ei=UT0LaYb4B4Kbvr0PhpWZ4QQ&ved=0ahUKEwjG5PyC_NqQAxWCja8BHYZKJkwQ4dUDCBI&uact=5&oq=kundana+fort&gs_lp=Egtnd3Mtd2l6LWltZyIMa3VuZGFuYSBmb3J0MgYQABgHGB4yBRAAGIAEMgYQABgHGB4yBhAAGAcYHjIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCkjoIVAAWKAZcAB4AJABAJgBrgGgAZsIqgEDMC43uAEDyAEA-AEBmAIHoAK-CMICCBAAGAcYChgemAMAkgcDMC43oAe-K7IHAzAuN7gHvgjCBwUwLjEuNsgHGw&sclient=gws-wiz-img#vhid=5H1I45eOTix0PM&vssid=mosaic",
    timing: "6:00 AM - 6:00 PM",
    location: "Junnar, Pune",
    state: "Maharashtra",
  },
  {
    title: "Manikgad Fort",
    description:
      "A small but scenic fort in Raigad district, Manikgad served as a trade route watchpoint.",
    image:
      "https://www.google.com/search?q=manikgad+fort&sca_esv=497cb87f152d986c&udm=2&biw=767&bih=730&sxsrf=AE3TifOttYp5sizei4fiunFIu9ehaCujQQ%3A1762344304591&ei=cD0LaYnpI43R1e8PiJnB6AU&ved=0ahUKEwiJ4fyR_NqQAxWNaPUHHYhMEF0Q4dUDCBI&uact=5&oq=manikgad+fort&gs_lp=Egtnd3Mtd2l6LWltZyINbWFuaWtnYWQgZm9ydDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIEEAAYHkizJFAAWMcdcAB4AJABAJgB_QGgAd8KqgEFMC43LjG4AQPIAQD4AQGYAgagAqAIwgIGEAAYBxgemAMAkgcFMC41LjGgB70zsgcFMC41LjG4B6AIwgcDMi02yAcd&sclient=gws-wiz-img#vhid=CNKbkm2_MWfOmM&vssid=mosaic",
    timing: "6:30 AM - 6:00 PM",
    location: "Khalapur, Raigad",
    state: "Maharashtra",
  },
  {
    title: "Janjira Fort",
    description:
      "An invincible sea fort built off the coast of Murud, known for its strong walls and strategic brilliance.",
    image: 
      "https://www.google.com/search?q=janjira+fort&sca_esv=497cb87f152d986c&udm=2&biw=767&bih=730&sxsrf=AE3TifMwXHYe-xY_OnUGz73qniKiHXUB5g%3A1762344342357&ei=lj0LadrHFbvb1e8PqqnRyAc&ved=0ahUKEwja6v2j_NqQAxW7bfUHHapUFHkQ4dUDCBI&uact=5&oq=janjira+fort&gs_lp=Egtnd3Mtd2l6LWltZyIMamFuamlyYSBmb3J0MggQABiABBixAzIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEi7GlAAWO8UcAB4AJABAJgB7wGgAYkJqgEFMC42LjG4AQPIAQD4AQGYAgagAogIwgIGEAAYBxgemAMAkgcFMC41LjGgB-YtsgcFMC41LjG4B4gIwgcDMi02yAcZ&sclient=gws-wiz-img#vhid=NQGNC4_hg_61FM&vssid=mosaic",
    timing: "7:00 AM - 6:00 PM",
    location: "Murud, Raigad",
    state: "Maharashtra",
  },
];

module.exports = { data: sampleListings};
