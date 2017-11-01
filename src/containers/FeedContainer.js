import { connect } from 'react-redux';
import Feed from '../components/Feed/Feed';

const mapStateToProps = ({ posts }) => ({ posts });

export default connect(mapStateToProps)(Feed);
