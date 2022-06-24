import { scaleFont } from "./Layout";

// FONT FAMILY
export const familyBold = "Montserrat-Bold";
export const familyLight = "Montserrat-Light";
export const familyRegular = "Montserrat-Regular";
export const familySemibold = "Montserrat-Semibold";

// FONT SIZE
export const size28 = scaleFont(28);
export const size20 = scaleFont(20);
export const size18 = scaleFont(18);
export const size16 = scaleFont(16);
export const size14 = scaleFont(14);
export const size12 = scaleFont(12);

// LINE HEIGHT
export const lineHeight28 = scaleFont(30);
export const lineHeight20 = scaleFont(20);
export const lineHeight16 = scaleFont(16);

// FONT STYLE
export const fontBold = {
  letterSpacing: 0,
  fontFamily: familyBold,
};

export const fontLight = {
  letterSpacing: 0,
  fontFamily: familyLight,
};

export const fontRegular = {
  letterSpacing: -0.5,
  fontFamily: familyRegular,
};

export const fontSemibold = {
  letterSpacing: 0,
  fontFamily: familySemibold,
};
