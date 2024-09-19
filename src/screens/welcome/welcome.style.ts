import {StyleSheet} from 'react-native';
import {theme} from 'styles/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  logoWrap: {
    alignSelf: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
  action: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 66,
    paddingHorizontal: 24,
  },
});

export default styles;
