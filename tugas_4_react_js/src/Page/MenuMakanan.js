import React, { Component } from 'react';
import ListMakanan from '../ListData/ListMakanan'

class MenuMakanan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      namaPesanan: "",
      jumlahPesanan: 0,
      tampil: ""
    }
    this.nasiPadang = this.nasiPadang.bind(this);
    this.sate = this.sate.bind(this);
    this.sotoLamongan = this.sotoLamongan.bind(this);
    this.nasiKentut = this.nasiKentut.bind(this);
    this.nasiKuning = this.nasiKuning.bind(this);
    this.batal = this.batal.bind(this);
    this.pilihPesanan = this.pilihPesanan.bind(this);
  }
  pilihPesanan(value, e) {
    this.setState(
      {
        [value]: e.target.value,
        tampil:true
      });
  }
  nasiPadang() {
    this.setState((props, state) => {
      return {
        namaPesanan: "Nasi Padang",
        jumlahPesanan: this.state.jumlahPesanan + 1,
        tampil: true
      };
    });
  }
  sate() {
    this.setState((props, state) => {
      return {
        namaPesanan: "Sate",
        jumlahPesanan: this.state.jumlahPesanan + 1,
        tampil: true
      };
    });
  }
  sotoLamongan() {
    this.setState((props, state) => {
      return {
        namaPesanan: "Soto Lamongan",
        jumlahPesanan: this.state.jumlahPesanan + 1,
        tampil: true
      };
    });
  }
  nasiKentut() {
    this.setState((props, state) => {
      return {
        namaPesanan: "Nasi Kentut",
        jumlahPesanan: this.state.jumlahPesanan + 1,
        tampil: true
      };
    });
  }
  nasiKuning() {
    this.setState((props, state) => {
      return {
        namaPesanan: "Nasi Kuning",
        jumlahPesanan: this.state.jumlahPesanan + 1,
        tampil: true
      };
    });
  }
  batal() {
    this.setState((props, state) => {
      return {
        namaPesanan: "",
        jumlahPesanan: 0,
        tampil: false
      };
    });
  }
  render() {
    return (
      <div>
        <h3>Daftar Makanan Yang Kami Sediakan: </h3>
        <table>
          <tbody>
            <tr>
              <td>
                <ListMakanan linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"/>
                <center>
                  <button onClick={this.nasiPadang}>Pesan Sekarang</button>
                </center>
              </td>
              <td>
                <ListMakanan linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"/>
                <center>
                  <button onClick={this.sate}>Pesan Sekarang</button>
                </center>
              </td>
              <td>
                <ListMakanan linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"/>
                <center>
                  <button onClick={this.sotoLamongan}>Pesan Sekarang</button>
                </center>
              </td>
              <td>
                <ListMakanan linkGambar="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png"/>
                <center>
                  <button onClick={this.nasiKentut}>Pesan Sekarang</button>
                </center>
              </td>
              <td>
                <ListMakanan linkGambar="https://pesona.travel/media/nasi-kuning-sarapan-khas-nusantara-bermakna-mendalam_144651_1140.jpg"/>
                <center>
                  <button onClick={this.nasiKuning}>Pesan Sekarang</button>
                </center>
              </td>
            </tr>
          </tbody>
        </table>
        <br/>
        <input type="text" placeholder="Masukkan Pesanan Anda" onChange={(e) => this.pilihPesanan("namaPesanan",e)} value={this.state.namaPesanan}/>
        <input type="number" placeholder="Masukkan Jumlah Pesanan" onChange={(e) => this.pilihPesanan("jumlahPesanan",e)} value={this.state.jumlahPesanan}/>
        <button onClick={this.batal}>Batalkan Semua Pesanan</button>
        {
          this.state.tampil === true ? (
            <div>
              <h2>Pesanan Anda: {this.state.namaPesanan}</h2>
              <h3>Jumlah Pesanan: {this.state.jumlahPesanan} </h3>
            </div>
          ) : (
            <div>
              <center>
                <h1>Anda Belum Memesan</h1>
              </center>
            </div>
          )
        }
      </div>
    );
  }
}
export default MenuMakanan;
