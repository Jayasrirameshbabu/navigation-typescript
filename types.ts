import {ImageSourcePropType} from 'react-native';
export type stackScreens = {
  WelcomeScreen: undefined;
  LoginScreen: undefined;
  OtpScreen: {mobileNumber: string};
  PracticeScreen: undefined;
  ForgotPasswordScreen: undefined;
  FlexLayout: undefined;
  PaymentsScreen: undefined;
  NoPaymentsScreen: undefined;
  WishListScreen: undefined;
  SetPasswordScreen: undefined;
  LandingScreen: undefined;
  ServicesScreen: undefined;
  ACServicesScreen: {
    id: number;
    title: string;
    image: ImageSourcePropType;
    price: string;
  };
  ServiceBookingMyselfScreen: {
    id: number;
    title: string;
    image: ImageSourcePropType;
    price: string;
  };
  ServiceBookingOthersScreen: {
    id: number;
    title: string;
    image: ImageSourcePropType;
    price: string;
  };
  ConfirmBookingScreen: undefined;
};

export type buttonProps = {
  title: string;
  image?: ImageSourcePropType;
  onPress?: () => void;
  buttonStyle: object;
  imageStyle?: object;
  textStyle: object;
};

export type inputBox = {
  placeholder: string;
  image?: ImageSourcePropType;
  onChangeText?: (value: any) => void;
  inputSectionStyle: object;
  inputImageStyle?: object;
  inputTextStyle: object;
  dropdownData?: Array<{id: number; name: string}>;
  onDropdownChange?: (item: {id: number; name: string}) => void;
  isDropdown?: boolean;
  iconStyle?: object;
  value?: string;
  keyboardType?: any;
};

export type paymentListITemProps = {
  id: number;
  name: string;
  amount: number | string;
  created_at?: string;
  channel?: string | null;
  payment_status?: string;
  purpose?: string;
  image?: ImageSourcePropType;
};

export type wishlistITemProps = {
  id: number;
  title: string;
  price: number | string;
  imageContainerStyles?: object;
  image?: ImageSourcePropType;
  listItemStyles: object;
  imageStyles?: object;
  titleStyles?: object;
  priceStyles?: object;
  headerContainerStyles?: object;
  priceTag?: string;
  listBodyStyles?: object;
};

export type boxModalTypes = {
  header?: string;
  title?: string;
  placeholder: string;
  footerText: string;
  footerimage?: ImageSourcePropType;
  buttonimage?: ImageSourcePropType;
  onChangeMobileNumber: (text: string) => void;
  mobileNumber: string;
  isValidMobileNumber: boolean;
  handlePress: () => void;
};
