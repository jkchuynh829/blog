import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PostEditor from '../components/PostEditor/PostEditor';
import { createPost } from '../actions';

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ createPost }, dispatch),
});

export default connect(null, mapDispatchToProps)(PostEditor);
