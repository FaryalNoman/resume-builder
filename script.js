"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const form = document.getElementById("resumeform");
const resumePage = document.getElementById("resumepage");
const resumePhoto = document.getElementById("resume-Photo");
const resumeName = document.getElementById("resume-name");
const resumeNamee = document.getElementById("resumename");
const resumeGender = document.getElementById("resumegender");
const resumeEmail = document.getElementById("resumeemail");
const resumePhone = document.getElementById("resumephone");
const resumeEducation = document.getElementById("resumedegree");
const resumeSchool = document.getElementById("resumeschool");
const resumeWorkExperience = document.getElementById("resumeworkexperience");
const resumeSkills = document.getElementById("resumeskills");
const editButton = document.getElementById("editButton");
const backButton = document.getElementById("backButton");
const shareLinkButton = document.getElementById("shareLinkButton");
const downloadPdfButton = document.getElementById("download.pdf");
const resumeContent = document.getElementById("resume-content");
const container = document.getElementById("container");
form.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    event.preventDefault();
    const name1 = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const degree = document.getElementById("degree").value;
    const school = document.getElementById("school").value;
    const skills = document.getElementById("skills").value;
    const experience = document.getElementById("work experience").value;
    const photoInput = document.getElementById("photo");
    const container = document.getElementById("container");
    if (container.style.display = "flex") {
        container.style.display = "none";
    }
    const photofile = photoInput.files ? photoInput.files[0] : null;
    let photoBase64 = '';
    if (photofile) {
        photoBase64 = yield fileToBase64(photofile);
        localStorage.setItem("resume-Photo", photoBase64);
        resumePhoto.src = photoBase64;
        0;
    }
    (_a = document.querySelector("container")) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
    resumePage.classList.remove("hidden");
    resumeNamee.textContent = name1;
    resumeGender.textContent = gender;
    resumeEmail.textContent = `Email: ${email}`;
    resumePhone.textContent = `phone: ${phone}`;
    resumeEducation.textContent = `${degree} from ${degree}`;
    resumeSchool.textContent = `${degree} from ${school}`;
    resumeSkills.textContent = skills;
    resumeWorkExperience.textContent = experience;
}));
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
