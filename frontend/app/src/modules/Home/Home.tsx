import React from 'react';
import { connect } from 'react-redux';
import { Wrapper } from '../../components';

const Home: React.FC = () => {

  return (
    <section className="home-section">
      <Wrapper>
        <h2>Test</h2>
      </Wrapper>
    </section>
  );
};

const mapStateToProps = (state: any) => {
  return {
    // title: state.root.title,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    // changeTitle: (e: React.ChangeEvent<HTMLInputElement>) => dispatch({ type: 'UPDATE_TITLE', payload: e.target.value })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
