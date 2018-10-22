import React, { PureComponent } from 'react';
import { getSerialByIdRequest } from '../../actions';
import { connect } from 'react-redux';
import styles from './ShowPage.module.css';

class ShowPage extends PureComponent {
  componentDidMount() {
    console.log(this.props);
    const { getSerialByIdRequest, match } = this.props;
    getSerialByIdRequest(match.params.id);
  }

  renderCast = data => {
    if (data) {
      return data.cast.map(({ character, person: { id, name, image } }) => (
        <div key={`${id}+${character.id}`} className="t-person">
          <p>{name}</p>
          {image && <img src={image.medium} alt={name} />}
        </div>
      ));
    }
    return null;
  };

  renderPage = () => {
    const {
      entities: { name, image, summary, _embedded }
    } = this.props;
    return (
      <div>
        <p>{name}</p>
        {image && <img src={image.medium} alt={name} />}
        <div dangerouslySetInnerHTML={{ __html: summary }} />
        <div className={styles.cast}>{this.renderCast(_embedded)}</div>
      </div>
    );
  };

  renderLoading = () => <p>Идет загрузка...</p>;

  render() {
    const { isFetching } = this.props;
    return isFetching ? this.renderLoading() : this.renderPage();
  }
}

const mapStateToProps = state => ({
  entities: state.shows.entities,
  isFetching: state.shows.isFetching
});

const mapDispatchToProps = {
  getSerialByIdRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
