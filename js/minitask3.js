const body = document.body;

const h1 = document.createElement("h1");
h1.innerText = "Formulir Survey Perokok";

const form = document.createElement("form");


// nama
const div1 = document.createElement("div");

const labelNama = document.createElement("label");
labelNama.setAttribute("for","nama")
labelNama.innerText="Nama";
div1.appendChild(labelNama)

const inputNama = document.createElement("input");
inputNama.setAttribute("type","text")
inputNama.setAttribute("id","nama")
div1.appendChild(inputNama)

form.appendChild(div1)

//umur
const div2 = document.createElement("div");

const labelUmur = document.createElement("label");
labelUmur.setAttribute("for","umur")
labelUmur.innerText="Umur";
div2.appendChild(labelUmur)

const inputUmur = document.createElement("input");
inputUmur.setAttribute("type","text")
inputUmur.setAttribute("id","nama")
div2.appendChild(inputUmur)

form.appendChild(div2)

//Jenis Kelamin
const div3 = document.createElement("div")

const labelGender = document.createElement("label");
labelGender.innerText = "Jenis Kelamin = "
div3.appendChild(labelGender)

const inputMale = document.createElement("input");
inputMale.setAttribute("type","radio")
inputMale.setAttribute("name","gender")
inputMale.setAttribute("id","L")
div3.appendChild(inputMale)

const labelMale = document.createElement("label");
labelMale.setAttribute("for","L")
labelMale.innerText="Laki-laki";
div3.appendChild(labelMale)

const inputWoman = document.createElement("input");
inputWoman.setAttribute("type","radio")
inputWoman.setAttribute("name","gender")
inputWoman.setAttribute("id","P")
div3.appendChild(inputWoman)

const labelWoman = document.createElement("label");
labelWoman.setAttribute("for","P")
labelWoman.innerText="Perempuan";
div3.appendChild(labelWoman)

form.appendChild(div3)

//Apakah seorang perokok
const div4 = document.createElement("div");

const labelPerokok = document.createElement("label");
labelPerokok.innerText = "Apakah Anda Seorang Perokok? "
div4.appendChild(labelPerokok)

const selectRokok = document.createElement("select")

const option1 = document.createElement("option");
option1.setAttribute("disabled", "true");
option1.setAttribute("selected", "true");
option1.innerText= "Pilih";

const option2 = document.createElement("option");
option2.innerText= "Ya";

const option3 = document.createElement("option");
option3.innerText= "Tidak";

selectRokok.append(option1, option2, option3)
div4.appendChild(selectRokok);

form.appendChild(div4);

//Brand Rokok yang digunakan
const div5 = document.createElement("div");

const labelBrand = document.createElement("label");
labelBrand.innerText = "Brand Rokok yang digunakan : ";
div5.appendChild(labelBrand);

const inputBrand1 = document.createElement("input");
inputBrand1.setAttribute("type","checkbox")
inputBrand1.setAttribute("name","rokok")
inputBrand1.setAttribute("id","s")
div5.appendChild(inputBrand1)

const labelBrand1 = document.createElement("label");
labelBrand1.setAttribute("for","s")
labelBrand1.innerText="Sampoerna";
div5.appendChild(labelBrand1)

const inputBrand2 = document.createElement("input");
inputBrand2.setAttribute("type","checkbox")
inputBrand2.setAttribute("name","rokok")
inputBrand2.setAttribute("id","gg")
div5.appendChild(inputBrand2)

const labelBrand2 = document.createElement("label");
labelBrand2.setAttribute("for","gg")
labelBrand2.innerText="Gudang Garam";
div5.appendChild(labelBrand2)

const inputBrand3 = document.createElement("input");
inputBrand3.setAttribute("type","checkbox")
inputBrand3.setAttribute("name","rokok")
inputBrand3.setAttribute("id","dj")
div5.appendChild(inputBrand3)

const labelBrand3 = document.createElement("label");
labelBrand3.setAttribute("for","dj")
labelBrand3.innerText="Djarum";
div5.appendChild(labelBrand3)

form.appendChild(div5);

//button
const button = document.createElement("button");
button.setAttribute("type", "submit");
button.innerText= "Kirim";

form.appendChild(button);
body.append(h1,form)