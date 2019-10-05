import ThemeSwitch from '../components/ThemeSwitch'
import { connect } from 'react-redux'
const mapStateToProps = state => {
  return {
    themeColor: state.themeColor
  }
}

const mapDispathToProps = dispatch => {
  return {
    onSwitchColor: color => {
      dispatch({ type: 'CHANGE_COLOR', themeColor: color })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispathToProps
)(ThemeSwitch)
