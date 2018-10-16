import React, { PureComponent } from 'react';
import { getSerialByIdRequrst } from '../../actions';
import { connect } from 'react-redux';
import styles from './ShowPage.module.css';

class ShowPage extends PureComponent {
    componentDidMount() {        
        const { getSerialByIdRequrst, match } = this.props;
        getSerialByIdRequrst(match.params.id)
    }

    renderCast = data => {
        return null
    }

  render() {
      const { name, image, summary, _embedded } = this.props;
    return (<div>
        <p>{name}</p>
        {image && <img src={image.medium} alt={name}/>}
        <div dangerouslySetInnerHTML={{__html: summary}}/>
        <div className={styles.cast}>
            {this.renderCast()}
        </div>
        
    </div>)
  }
}

const mapStateToProps = state => ({
    entities: state.shows.entities,
    isFetching: state.shows.isFetching
});

const mapDispatchToProps = {
  getSerialByIdRequrst
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
