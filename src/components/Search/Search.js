import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShowPreview from '../ShowPreview';
import styles from './Search.module.css';
import { getSerialsRequest } from '../../actions';
import cn from 'classnames';

class Search extends Component {
  state = {
    value: ''
  };

  handleChangeInput = ({ target: { value } }) => this.setState({ value });

  handleOnClick = () => {
    const { getSerialsRequest } = this.props;
    const { value } = this.state;
    getSerialsRequest(value);
  };

  renderSeries = () => {
    const { data } = this.props;
    if (!data) return null;
    return data.map(el => <ShowPreview key={el.id} {...el} />);
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <div className={styles.previewList}>
          <input
            className={cn(styles.input, 't-input')}
            type="text"
            placeholder="Название сериала"
            value={value}
            onChange={this.handleChangeInput}
          />
          <div className={styles.buttonWrapper}>
            <button
              className={cn(styles.button, 't-search-button')}
              onClick={this.handleOnClick}
            >
              Найти
            </button>
          </div>
        </div>
        <div className={cn(styles.searchPanel, 't-search-result')}>
          {this.renderSeries()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.search.result
});

const mapDispatchToProps = {
  getSerialsRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
