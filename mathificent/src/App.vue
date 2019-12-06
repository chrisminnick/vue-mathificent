<template>
  <div id="app">
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Mathificent</a>
        <button className="navbar-toggler" type="button"
        data-toggle="collapse" data-target="#navbarText">
        <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
              <a className="nav-link" href="/">Home</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

    <h1>Mathificent</h1>
      <footer className="navbar fixed-bottom bg-dark">
        <a href="https://www.webucator.com">
        Copyright &copy; {new Date().getFullYear()} Webucator
        </a>
      </footer>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
