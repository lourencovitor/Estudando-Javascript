import React, { Component } from "react";
import Main from "../template/Main";
import axios from "axios";

const headerProps = {
  icon: "users",
  title: "Usuários",
  subtitle: "Cadastro de usuário: Incluir, Listar, Alterar e Excluir",
};

const baseUrl = "http://localhost:3001/user";
const initialState = {
  user: { name: "", email: "" },
  list: [],
};

export default class UserCrud extends Component {
  state = {
    ...initialState,
  };

  componentWillMount() {
    axios(baseUrl).then((res) => {
      this.setState({ list: res.data });
    });
  }

  clear() {
    this.setState({
      user: initialState.user,
    });
  }

  save() {
    const user = this.state.user;
    const method = user.id ? "put" : "post";
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
    axios[method](url, user).then((res) => {
      const list = this.getUpdatedList(res.data);
      console.log(res.data);
      this.setState({
        user: initialState.user,
        list,
      });
    });
  }

  getUpdatedList(user, add = true) {
    const list = this.state.list.filter((u) => u.id !== user.id);
    if (add) list.unshift(user);
    return list;
  }

  updatFild(event) {
    const user = { ...this.state.user };
    user[event.target.name] = event.target.value;
    this.setState({
      user,
    });
  }

  renderForm() {
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Nome</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.user.name}
                onChange={(e) => this.updatFild(e)}
                placeholder="Digite o nome..."
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>E-mail</label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={this.state.user.email}
                onChange={(e) => this.updatFild(e)}
                placeholder="Digite o e-mail..."
              />
            </div>
          </div>
        </div>
        <div className="col-12 d-flex justify-content-end">
          <button className="btn btn-primary" onClick={(e) => this.save(e)}>
            Salvar
          </button>
          <button
            className="btn btn-secondary ml-2"
            onClick={(e) => this.clear(e)}
          >
            Cancelar
          </button>
        </div>
      </div>
    );
  }

  load(user) {
    this.setState({
      user,
    });
  }

  remove(user) {
    axios.delete(`${baseUrl}/${user.id}`).then((res) => {
      const list = this.getUpdatedList(user, false);
      this.setState({
        list,
      });
    });
  }

  renderTable() {
    return (
      <table className="table mt-4">
        <tr>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Ações</th>
        </tr>
        <tbody>{this.renderRowns()}</tbody>
      </table>
    );
  }

  renderRowns() {
    return this.state.list.map((user) => {
      return (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <button className="btn btn-warning" onClick={() => this.load(user)}>
              <i className="fa fa-pencil"></i>
            </button>
            <button
              className="btn btn-danger ml-2"
              onClick={() => this.remove(user)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <Main {...headerProps}>
        {this.renderForm()}
        {this.renderTable()}
      </Main>
    );
  }
}
