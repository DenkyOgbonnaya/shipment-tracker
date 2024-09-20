import {StyleSheet} from 'react-native';
import {theme} from 'styles/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  bell: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: theme.colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 0.4,
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  },
});

export default styles;
