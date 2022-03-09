import { Text, View, ActivityIndicator } from 'react-native';
import { styles } from './app-text.styles';

//import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { palette } from '@styles';

type Props = {
  children: React.ReactNode;
  color?: string;
  fontSize?: number;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  style?: object;
  onPress?: Function;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
  numberOfLines?: number;
};
const defaultProps: Props = {
  children: '',
  color: palette.text,
  fontSize: 16,
  fontWeight: 'normal',
  style: {},
  onPress: () => {},
  ellipsizeMode: 'tail',
  numberOfLines: 0,
};

function AppText({
  color,
  fontSize,
  fontWeight,
  children,
  style,
  onPress,
  ellipsizeMode,
  numberOfLines,
}: Props = defaultProps) {
  return (
    <Text
      ellipsizeMode={ellipsizeMode}
      numberOfLines={numberOfLines}
      style={[
        {
          color: color,
          fontSize: fontSize,
          fontWeight: fontWeight,
        },
        style,
      ]}
      onPress={(e) => {
        onPress(e);
      }}
    >
      {children}
    </Text>
  );
}
AppText.defaultProps = defaultProps;

export { AppText };
