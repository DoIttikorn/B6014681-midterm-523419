import { Component, OnInit } from "@angular/core";

interface user_profile {
  studentid: string;
  name: string;
  gender: string;
  birthyear: number;
  email: string;
  phone: string;
  img: string;
  address: string;
  comment: string;
}

@Component({
  selector: "app-first",
  templateUrl: "./first.component.html",
  styleUrls: ["./first.component.css"],
})
export class FirstComponent implements OnInit {
  profile: user_profile;

  constructor() {
    this.profile = {
      studentid: "B6014681",
      name: "Ittikorn Chawkamud",
      gender: "Male",
      birthyear: 1998,
      email: "aseaways1234@gmail.com",
      phone: "093-5281333",
      img:
        "https://avatars0.githubusercontent.com/u/57912233?s=460&u=7d1ec3616ef80f56d7406520b14db3d9a7e6aa8b&v=4",
      address: "225 No.3,Tambon  banlaim , Amphur Muang,Udonthai 41000",
      comment: "",
    };
  }

  ngOnInit(): void {}

  showAddress() {
    alert(this.profile.address);
  }
}
