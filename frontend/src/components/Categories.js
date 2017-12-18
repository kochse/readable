import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../actions';

class Categories extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  renderCategory = category => {
    if(this.props.current === category.path) {
      return <a className="nav-link">{category.name}</a>;
    }
    return <Link className="nav-link" to={`/${category.path}`}>{category.name}</Link>;
  };

  renderCategories = () => {
    const { categories } = this.props;
    if(Object.keys(categories).length === 0) {
      return null;
    }
    return Object.keys(categories).map(key => {
      return this.renderCategory(categories[key]);
    });
  };

  render() {
    return (
      <nav className="nav">
        {this.renderCategories()}
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps, { fetchCategories })(Categories);