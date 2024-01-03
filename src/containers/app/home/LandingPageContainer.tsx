import React from "react"
import { Component } from "./Component"
import Button from "@/components/buttons/Button"

export const LandingPageContainer = () => {
  return (
    <div className="relative w-[1440px] h-[4091px] bg-[#ffffff] overflow-hidden">
      <p className="absolute top-[37px] left-[111px] [font-family:'Montserrat-ExtraBold',Helvetica] font-normal text-[#ff4c4a] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
        <span className="font-extrabold">UP</span>
        <span className="[font-family:'Montserrat-Regular',Helvetica]">
          TECHUNT
        </span>
      </p>
      <div className="absolute top-[38px] left-[355px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-gray-1 text-[16px] tracking-[0] leading-[normal]">
        Find Talent
      </div>
      <div className="absolute top-[38px] left-[493px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-gray-1 text-[16px] tracking-[0] leading-[normal]">
        Find work
      </div>
      <div className="top-[38px] left-[620px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-gray-1 text-[16px] absolute tracking-[0] leading-[normal]">
        Why UpTechhunt
      </div>
      <div className="absolute top-[39px] left-[1139px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-[#2a1e17] text-[16px] tracking-[0] leading-[normal]">
        Log in
      </div>
      <Button>Sign UP</Button>
      {/* <SearchHeader
        className="!shadow-[0px_4px_4px_#00000040] !absolute !left-[799px] !top-[30px]"
        divClassName="!text-[#2a1e17]"
        divClassNameOverride="!text-[#2a1e17]"
        rectangleClassName="!border-gray-1 !border-[0.5px] !border-solid"
      /> */}
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search Jobs"
      />
      <div className="absolute top-[670px] left-[492px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#2a1e17] text-[43px] tracking-[0] leading-[normal]">
        Top skills categories
      </div>
      <div className="absolute w-[1485px] h-[536px] top-[86px] left-[-14px]">
        <img
          className="absolute w-[1440px] h-px top-px left-[14px] object-cover"
          alt="Line"
          src="line-12.svg"
        />
        <div className="absolute w-[1485px] h-[265px] top-[271px] left-0 bg-[#dde1f3] rounded-[10px]" />
        <div className="absolute top-[313px] left-[644px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#2a1e17] text-[24px] tracking-[0] leading-[normal]">
          Find best Talents
        </div>
        <img
          className="absolute w-[311px] h-[232px] top-[304px] left-[298px]"
          alt="Frame"
          src="frame.png"
        />
        <p className="absolute w-[525px] top-[362px] left-[644px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-[#2a1e17] text-[20px] tracking-[0] leading-[33px]">
          Find the best Talent and best works based on
          <br />
          your skills from around the world.
        </p>
        <img
          className="absolute w-[278px] h-[239px] top-[297px] left-[1176px]"
          alt="Vector"
          src="vector.png"
        />
        <img
          className="absolute w-[292px] h-[259px] top-[272px] left-[14px]"
          alt="Vector"
          src="image.png"
        />
        <Button>Find Talents</Button>
        <div className="absolute w-[1440px] h-[272px] top-0 left-[14px] bg-[#ff4c4a]" />
        <img
          className="absolute w-[342px] h-[259px] top-[13px] left-[14px]"
          alt="Vector"
          src="vector-4.png"
        />
        <p className="absolute top-[53px] left-[125px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#ffffff] text-[43px] tracking-[0] leading-[normal]">
          Join world’s best market place
        </p>
        <p className="absolute top-[115px] left-[125px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-[#ffffff] text-[16px] tracking-[0] leading-[33px] whitespace-nowrap">
          Find the best Talent and best works based on your skills from around
          the world.
        </p>
        <Button>Find Talents</Button>

        <div className="inline-flex items-start gap-[10px] px-[36px] py-[12px] absolute top-[177px] left-[283px] rounded-[100px] border border-solid border-[#ffffff]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#ffffff] text-[12px] tracking-[0] leading-[normal]">
            Find Work
          </div>
        </div>
        <img
          className="absolute w-[322px] h-[237px] top-[30px] left-[970px]"
          alt="Frame"
          src="frame-4.png"
        />
        <div className="absolute w-[106px] h-[20px] top-[89px] left-[1352px]">
          <div className="absolute top-0 left-0 [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#ffffff] text-[16px] tracking-[0] leading-[normal]">
            01
          </div>
          <img
            className="absolute w-[75px] h-px top-[8px] left-[27px] object-cover"
            alt="Line"
            src="line-53.svg"
          />
        </div>
        <div className="absolute w-[106px] h-[20px] top-[123px] left-[1352px]">
          <div className="absolute top-0 left-0 [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#ffffff66] text-[16px] tracking-[0] leading-[normal]">
            02
          </div>
          <img
            className="absolute w-[75px] h-px top-[8px] left-[27px] object-cover"
            alt="Line"
            src="image.svg"
          />
        </div>
        <div className="absolute w-[106px] h-[20px] top-[157px] left-[1352px]">
          <div className="absolute top-0 left-0 [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#ffffff66] text-[16px] tracking-[0] leading-[normal]">
            03
          </div>
          <img
            className="absolute w-[75px] h-px top-[8px] left-[27px] object-cover"
            alt="Line"
            src="line-53-2.svg"
          />
        </div>
        <div className="absolute w-[106px] h-[20px] top-[193px] left-[1352px]">
          <div className="absolute top-0 left-0 [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#ffffff66] text-[16px] tracking-[0] leading-[normal]">
            04
          </div>
          <img
            className="absolute w-[75px] h-px top-[8px] left-[27px] object-cover"
            alt="Line"
            src="line-53-3.svg"
          />
        </div>
      </div>
      <div className="absolute top-[2629px] left-[431px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-black text-[53px] tracking-[0] leading-[normal]">
        People talk about us
      </div>
      <div className="absolute w-[1581px] h-[1086px] top-[1482px] left-[-86px]">
        <div className="absolute w-[1581px] h-[425px] top-px left-0 bg-[#ffe3e3] rounded-[10px]" />
        <Button>Find Opportunities</Button>

        <p className="absolute top-[83px] left-[778px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#2a1e17] text-[24px] tracking-[0] leading-[normal]">
          Find great works in your way
        </p>
        <p className="absolute w-[518px] top-[142px] left-[778px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-[#2a1e17] text-[20px] tracking-[0] leading-[33px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
        <img
          className="absolute w-[394px] h-[303px] top-[73px] left-[361px]"
          alt="Frame"
          src="frame-2.png"
        />
        <img
          className="absolute w-[216px] h-[194px] top-[232px] left-[1310px]"
          alt="Vector"
          src="vector-2.png"
        />
        <img
          className="absolute w-[199px] h-[165px] top-0 left-[86px]"
          alt="Vector"
          src="vector-3.png"
        />
        <div className="absolute w-[1440px] h-[662px] top-[424px] left-[86px] bg-[#fffaf3]" />
        <div className="top-[492px] left-[581px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-black text-[53px] absolute tracking-[0] leading-[normal]">
          Why UPTechunt
        </div>
        <p className="w-[518px] top-[577px] left-[547px] text-[#2a1e17] leading-[33px] absolute [font-family:'Montserrat-Medium',Helvetica] font-medium text-[20px] text-center tracking-[0]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="w-[378px] top-[943px] left-[188px] opacity-50 text-primary leading-[22px] absolute [font-family:'Montserrat-Medium',Helvetica] font-medium text-[20px] text-center tracking-[0]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </p>
        <div className="absolute top-[874px] left-[285px] [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-primary text-[28px] tracking-[0] leading-[33px] whitespace-nowrap">
          Quality work
        </div>
        <p className="w-[352px] top-[935px] left-[630px] opacity-50 text-primary leading-[22px] absolute [font-family:'Montserrat-Medium',Helvetica] font-medium text-[20px] text-center tracking-[0]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </p>
        <p className="absolute top-[874px] left-[652px] [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-primary text-[28px] tracking-[0] leading-[33px] whitespace-nowrap">
          No cost until you hire
        </p>
        <img
          className="absolute w-[136px] h-[120px] top-[731px] left-[738px]"
          alt="Frame"
          src="frame-3.png"
        />
        <img
          className="absolute w-[87px] h-[113px] top-[744px] left-[333px]"
          alt="Character"
          src="character.png"
        />
        <p className="w-[352px] top-[931px] left-[1055px] opacity-50 text-primary leading-[22px] absolute [font-family:'Montserrat-Medium',Helvetica] font-medium text-[20px] text-center tracking-[0]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </p>
        <div className="absolute top-[874px] left-[1116px] [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-primary text-[28px] tracking-[0] leading-[33px] whitespace-nowrap">
          Safe and secure
        </div>
        <img
          className="absolute w-[130px] h-[91px] top-[759px] left-[1166px]"
          alt="Group"
          src="group-41.png"
        />
        <img
          className="absolute w-[84px] h-[3px] top-[850px] left-[1178px]"
          alt="Vector"
          src="vector.svg"
        />
      </div>
      <div className="absolute w-[768px] h-[29px] top-[771px] left-[340px]">
        <div className="absolute top-0 left-[9px] opacity-50 [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-black text-[16px] tracking-[0] leading-[normal]">
          Development &amp; IT
        </div>
        <div className="absolute top-0 left-[197px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#ff4c4a] text-[16px] tracking-[0] leading-[normal]">
          Design &amp; Creative
        </div>
        <div className="absolute top-0 left-[384px] opacity-50 [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#2a1e17] text-[16px] tracking-[0] leading-[normal]">
          Sales &amp; Marketing
        </div>
        <div className="absolute top-0 left-[572px] opacity-50 [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#2a1e17] text-[16px] tracking-[0] leading-[normal]">
          Writing &amp; Translation
        </div>
        <div className="absolute w-[760px] h-[2px] top-[27px] left-0">
          <img
            className="absolute w-[760px] h-px top-px left-0 object-cover"
            alt="Line"
            src="line-7.svg"
          />
          <img
            className="absolute w-[142px] h-[2px] top-0 left-[201px]"
            alt="Line"
            src="line-9.svg"
          />
        </div>
      </div>
      <div className="absolute w-[46px] h-[44px] top-[3847px] left-[1672px]">
        <div className="relative w-[44px] h-[44px] rounded-[22px]">
          <div className="absolute w-[44px] h-[44px] top-0 left-0 bg-[#4260da] rounded-[22px] rotate-[-180.00deg] shadow-[0px_4px_24px_#0000001a]" />
          <div className="absolute h-[30px] top-[7px] left-[7px] [font-family:'Material_Icons-Regular',Helvetica] font-normal text-[#ffffff] text-[30px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            keyboard_arrow_right
          </div>
        </div>
      </div>
      <img
        className="absolute w-[92px] h-[92px] top-[3378px] left-[722px]"
        alt="Group"
        src="group-48.png"
      />
      <img
        className="absolute w-[92px] h-[92px] top-[3378px] left-[626px]"
        alt="Group"
        src="group-47.png"
      />
      <img
        className="absolute w-[1196px] h-px top-[1409px] left-[122px] object-cover"
        alt="Line"
        src="line-13.svg"
      />
      <p className="w-[518px] top-[2714px] left-[459px] text-[#2a1e17] leading-[33px] absolute [font-family:'Montserrat-Medium',Helvetica] font-medium text-[20px] text-center tracking-[0]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="absolute w-[1601px] h-[390px] top-[2899px] left-[-83px]">
        <div className="absolute w-[591px] h-[340px] top-0 left-[510px]">
          <div className="relative w-[587px] h-[340px]">
            <div className="absolute w-[455px] h-[292px] top-[48px] left-[67px] bg-[#ffffff] rounded-[20px] shadow-[0px_2px_87px_#00000033]" />
            <img
              className="absolute w-[142px] h-[115px] top-0 left-[222px]"
              alt="Mask group"
              src="mask-group.png"
            />
            <p className="absolute w-[587px] top-[123px] left-0 opacity-90 [font-family:'Montserrat-Medium',Helvetica] font-medium text-gray-1 text-[16px] text-center tracking-[0] leading-[28px]">
              “The freelance talent we work with are more
              <br /> productive than we ever thought possible.
              <br />
              “The freelance talent we work with <br />
              are more productive than .””
            </p>
            <p className="absolute top-[250px] left-[175px] [font-family:'Montserrat-Bold',Helvetica] font-normal text-gray-1 text-[16px] text-center tracking-[0] leading-[29px]">
              <span className="font-bold">
                Sam Crockett
                <br />
              </span>
              <span className="[font-family:'Montserrat-Medium',Helvetica] font-medium">
                Independent Web Developer
              </span>
            </p>
          </div>
        </div>
        <div className="absolute w-[591px] h-[340px] top-[50px] left-[1010px]">
          <div className="relative w-[587px] h-[340px]">
            <div className="absolute w-[455px] h-[292px] top-[48px] left-[67px] bg-[#ffffff] rounded-[20px] shadow-[0px_2px_87px_#00000033]" />
            <img
              className="absolute w-[142px] h-[115px] top-0 left-[222px]"
              alt="Mask group"
              src="mask-group-2.png"
            />
            <p className="absolute w-[587px] top-[123px] left-0 opacity-90 [font-family:'Montserrat-Medium',Helvetica] font-medium text-gray-1 text-[16px] text-center tracking-[0] leading-[28px]">
              “The freelance talent we work with are more
              <br /> productive than we ever thought possible.
              <br />
              “The freelance talent we work with <br />
              are more productive than .””
            </p>
            <p className="absolute top-[250px] left-[175px] [font-family:'Montserrat-Bold',Helvetica] font-normal text-gray-1 text-[16px] text-center tracking-[0] leading-[29px]">
              <span className="font-bold">
                Sam Crockett
                <br />
              </span>
              <span className="[font-family:'Montserrat-Medium',Helvetica] font-medium">
                Independent Web Developer
              </span>
            </p>
          </div>
        </div>
        <div className="absolute w-[591px] h-[340px] top-[50px] left-0">
          <div className="relative w-[587px] h-[340px]">
            <div className="absolute w-[455px] h-[292px] top-[48px] left-[67px] bg-[#ffffff] rounded-[20px] shadow-[0px_2px_87px_#00000033]" />
            <img
              className="absolute w-[142px] h-[115px] top-0 left-[222px]"
              alt="Mask group"
              src="mask-group-3.png"
            />
            <p className="absolute w-[587px] top-[123px] left-0 opacity-90 [font-family:'Montserrat-Medium',Helvetica] font-medium text-gray-1 text-[16px] text-center tracking-[0] leading-[28px]">
              “The freelance talent we work with are more
              <br /> productive than we ever thought possible.
              <br />
              “The freelance talent we work with <br />
              are more productive than .””
            </p>
            <p className="absolute top-[250px] left-[175px] [font-family:'Montserrat-Bold',Helvetica] font-normal text-gray-1 text-[16px] text-center tracking-[0] leading-[29px]">
              <span className="font-bold">
                Sam Crockett
                <br />
              </span>
              <span className="[font-family:'Montserrat-Medium',Helvetica] font-medium">
                Independent Web Developer
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="absolute w-[1466px] h-[579px] top-[3513px] left-0">
        <div className="relative w-[1440px] h-[579px] bg-[#1f1f1f]">
          <div className="absolute top-[83px] left-[1035px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-white text-[14px] tracking-[0] leading-[33px] whitespace-nowrap">
            Download our App
          </div>
          <div className="absolute top-[512px] left-[120px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-white text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
            2021- 2022 uptechunt
          </div>
          <div className="absolute top-[512px] left-[268px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-white text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
            Terms of Service
          </div>
          <div className="absolute top-[512px] left-[390px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-white text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
            Privacy Policy
          </div>
          <div className="absolute top-[512px] left-[499px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-white text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
            CA Notice at Collection
          </div>
          <div className="left-[119px] absolute top-[90px] [font-family:'Montserrat-ExtraBold',Helvetica] font-extrabold text-white text-[12px] tracking-[0] leading-[22px] whitespace-nowrap">
            For clients
          </div>
          <p className="absolute top-[120px] left-[119px] opacity-80 [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-white text-[12px] tracking-[0] leading-[34px]">
            How to Hire
            <br />
            Talent Marketplace
            <br />
            Project Catalog
            <br />
            Talent Scout
            <br />
            Enterprise
            <br />
            Payroll Services
            <br />
            Direct Contracts
            <br />
            Hire Worldwide
            <br />
            Hire in the USA
          </p>
          <div className="left-[322px] absolute top-[90px] [font-family:'Montserrat-ExtraBold',Helvetica] font-extrabold text-white text-[12px] tracking-[0] leading-[22px] whitespace-nowrap">
            For Talent
          </div>
          <p className="absolute top-[120px] left-[322px] opacity-80 [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-white text-[12px] tracking-[0] leading-[34px]">
            For Talent
            <br />
            How to Find Work
            <br />
            Direct Contracts
            <br />
            Find Freelance Jobs Worldwide
            <br />
            Find Freelance Jobs in the USA
          </p>
          <div className="absolute top-[90px] left-[627px] [font-family:'Montserrat-ExtraBold',Helvetica] font-extrabold text-white text-[12px] tracking-[0] leading-[22px] whitespace-nowrap">
            Resources
          </div>
          <p className="absolute top-[120px] left-[627px] opacity-80 [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-white text-[12px] tracking-[0] leading-[34px]">
            Help &amp; Support
            <br />
            Success Stories
            <br />
            Upwork Reviews
            <br />
            Resources
            <br />
            Blog
            <br />
            Community
            <br />
            Affiliate Program
          </p>
          <div className="absolute top-[90px] left-[831px] [font-family:'Montserrat-ExtraBold',Helvetica] font-extrabold text-white text-[12px] tracking-[0] leading-[22px] whitespace-nowrap">
            Company
          </div>
          <p className="absolute top-[120px] left-[831px] opacity-80 [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-white text-[12px] tracking-[0] leading-[34px]">
            About Us
            <br />
            Leadership
            <br />
            Investor Relations
            <br />
            Careers
            <br />
            Our Impact
            <br />
            Press
            <br />
            Contact Us
            <br />
            Trust, Safety &amp; Security
            <br />
            UK Modern Slavery Statement
          </p>
          <img
            className="absolute w-[1210px] h-px top-[480px] left-[120px] object-cover"
            alt="Line"
            src="line-5.svg"
          />
          <img
            className="absolute w-px h-[21px] top-[507px] left-[634px] object-cover"
            alt="Line"
            src="line-6.svg"
          />
          <img
            className="absolute w-[28px] h-[27px] top-[152px] left-[1035px]"
            alt="Group"
            src="group-28.png"
          />
          <img
            className="absolute w-[29px] h-[29px] top-[155px] left-[1079px]"
            alt="App store"
            src="app-store.svg"
          />
        </div>
      </div>
      <div className="absolute w-[352px] h-[373px] top-[970px] left-[46px]">
        <div className="absolute top-[22px] left-[67px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-white text-[24px] tracking-[0] leading-[normal]">
          For Clients
        </div>
        <div className="absolute w-[285px] h-[235px] top-[138px] left-[67px] rounded-[18px] [background:linear-gradient(180deg,rgb(66,96,218)_0%,rgb(37,61,156)_100%)]" />
        <div className="absolute top-[292px] left-[90px] [font-family:'Merriweather-Bold',Helvetica] font-bold text-[#ffffff] text-[23px] tracking-[0] leading-[normal]">
          User experience
          <br />
          designers
        </div>
        <img
          className="absolute w-[239px] h-[247px] top-0 left-[90px] object-cover"
          alt="Rectangle"
          src="rectangle-28.svg"
        />
        <div className="absolute w-[115px] h-[18px] top-[267px] left-[90px]">
          <div className="relative w-[113px] h-[18px] bg-[#3859bf] rounded-[4px]">
            <div className="absolute top-px left-[14px] opacity-50 [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#ffffffe6] text-[12px] tracking-[0] leading-[normal]">
              304k designer
            </div>
          </div>
        </div>
        <img
          className="absolute w-[92px] h-[92px] top-[154px] left-0"
          alt="Group"
          src="group-39.png"
        />
      </div>
      <div className="absolute w-[285px] h-[235px] top-[1108px] left-[425px] rounded-[18px] shadow-[0px_4px_41px_#00000096] [background:linear-gradient(180deg,rgb(31,31,31)_0%,rgb(41.44,41.44,41.44)_100%)]">
        <div className="absolute top-[154px] left-[23px] [font-family:'Merriweather-Bold',Helvetica] font-bold text-[#ffffff] text-[23px] tracking-[0] leading-[normal]">
          User interface
          <br />
          designers
        </div>
        <div className="absolute w-[115px] h-[18px] top-[129px] left-[23px]">
          <div className="relative w-[113px] h-[18px] bg-[#373737] rounded-[4px]">
            <div className="absolute top-px left-[14px] opacity-50 [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#ffffffe6] text-[12px] tracking-[0] leading-[normal]">
              304k designer
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute w-[239px] h-[247px] top-[15807px] left-[29048px]"
        alt="Rectangle"
        src="rectangle-30.png"
      />
      <div className="absolute w-[285px] h-[373px] top-[970px] left-[733px]">
        <div className="absolute w-[285px] h-[235px] top-[138px] left-0 rounded-[18px] [background:linear-gradient(180deg,rgb(66,96,218)_0%,rgb(37,61,156)_100%)]" />
        <div className="absolute top-[292px] left-[23px] [font-family:'Merriweather-Bold',Helvetica] font-bold text-[#ffffff] text-[23px] tracking-[0] leading-[normal]">
          Graphics designer
        </div>
        <img
          className="absolute w-[239px] h-[247px] top-0 left-[23px] object-cover"
          alt="Rectangle"
          src="rectangle-32.svg"
        />
        <div className="absolute w-[115px] h-[18px] top-[267px] left-[23px]">
          <div className="relative w-[113px] h-[18px] bg-[#3859bf] rounded-[4px]">
            <div className="absolute top-px left-[14px] opacity-50 [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#ffffffe6] text-[12px] tracking-[0] leading-[normal]">
              304k designer
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-[354px] h-[373px] top-[970px] left-[1042px]">
        <div className="absolute w-[285px] h-[235px] top-[138px] left-0 rounded-[18px] [background:linear-gradient(180deg,rgb(31,31,31)_0%,rgb(41.44,41.44,41.44)_100%)]" />
        <div className="absolute top-[292px] left-[23px] [font-family:'Merriweather-Bold',Helvetica] font-bold text-[#ffffff] text-[23px] tracking-[0] leading-[normal]">
          Animator
        </div>
        <img
          className="absolute w-[239px] h-[247px] top-0 left-[23px] object-cover"
          alt="Rectangle"
          src="rectangle-34.png"
        />
        <div className="absolute w-[115px] h-[18px] top-[267px] left-[23px]">
          <div className="relative w-[113px] h-[18px] bg-[#373737] rounded-[4px]">
            <div className="absolute top-px left-[14px] opacity-50 [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#ffffffe6] text-[12px] tracking-[0] leading-[normal]">
              304k designer
            </div>
          </div>
        </div>
        <img
          className="absolute w-[92px] h-[92px] top-[154px] left-[262px]"
          alt="Group"
          src="group-34.png"
        />
      </div>
      <p className="w-[525px] top-[842px] left-[457px] text-[#2a1e17] leading-[33px] absolute [font-family:'Montserrat-Medium',Helvetica] font-medium text-[20px] text-center tracking-[0]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
    </div>
  )
}
