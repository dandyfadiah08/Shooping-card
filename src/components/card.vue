<template>
    <div class="frame gap-5">

    <div class="card1"
    >
        <div class="group">
          <img class="foto" src="https://dummyjson.com/image/i/products/1/thumbnail.jpg" alt="foto">
        </div>
        <div class="rektangle ">
          <label class="smartphone ml-10 mt-1">Smartphones</label>
        </div>
        <div class="text">
          <label class="jenis">iPhone 9</label>
          <label class="deskripsi">An apple mobile which is nothing like apple</label>
          <label class="harga">$ 549 
            <div class="flex items-center gap-2 mt-3">
            <div class="discountrektangel ">
            <p class="hargadiscount">12.96%</p>
            </div>
            <span class="potongan text-sm line-through opacity-50">$ 71.1504</span>
            </div>
            <span class="flex items-center mt-6 gap-2">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.549458 5.63406L5.64573 4.90408L7.92389 0.352135C7.98612 0.227506 8.08848 0.126615 8.21494 0.0652895C8.53207 -0.0890138 8.91746 0.0395723 9.07603 0.352135L11.3542 4.90408L16.4505 5.63406C16.591 5.65384 16.7194 5.71912 16.8178 5.81803C16.9367 5.93848 17.0022 6.10053 16.9999 6.26856C16.9977 6.4366 16.9278 6.59688 16.8057 6.71418L13.1185 10.2572L13.9896 15.2602C14.0101 15.3766 13.997 15.4963 13.9519 15.6057C13.9068 15.7151 13.8315 15.8099 13.7346 15.8793C13.6376 15.9488 13.5229 15.99 13.4033 15.9984C13.2838 16.0068 13.1643 15.982 13.0583 15.9269L8.49996 13.5648L3.94162 15.9269C3.81717 15.9922 3.67265 16.0139 3.53416 15.9902C3.1849 15.9308 2.95006 15.6044 3.01028 15.2602L3.8814 10.2572L0.194184 6.71418C0.0938245 6.61724 0.0275873 6.49064 0.00751532 6.35216C-0.046679 6.00597 0.198199 5.68549 0.549458 5.63406Z" fill="#FFC226"/>
</svg>
            <span class="rating">4.69</span>
            </span>
            
        <button class="keranjang mt-12" @click.prevent="checkout('iPhone 9', 1 , 549 )">
          <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70534 0.823242H0.916672V3.65658H5.47551L9.39967 21.6171H9.41667V22.0732H27.8333V21.7219L30.9401 8.03549L31.4189 6.48991H8.92792L8.12042 2.79099L7.70534 0.823242ZM27.8149 9.32324H9.54701L11.7131 19.2399H25.5638L27.8149 9.32324Z" fill="white"/>
</svg>
        <span class="ok" >Add To Card</span>
        </button>
          </label>
        </div>
    </div>
    <div class="card2"
    >
        <div class="group">
          <img class="foto" src="https://dummyjson.com/image/i/products/2/thumbnail.jpg" alt="foto">
        </div>
        <div class="rektangle ">
          <label class="smartphone ml-10 mt-1">smartphones</label>
        </div>
        <div class="text">
          <label class="jenis">iPhone X</label>
          <label class="deskripsi">SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic...</label>
          <label class="harga">$ 899
            <div class="flex items-center gap-2 mt-3">
            <div class="discountrektangel ">
            <p class="hargadiscount">17.94%</p>
            </div>
            <span class="potongan text-sm line-through opacity-50">$ 161.2806</span>
            </div>
            <span class="flex items-center mt-6 gap-2">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.549458 5.63406L5.64573 4.90408L7.92389 0.352135C7.98612 0.227506 8.08848 0.126615 8.21494 0.0652895C8.53207 -0.0890138 8.91746 0.0395723 9.07603 0.352135L11.3542 4.90408L16.4505 5.63406C16.591 5.65384 16.7194 5.71912 16.8178 5.81803C16.9367 5.93848 17.0022 6.10053 16.9999 6.26856C16.9977 6.4366 16.9278 6.59688 16.8057 6.71418L13.1185 10.2572L13.9896 15.2602C14.0101 15.3766 13.997 15.4963 13.9519 15.6057C13.9068 15.7151 13.8315 15.8099 13.7346 15.8793C13.6376 15.9488 13.5229 15.99 13.4033 15.9984C13.2838 16.0068 13.1643 15.982 13.0583 15.9269L8.49996 13.5648L3.94162 15.9269C3.81717 15.9922 3.67265 16.0139 3.53416 15.9902C3.1849 15.9308 2.95006 15.6044 3.01028 15.2602L3.8814 10.2572L0.194184 6.71418C0.0938245 6.61724 0.0275873 6.49064 0.00751532 6.35216C-0.046679 6.00597 0.198199 5.68549 0.549458 5.63406Z" fill="#FFC226"/>
</svg>
            <span class="rating">4.44</span>
            </span>
            
        <button class="keranjang mt-12" @click.prevent="checkout('iPhone X', 1 , 899 )">
          <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70534 0.823242H0.916672V3.65658H5.47551L9.39967 21.6171H9.41667V22.0732H27.8333V21.7219L30.9401 8.03549L31.4189 6.48991H8.92792L8.12042 2.79099L7.70534 0.823242ZM27.8149 9.32324H9.54701L11.7131 19.2399H25.5638L27.8149 9.32324Z" fill="white"/>
</svg>
        <span class="ok">Add To Card</span>
        </button>
          </label>
        </div>
    </div>
 <div class="card3"
    >
        <div class="group">
          <img class="foto" src="https://dummyjson.com/image/i/products/3/thumbnail.jpg" alt="foto">
        </div>
        <div class="rektangle ">
          <label class="smartphone ml-10 mt-1">smartphones</label>
        </div>
        <div class="text">
          <label class="jenis">Samsung Universe 9</label>
          <label class="deskripsi">Samsung's new variant which goes beyond Galaxy to the Universe</label>
          <label class="harga">$ 1249
            <div class="flex items-center gap-2 mt-3">
            <div class="discountrektangel ">
            <p class="hargadiscount">15.46%</p>
            </div>
            <span class="potongan text-sm line-through opacity-50">$ 193.0954</span>
            </div>
            <span class="flex items-center mt-6 gap-2">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.549458 5.63406L5.64573 4.90408L7.92389 0.352135C7.98612 0.227506 8.08848 0.126615 8.21494 0.0652895C8.53207 -0.0890138 8.91746 0.0395723 9.07603 0.352135L11.3542 4.90408L16.4505 5.63406C16.591 5.65384 16.7194 5.71912 16.8178 5.81803C16.9367 5.93848 17.0022 6.10053 16.9999 6.26856C16.9977 6.4366 16.9278 6.59688 16.8057 6.71418L13.1185 10.2572L13.9896 15.2602C14.0101 15.3766 13.997 15.4963 13.9519 15.6057C13.9068 15.7151 13.8315 15.8099 13.7346 15.8793C13.6376 15.9488 13.5229 15.99 13.4033 15.9984C13.2838 16.0068 13.1643 15.982 13.0583 15.9269L8.49996 13.5648L3.94162 15.9269C3.81717 15.9922 3.67265 16.0139 3.53416 15.9902C3.1849 15.9308 2.95006 15.6044 3.01028 15.2602L3.8814 10.2572L0.194184 6.71418C0.0938245 6.61724 0.0275873 6.49064 0.00751532 6.35216C-0.046679 6.00597 0.198199 5.68549 0.549458 5.63406Z" fill="#FFC226"/>
</svg>
            <span class="rating">4.09</span>
            </span>
            
        <button class="keranjang mt-12" @click.prevent="checkout('Samsung Universe 9', 1 , 1249 )">
          <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70534 0.823242H0.916672V3.65658H5.47551L9.39967 21.6171H9.41667V22.0732H27.8333V21.7219L30.9401 8.03549L31.4189 6.48991H8.92792L8.12042 2.79099L7.70534 0.823242ZM27.8149 9.32324H9.54701L11.7131 19.2399H25.5638L27.8149 9.32324Z" fill="white"/>
</svg>
        <span class="ok">Add To Card</span>
        </button>
          </label>
        </div>
    </div>
     <div class="card4"
    >
        <div class="group">
          <img class="foto" src="https://dummyjson.com/image/i/products/4/thumbnail.jpg" alt="foto">
        </div>
        <div class="rektangle ">
          <label class="smartphone ml-10 mt-1">smartphones</label>
        </div>
        <div class="text">
          <label class="jenis">OPPOF19</label>
          <label class="deskripsi">OPPO F19 is officially announced on April 2021.</label>
          <label class="harga">$ 280
            <div class="flex items-center gap-2 mt-3">
            <div class="discountrektangel ">
            <p class="hargadiscount">17.91%</p>
            </div>
            <span class="potongan text-sm line-through opacity-50">$ 50.148</span>
            </div>
            <span class="flex items-center mt-6 gap-2">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.549458 5.63406L5.64573 4.90408L7.92389 0.352135C7.98612 0.227506 8.08848 0.126615 8.21494 0.0652895C8.53207 -0.0890138 8.91746 0.0395723 9.07603 0.352135L11.3542 4.90408L16.4505 5.63406C16.591 5.65384 16.7194 5.71912 16.8178 5.81803C16.9367 5.93848 17.0022 6.10053 16.9999 6.26856C16.9977 6.4366 16.9278 6.59688 16.8057 6.71418L13.1185 10.2572L13.9896 15.2602C14.0101 15.3766 13.997 15.4963 13.9519 15.6057C13.9068 15.7151 13.8315 15.8099 13.7346 15.8793C13.6376 15.9488 13.5229 15.99 13.4033 15.9984C13.2838 16.0068 13.1643 15.982 13.0583 15.9269L8.49996 13.5648L3.94162 15.9269C3.81717 15.9922 3.67265 16.0139 3.53416 15.9902C3.1849 15.9308 2.95006 15.6044 3.01028 15.2602L3.8814 10.2572L0.194184 6.71418C0.0938245 6.61724 0.0275873 6.49064 0.00751532 6.35216C-0.046679 6.00597 0.198199 5.68549 0.549458 5.63406Z" fill="#FFC226"/>
</svg>
            <span class="rating">4.3</span>
            </span>
            
        <button class="keranjang mt-12" @click.prevent="checkout('OPPOF19', 1 , 280 )">
          <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70534 0.823242H0.916672V3.65658H5.47551L9.39967 21.6171H9.41667V22.0732H27.8333V21.7219L30.9401 8.03549L31.4189 6.48991H8.92792L8.12042 2.79099L7.70534 0.823242ZM27.8149 9.32324H9.54701L11.7131 19.2399H25.5638L27.8149 9.32324Z" fill="white"/>
</svg>
        <span class="ok">Add To Card</span>
        </button>
          </label>
        </div>
    </div>
     <div class="card5"
    >
        <div class="group">
          <img class="foto" src="https://dummyjson.com/image/i/products/5/thumbnail.jpg" alt="foto">
        </div>
        <div class="rektangle ">
          <label class="smartphone ml-10 mt-1">smartphones</label>
        </div>
        <div class="text">
          <label class="jenis">Huawei P30</label>
          <label class="deskripsi">Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany ...</label>
          <label class="harga">$ 499
            <div class="flex items-center gap-2 mt-3">
            <div class="discountrektangel ">
            <p class="hargadiscount">10.58%</p>
            </div>
            <span class="potongan text-sm line-through opacity-50">$ 52,7942</span>
            </div>
            <span class="flex items-center mt-6 gap-2">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.549458 5.63406L5.64573 4.90408L7.92389 0.352135C7.98612 0.227506 8.08848 0.126615 8.21494 0.0652895C8.53207 -0.0890138 8.91746 0.0395723 9.07603 0.352135L11.3542 4.90408L16.4505 5.63406C16.591 5.65384 16.7194 5.71912 16.8178 5.81803C16.9367 5.93848 17.0022 6.10053 16.9999 6.26856C16.9977 6.4366 16.9278 6.59688 16.8057 6.71418L13.1185 10.2572L13.9896 15.2602C14.0101 15.3766 13.997 15.4963 13.9519 15.6057C13.9068 15.7151 13.8315 15.8099 13.7346 15.8793C13.6376 15.9488 13.5229 15.99 13.4033 15.9984C13.2838 16.0068 13.1643 15.982 13.0583 15.9269L8.49996 13.5648L3.94162 15.9269C3.81717 15.9922 3.67265 16.0139 3.53416 15.9902C3.1849 15.9308 2.95006 15.6044 3.01028 15.2602L3.8814 10.2572L0.194184 6.71418C0.0938245 6.61724 0.0275873 6.49064 0.00751532 6.35216C-0.046679 6.00597 0.198199 5.68549 0.549458 5.63406Z" fill="#FFC226"/>
</svg>
            <span class="rating">4.09</span>
            </span>
            
        <button class="keranjang mt-12" @click.prevent="checkout('Huawei P30', 1 , 499 )">
          <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70534 0.823242H0.916672V3.65658H5.47551L9.39967 21.6171H9.41667V22.0732H27.8333V21.7219L30.9401 8.03549L31.4189 6.48991H8.92792L8.12042 2.79099L7.70534 0.823242ZM27.8149 9.32324H9.54701L11.7131 19.2399H25.5638L27.8149 9.32324Z" fill="white"/>
</svg>
        <span class="ok">Add To Card</span>
        </button>
          </label>
        </div>
    </div>
         <div class="card6"
    >
        <div class="group">
          <img class="foto" src="https://dummyjson.com/image/i/products/6/thumbnail.png" alt="foto">
        </div>
        <div class="rektangle ">
          <label class="smartphone ml-10 mt-1">laptops</label>
        </div>
        <div class="text">
          <label class="jenis">MacBook Pro</label>
          <label class="deskripsi">MacBook Pro 2021 with mini-LED display may launch between September, November</label>
          <label class="harga">$ 1749
            <div class="flex items-center gap-2 mt-3">
            <div class="discountrektangel ">
            <p class="hargadiscount">11.02%</p>
            </div>
            <span class="potongan text-sm line-through opacity-50">$ 192.7398</span>
            </div>
            <span class="flex items-center mt-6 gap-2">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.549458 5.63406L5.64573 4.90408L7.92389 0.352135C7.98612 0.227506 8.08848 0.126615 8.21494 0.0652895C8.53207 -0.0890138 8.91746 0.0395723 9.07603 0.352135L11.3542 4.90408L16.4505 5.63406C16.591 5.65384 16.7194 5.71912 16.8178 5.81803C16.9367 5.93848 17.0022 6.10053 16.9999 6.26856C16.9977 6.4366 16.9278 6.59688 16.8057 6.71418L13.1185 10.2572L13.9896 15.2602C14.0101 15.3766 13.997 15.4963 13.9519 15.6057C13.9068 15.7151 13.8315 15.8099 13.7346 15.8793C13.6376 15.9488 13.5229 15.99 13.4033 15.9984C13.2838 16.0068 13.1643 15.982 13.0583 15.9269L8.49996 13.5648L3.94162 15.9269C3.81717 15.9922 3.67265 16.0139 3.53416 15.9902C3.1849 15.9308 2.95006 15.6044 3.01028 15.2602L3.8814 10.2572L0.194184 6.71418C0.0938245 6.61724 0.0275873 6.49064 0.00751532 6.35216C-0.046679 6.00597 0.198199 5.68549 0.549458 5.63406Z" fill="#FFC226"/>
</svg>
            <span class="rating">4.57</span>
            </span>
            
        <button class="keranjang mt-12" @click.prevent="checkout('MacBook Pro', 1 , 1749 )">
          <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70534 0.823242H0.916672V3.65658H5.47551L9.39967 21.6171H9.41667V22.0732H27.8333V21.7219L30.9401 8.03549L31.4189 6.48991H8.92792L8.12042 2.79099L7.70534 0.823242ZM27.8149 9.32324H9.54701L11.7131 19.2399H25.5638L27.8149 9.32324Z" fill="white"/>
</svg>
        <span class="ok">Add To Card</span>
        </button>
          </label>
        </div>
    </div>
         <div class="card7"
    >
        <div class="group">
          <img class="foto" src="https://dummyjson.com/image/i/products/7/thumbnail.jpg" alt="foto">
        </div>
        <div class="rektangle ">
          <label class="smartphone ml-10 mt-1">laptops</label>
        </div>
        <div class="text">
          <label class="jenis">Samsung Galaxy Book</label>
          <label class="deskripsi">Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched</label>
          <label class="harga">$ 1499
            <div class="flex items-center gap-2 mt-3">
            <div class="discountrektangel ">
            <p class="hargadiscount">4.15%</p>
            </div>
            <span class="potongan text-sm line-through opacity-50">$ 62.2085</span>
            </div>
            <span class="flex items-center mt-6 gap-2">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.549458 5.63406L5.64573 4.90408L7.92389 0.352135C7.98612 0.227506 8.08848 0.126615 8.21494 0.0652895C8.53207 -0.0890138 8.91746 0.0395723 9.07603 0.352135L11.3542 4.90408L16.4505 5.63406C16.591 5.65384 16.7194 5.71912 16.8178 5.81803C16.9367 5.93848 17.0022 6.10053 16.9999 6.26856C16.9977 6.4366 16.9278 6.59688 16.8057 6.71418L13.1185 10.2572L13.9896 15.2602C14.0101 15.3766 13.997 15.4963 13.9519 15.6057C13.9068 15.7151 13.8315 15.8099 13.7346 15.8793C13.6376 15.9488 13.5229 15.99 13.4033 15.9984C13.2838 16.0068 13.1643 15.982 13.0583 15.9269L8.49996 13.5648L3.94162 15.9269C3.81717 15.9922 3.67265 16.0139 3.53416 15.9902C3.1849 15.9308 2.95006 15.6044 3.01028 15.2602L3.8814 10.2572L0.194184 6.71418C0.0938245 6.61724 0.0275873 6.49064 0.00751532 6.35216C-0.046679 6.00597 0.198199 5.68549 0.549458 5.63406Z" fill="#FFC226"/>
</svg>
            <span class="rating">4.25</span>
            </span>
            
        <button class="keranjang mt-12" @click.prevent="checkout('Samsung Galaxy Book', 1 , 1499 )">
          <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70534 0.823242H0.916672V3.65658H5.47551L9.39967 21.6171H9.41667V22.0732H27.8333V21.7219L30.9401 8.03549L31.4189 6.48991H8.92792L8.12042 2.79099L7.70534 0.823242ZM27.8149 9.32324H9.54701L11.7131 19.2399H25.5638L27.8149 9.32324Z" fill="white"/>
</svg>
        <span class="ok">Add To Card</span>
        </button>
          </label>
        </div>
    </div>
         <div class="card8"
    >
        <div class="group">
          <img class="foto" src="https://dummyjson.com/image/i/products/8/thumbnail.jpg" alt="foto">
        </div>
        <div class="rektangle ">
          <label class="smartphone ml-10 mt-1">Samsung</label>
        </div>
        <div class="text">
          <label class="jenis">Microsoft Surface Laptop 4</label>
          <label class="deskripsi">Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant ...</label>
          <label class="harga">$ 1499
            <div class="flex items-center gap-2 mt-3">
            <div class="discountrektangel ">
            <p class="hargadiscount">10.23%</p>
            </div>
            <span class="potongan text-sm line-through opacity-50">$ 153.3477</span>
            </div>
            <span class="flex items-center mt-6 gap-2">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.549458 5.63406L5.64573 4.90408L7.92389 0.352135C7.98612 0.227506 8.08848 0.126615 8.21494 0.0652895C8.53207 -0.0890138 8.91746 0.0395723 9.07603 0.352135L11.3542 4.90408L16.4505 5.63406C16.591 5.65384 16.7194 5.71912 16.8178 5.81803C16.9367 5.93848 17.0022 6.10053 16.9999 6.26856C16.9977 6.4366 16.9278 6.59688 16.8057 6.71418L13.1185 10.2572L13.9896 15.2602C14.0101 15.3766 13.997 15.4963 13.9519 15.6057C13.9068 15.7151 13.8315 15.8099 13.7346 15.8793C13.6376 15.9488 13.5229 15.99 13.4033 15.9984C13.2838 16.0068 13.1643 15.982 13.0583 15.9269L8.49996 13.5648L3.94162 15.9269C3.81717 15.9922 3.67265 16.0139 3.53416 15.9902C3.1849 15.9308 2.95006 15.6044 3.01028 15.2602L3.8814 10.2572L0.194184 6.71418C0.0938245 6.61724 0.0275873 6.49064 0.00751532 6.35216C-0.046679 6.00597 0.198199 5.68549 0.549458 5.63406Z" fill="#FFC226"/>
</svg>
            <span class="rating">4.43</span>
            </span>
            
        <button class="keranjang mt-12" @click.prevent="checkout('Microsoft Surface Laptop 4', 1 , 1499 )">
          <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70534 0.823242H0.916672V3.65658H5.47551L9.39967 21.6171H9.41667V22.0732H27.8333V21.7219L30.9401 8.03549L31.4189 6.48991H8.92792L8.12042 2.79099L7.70534 0.823242ZM27.8149 9.32324H9.54701L11.7131 19.2399H25.5638L27.8149 9.32324Z" fill="white"/>
</svg>
        <span class="ok">Add To Card</span>
        </button>
          </label>
        </div>
    </div>
         <div class="card9"
    >
        <div class="group">
          <img class="foto" src="https://dummyjson.com/image/i/products/9/thumbnail.jpg" alt="foto">
        </div>
        <div class="rektangle ">
          <label class="smartphone ml-10 mt-1">laptops</label>
        </div>
        <div class="text">
          <label class="jenis">Infinix INBOOK</label>
          <label class="deskripsi">nfinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty</label>
          <label class="harga">$ 1099
            <div class="flex items-center gap-2 mt-3">
            <div class="discountrektangel ">
            <p class="hargadiscount">11.83%</p>
            </div>
            <span class="potongan text-sm line-through opacity-50">$ 130</span>
            </div>
            <span class="flex items-center mt-6 gap-2">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.549458 5.63406L5.64573 4.90408L7.92389 0.352135C7.98612 0.227506 8.08848 0.126615 8.21494 0.0652895C8.53207 -0.0890138 8.91746 0.0395723 9.07603 0.352135L11.3542 4.90408L16.4505 5.63406C16.591 5.65384 16.7194 5.71912 16.8178 5.81803C16.9367 5.93848 17.0022 6.10053 16.9999 6.26856C16.9977 6.4366 16.9278 6.59688 16.8057 6.71418L13.1185 10.2572L13.9896 15.2602C14.0101 15.3766 13.997 15.4963 13.9519 15.6057C13.9068 15.7151 13.8315 15.8099 13.7346 15.8793C13.6376 15.9488 13.5229 15.99 13.4033 15.9984C13.2838 16.0068 13.1643 15.982 13.0583 15.9269L8.49996 13.5648L3.94162 15.9269C3.81717 15.9922 3.67265 16.0139 3.53416 15.9902C3.1849 15.9308 2.95006 15.6044 3.01028 15.2602L3.8814 10.2572L0.194184 6.71418C0.0938245 6.61724 0.0275873 6.49064 0.00751532 6.35216C-0.046679 6.00597 0.198199 5.68549 0.549458 5.63406Z" fill="#FFC226"/>
</svg>
            <span class="rating">4.54</span>
            </span>
            
        <button class="keranjang mt-12"  @click.prevent="checkout('Infinix INBOOK', 1 , 1099 )">
          <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70534 0.823242H0.916672V3.65658H5.47551L9.39967 21.6171H9.41667V22.0732H27.8333V21.7219L30.9401 8.03549L31.4189 6.48991H8.92792L8.12042 2.79099L7.70534 0.823242ZM27.8149 9.32324H9.54701L11.7131 19.2399H25.5638L27.8149 9.32324Z" fill="white"/>
</svg>
        <span class="ok">Add To Card</span>
        </button>
          </label>
        </div>
    </div>
         <div class="card10"
    >
        <div class="group">
          <img class="foto" src="https://dummyjson.com/image/i/products/10/thumbnail.jpeg" alt="foto">
        </div>
        <div class="rektangle ">
          <label class="smartphone ml-10 mt-1">laptops</label>
        </div>
        <div class="text">
          <label class="jenis">HP Pavilion 15-DK1056WM</label>
          <label class="deskripsi">HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD ...</label>
          <label class="harga">$ 1099
            <div class="flex items-center gap-2 mt-3">
            <div class="discountrektangel ">
            <p class="hargadiscount">6.18%</p>
            </div>
            <span class="potongan text-sm line-through opacity-50">$ 68</span>
            </div>
            <span class="flex items-center mt-6 gap-2">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.549458 5.63406L5.64573 4.90408L7.92389 0.352135C7.98612 0.227506 8.08848 0.126615 8.21494 0.0652895C8.53207 -0.0890138 8.91746 0.0395723 9.07603 0.352135L11.3542 4.90408L16.4505 5.63406C16.591 5.65384 16.7194 5.71912 16.8178 5.81803C16.9367 5.93848 17.0022 6.10053 16.9999 6.26856C16.9977 6.4366 16.9278 6.59688 16.8057 6.71418L13.1185 10.2572L13.9896 15.2602C14.0101 15.3766 13.997 15.4963 13.9519 15.6057C13.9068 15.7151 13.8315 15.8099 13.7346 15.8793C13.6376 15.9488 13.5229 15.99 13.4033 15.9984C13.2838 16.0068 13.1643 15.982 13.0583 15.9269L8.49996 13.5648L3.94162 15.9269C3.81717 15.9922 3.67265 16.0139 3.53416 15.9902C3.1849 15.9308 2.95006 15.6044 3.01028 15.2602L3.8814 10.2572L0.194184 6.71418C0.0938245 6.61724 0.0275873 6.49064 0.00751532 6.35216C-0.046679 6.00597 0.198199 5.68549 0.549458 5.63406Z" fill="#FFC226"/>
</svg>
            <span class="rating">4.43</span>
            </span>
            
        <button class="keranjang mt-12" @click.prevent="checkout('HP Pavilion 15-DK1056WM', 1 , 1099 )">
          <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70534 0.823242H0.916672V3.65658H5.47551L9.39967 21.6171H9.41667V22.0732H27.8333V21.7219L30.9401 8.03549L31.4189 6.48991H8.92792L8.12042 2.79099L7.70534 0.823242ZM27.8149 9.32324H9.54701L11.7131 19.2399H25.5638L27.8149 9.32324Z" fill="white"/>
</svg>
        <span class="ok">Add To Card</span>
        </button>
          </label>
        </div>
    </div>
         <div class="card11"
    >
        <div class="group">
          <img class="foto" src="https://dummyjson.com/image/i/products/11/thumbnail.jpg" alt="foto">
        </div>
        <div class="rektangle ">
          <label class="smartphone ml-10 mt-1">fragrances</label>
        </div>
        <div class="text">
          <label class="jenis">perfume Oil</label>
          <label class="deskripsi">Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil</label>
          <label class="harga">$ 13
            <div class="flex items-center gap-2 mt-3">
            <div class="discountrektangel ">
            <p class="hargadiscount">8.4%</p>
            </div>
            <span class="potongan text-sm line-through opacity-50">$ 1.1</span>
            </div>
            <span class="flex items-center mt-6 gap-2">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.549458 5.63406L5.64573 4.90408L7.92389 0.352135C7.98612 0.227506 8.08848 0.126615 8.21494 0.0652895C8.53207 -0.0890138 8.91746 0.0395723 9.07603 0.352135L11.3542 4.90408L16.4505 5.63406C16.591 5.65384 16.7194 5.71912 16.8178 5.81803C16.9367 5.93848 17.0022 6.10053 16.9999 6.26856C16.9977 6.4366 16.9278 6.59688 16.8057 6.71418L13.1185 10.2572L13.9896 15.2602C14.0101 15.3766 13.997 15.4963 13.9519 15.6057C13.9068 15.7151 13.8315 15.8099 13.7346 15.8793C13.6376 15.9488 13.5229 15.99 13.4033 15.9984C13.2838 16.0068 13.1643 15.982 13.0583 15.9269L8.49996 13.5648L3.94162 15.9269C3.81717 15.9922 3.67265 16.0139 3.53416 15.9902C3.1849 15.9308 2.95006 15.6044 3.01028 15.2602L3.8814 10.2572L0.194184 6.71418C0.0938245 6.61724 0.0275873 6.49064 0.00751532 6.35216C-0.046679 6.00597 0.198199 5.68549 0.549458 5.63406Z" fill="#FFC226"/>
</svg>
            <span class="rating">4.26</span>
            </span>
            
        <button class="keranjang mt-12" @click.prevent="checkout('perfume Oil', 1 , 13 )">
          <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70534 0.823242H0.916672V3.65658H5.47551L9.39967 21.6171H9.41667V22.0732H27.8333V21.7219L30.9401 8.03549L31.4189 6.48991H8.92792L8.12042 2.79099L7.70534 0.823242ZM27.8149 9.32324H9.54701L11.7131 19.2399H25.5638L27.8149 9.32324Z" fill="white"/>
</svg>
        <span class="ok">Add To Card</span>
        </button>
          </label>
        </div>
    </div>
         <div class="card12"
    >
        <div class="group">
          <img class="foto" src="https://dummyjson.com/image/i/products/12/thumbnail.jpg" alt="foto">
        </div>
        <div class="rektangle ">
          <label class="smartphone ml-10 mt-1">fragrances</label>
        </div>
        <div class="text">
          <label class="jenis">Brown Perfume</label>
          <label class="deskripsi">"Royal_Mirage Sport Brown Perfume for Men & Women - 120ml</label>
          <label class="harga">$ 40
            <div class="flex items-center gap-2 mt-3">
            <div class="discountrektangel ">
            <p class="hargadiscount">15.66%</p>
            </div>
            <span class="potongan text-sm line-through opacity-50">$ 6.3</span>
            </div>
            <span class="flex items-center mt-6 gap-2">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.549458 5.63406L5.64573 4.90408L7.92389 0.352135C7.98612 0.227506 8.08848 0.126615 8.21494 0.0652895C8.53207 -0.0890138 8.91746 0.0395723 9.07603 0.352135L11.3542 4.90408L16.4505 5.63406C16.591 5.65384 16.7194 5.71912 16.8178 5.81803C16.9367 5.93848 17.0022 6.10053 16.9999 6.26856C16.9977 6.4366 16.9278 6.59688 16.8057 6.71418L13.1185 10.2572L13.9896 15.2602C14.0101 15.3766 13.997 15.4963 13.9519 15.6057C13.9068 15.7151 13.8315 15.8099 13.7346 15.8793C13.6376 15.9488 13.5229 15.99 13.4033 15.9984C13.2838 16.0068 13.1643 15.982 13.0583 15.9269L8.49996 13.5648L3.94162 15.9269C3.81717 15.9922 3.67265 16.0139 3.53416 15.9902C3.1849 15.9308 2.95006 15.6044 3.01028 15.2602L3.8814 10.2572L0.194184 6.71418C0.0938245 6.61724 0.0275873 6.49064 0.00751532 6.35216C-0.046679 6.00597 0.198199 5.68549 0.549458 5.63406Z" fill="#FFC226"/>
</svg>
            <span class="rating">4</span>
            </span>
            
        <button class="keranjang mt-12" @click.prevent="checkout('Brown Perfume', 1 , 40 )">
          <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70534 0.823242H0.916672V3.65658H5.47551L9.39967 21.6171H9.41667V22.0732H27.8333V21.7219L30.9401 8.03549L31.4189 6.48991H8.92792L8.12042 2.79099L7.70534 0.823242ZM27.8149 9.32324H9.54701L11.7131 19.2399H25.5638L27.8149 9.32324Z" fill="white"/>
</svg>
        <span class="ok">Add To Card</span>
        </button>
          </label>
        </div>
    </div>
         <div class="card13"
    >
        <div class="group">
          <img class="foto" src="https://dummyjson.com/image/i/products/13/thumbnail.webp" alt="foto">
        </div>
        <div class="rektangle ">
          <label class="smartphone ml-10 mt-1">fragrances</label>
        </div>
        <div class="text">
          <label class="jenis">Fog Scent Xpressio Perfume</label>
          <label class="deskripsi">Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men</label>
          <label class="harga">$ 13
            <div class="flex items-center gap-2 mt-3">
            <div class="discountrektangel ">
            <p class="hargadiscount">8.14%</p>
            </div>
            <span class="potongan text-sm line-through opacity-50">$ 0.41</span>
            </div>
            <span class="flex items-center mt-6 gap-2">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.549458 5.63406L5.64573 4.90408L7.92389 0.352135C7.98612 0.227506 8.08848 0.126615 8.21494 0.0652895C8.53207 -0.0890138 8.91746 0.0395723 9.07603 0.352135L11.3542 4.90408L16.4505 5.63406C16.591 5.65384 16.7194 5.71912 16.8178 5.81803C16.9367 5.93848 17.0022 6.10053 16.9999 6.26856C16.9977 6.4366 16.9278 6.59688 16.8057 6.71418L13.1185 10.2572L13.9896 15.2602C14.0101 15.3766 13.997 15.4963 13.9519 15.6057C13.9068 15.7151 13.8315 15.8099 13.7346 15.8793C13.6376 15.9488 13.5229 15.99 13.4033 15.9984C13.2838 16.0068 13.1643 15.982 13.0583 15.9269L8.49996 13.5648L3.94162 15.9269C3.81717 15.9922 3.67265 16.0139 3.53416 15.9902C3.1849 15.9308 2.95006 15.6044 3.01028 15.2602L3.8814 10.2572L0.194184 6.71418C0.0938245 6.61724 0.0275873 6.49064 0.00751532 6.35216C-0.046679 6.00597 0.198199 5.68549 0.549458 5.63406Z" fill="#FFC226"/>
</svg>
            <span class="rating">4.59</span>
            </span>
            
        <button class="keranjang mt-12"  @click.prevent="checkout('Fog Scent Xpressio Perfume', 1 , 13 )">
          <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70534 0.823242H0.916672V3.65658H5.47551L9.39967 21.6171H9.41667V22.0732H27.8333V21.7219L30.9401 8.03549L31.4189 6.48991H8.92792L8.12042 2.79099L7.70534 0.823242ZM27.8149 9.32324H9.54701L11.7131 19.2399H25.5638L27.8149 9.32324Z" fill="white"/>
</svg>
        <span class="ok">Add To Card</span>
        </button>
          </label>
        </div>
    </div>
         <div class="card14"
    >
        <div class="group">
          <img class="foto" src="https://dummyjson.com/image/i/products/14/thumbnail.jpg" alt="foto">
        </div>
        <div class="rektangle ">
          <label class="smartphone ml-10 mt-1">fragrances</label>
        </div>
        <div class="text">
          <label class="jenis">Non-Alcoholic Concentrated Perfume Oil</label>
          <label class="deskripsi">Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated ...</label>
          <label class="harga">$ 120
            <div class="flex items-center gap-2 mt-3">
            <div class="discountrektangel ">
            <p class="hargadiscount">15.6%</p>
            </div>
            <span class="potongan text-sm line-through opacity-50">$ 18.7</span>
            </div>
            <span class="flex items-center mt-6 gap-2">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.549458 5.63406L5.64573 4.90408L7.92389 0.352135C7.98612 0.227506 8.08848 0.126615 8.21494 0.0652895C8.53207 -0.0890138 8.91746 0.0395723 9.07603 0.352135L11.3542 4.90408L16.4505 5.63406C16.591 5.65384 16.7194 5.71912 16.8178 5.81803C16.9367 5.93848 17.0022 6.10053 16.9999 6.26856C16.9977 6.4366 16.9278 6.59688 16.8057 6.71418L13.1185 10.2572L13.9896 15.2602C14.0101 15.3766 13.997 15.4963 13.9519 15.6057C13.9068 15.7151 13.8315 15.8099 13.7346 15.8793C13.6376 15.9488 13.5229 15.99 13.4033 15.9984C13.2838 16.0068 13.1643 15.982 13.0583 15.9269L8.49996 13.5648L3.94162 15.9269C3.81717 15.9922 3.67265 16.0139 3.53416 15.9902C3.1849 15.9308 2.95006 15.6044 3.01028 15.2602L3.8814 10.2572L0.194184 6.71418C0.0938245 6.61724 0.0275873 6.49064 0.00751532 6.35216C-0.046679 6.00597 0.198199 5.68549 0.549458 5.63406Z" fill="#FFC226"/>
</svg>
            <span class="rating">4.21</span>
            </span>
            
        <button class="keranjang mt-12" @click.prevent="checkout('Non-Alcoholic Concentrated Perfume Oil', 1 , 120 )">
          <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70534 0.823242H0.916672V3.65658H5.47551L9.39967 21.6171H9.41667V22.0732H27.8333V21.7219L30.9401 8.03549L31.4189 6.48991H8.92792L8.12042 2.79099L7.70534 0.823242ZM27.8149 9.32324H9.54701L11.7131 19.2399H25.5638L27.8149 9.32324Z" fill="white"/>
</svg>
        <span class="ok">Add To Card</span>
        </button>
          </label>
        </div>
    </div>
         <div class="card15"
    >
        <div class="group">
          <img class="foto" src="https://dummyjson.com/image/i/products/15/thumbnail.jpg" alt="foto">
        </div>
        <div class="rektangle ">
          <label class="smartphone ml-10 mt-1">fragrances</label>
        </div>
        <div class="text">
          <label class="jenis">Eau De Perfume Spray</label>
          <label class="deskripsi">Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality</label>
          <label class="harga">$ 30
            <div class="flex items-center gap-2 mt-3">
            <div class="discountrektangel ">
            <p class="hargadiscount">10.99%</p>
            </div>
            <span class="potongan text-sm line-through opacity-50">$ 3.3</span>
            </div>
            <span class="flex items-center mt-6 gap-2">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.549458 5.63406L5.64573 4.90408L7.92389 0.352135C7.98612 0.227506 8.08848 0.126615 8.21494 0.0652895C8.53207 -0.0890138 8.91746 0.0395723 9.07603 0.352135L11.3542 4.90408L16.4505 5.63406C16.591 5.65384 16.7194 5.71912 16.8178 5.81803C16.9367 5.93848 17.0022 6.10053 16.9999 6.26856C16.9977 6.4366 16.9278 6.59688 16.8057 6.71418L13.1185 10.2572L13.9896 15.2602C14.0101 15.3766 13.997 15.4963 13.9519 15.6057C13.9068 15.7151 13.8315 15.8099 13.7346 15.8793C13.6376 15.9488 13.5229 15.99 13.4033 15.9984C13.2838 16.0068 13.1643 15.982 13.0583 15.9269L8.49996 13.5648L3.94162 15.9269C3.81717 15.9922 3.67265 16.0139 3.53416 15.9902C3.1849 15.9308 2.95006 15.6044 3.01028 15.2602L3.8814 10.2572L0.194184 6.71418C0.0938245 6.61724 0.0275873 6.49064 0.00751532 6.35216C-0.046679 6.00597 0.198199 5.68549 0.549458 5.63406Z" fill="#FFC226"/>
</svg>
            <span class="rating">4.7</span>
            </span>
            
        <button class="keranjang mt-12" @click.prevent="checkout('Eau De Perfume Spray', 1 , 30 )">
          <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70534 0.823242H0.916672V3.65658H5.47551L9.39967 21.6171H9.41667V22.0732H27.8333V21.7219L30.9401 8.03549L31.4189 6.48991H8.92792L8.12042 2.79099L7.70534 0.823242ZM27.8149 9.32324H9.54701L11.7131 19.2399H25.5638L27.8149 9.32324Z" fill="white"/>
</svg>
        <span class="ok">Add To Card</span>
        </button>
          </label>
        </div>
    </div>
         <div class="card16"
    >
        <div class="group">
          <img class="foto" src="https://dummyjson.com/image/i/products/16/thumbnail.jpg" alt="foto">
        </div>
        <div class="rektangle ">
          <label class="smartphone ml-10 mt-1">skincare</label>
        </div>
        <div class="text">
          <label class="jenis">Hyaluronic Acid Serum</label>
          <label class="deskripsi">L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic..</label>
          <label class="harga">$ 19
            <div class="flex items-center gap-2 mt-3">
            <div class="discountrektangel ">
            <p class="hargadiscount">13.31%</p>
            </div>
            <span class="potongan text-sm line-through opacity-50">$ 2.5</span>
            </div>
            <span class="flex items-center mt-6 gap-2">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.549458 5.63406L5.64573 4.90408L7.92389 0.352135C7.98612 0.227506 8.08848 0.126615 8.21494 0.0652895C8.53207 -0.0890138 8.91746 0.0395723 9.07603 0.352135L11.3542 4.90408L16.4505 5.63406C16.591 5.65384 16.7194 5.71912 16.8178 5.81803C16.9367 5.93848 17.0022 6.10053 16.9999 6.26856C16.9977 6.4366 16.9278 6.59688 16.8057 6.71418L13.1185 10.2572L13.9896 15.2602C14.0101 15.3766 13.997 15.4963 13.9519 15.6057C13.9068 15.7151 13.8315 15.8099 13.7346 15.8793C13.6376 15.9488 13.5229 15.99 13.4033 15.9984C13.2838 16.0068 13.1643 15.982 13.0583 15.9269L8.49996 13.5648L3.94162 15.9269C3.81717 15.9922 3.67265 16.0139 3.53416 15.9902C3.1849 15.9308 2.95006 15.6044 3.01028 15.2602L3.8814 10.2572L0.194184 6.71418C0.0938245 6.61724 0.0275873 6.49064 0.00751532 6.35216C-0.046679 6.00597 0.198199 5.68549 0.549458 5.63406Z" fill="#FFC226"/>
</svg>
            <span class="rating">4.83</span>
            </span>
            
        <button class="keranjang mt-12" @click.prevent="checkout('Hyaluronic Acid Serum', 1 , 19 )">
          <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70534 0.823242H0.916672V3.65658H5.47551L9.39967 21.6171H9.41667V22.0732H27.8333V21.7219L30.9401 8.03549L31.4189 6.48991H8.92792L8.12042 2.79099L7.70534 0.823242ZM27.8149 9.32324H9.54701L11.7131 19.2399H25.5638L27.8149 9.32324Z" fill="white"/>
</svg>
        <span class="ok">Add To Card</span>
        </button>
          </label>
        </div>
    </div>
         <div class="card17"
    >
        <div class="group">
          <img class="foto" src="https://dummyjson.com/image/i/products/17/thumbnail.jpg" alt="foto">
        </div>
        <div class="rektangle ">
          <label class="smartphone ml-10 mt-1">skincare</label>
        </div>
        <div class="text">
          <label class="jenis">Tree Oil 30ml</label>
          <label class="deskripsi">Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill ...</label>
          <label class="harga">$ 12
            <div class="flex items-center gap-2 mt-3">
            <div class="discountrektangel ">
            <p class="hargadiscount">4.09%</p>
            </div>
            <span class="potongan text-sm line-through opacity-50">$ 0.5</span>
            </div>
            <span class="flex items-center mt-6 gap-2">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.549458 5.63406L5.64573 4.90408L7.92389 0.352135C7.98612 0.227506 8.08848 0.126615 8.21494 0.0652895C8.53207 -0.0890138 8.91746 0.0395723 9.07603 0.352135L11.3542 4.90408L16.4505 5.63406C16.591 5.65384 16.7194 5.71912 16.8178 5.81803C16.9367 5.93848 17.0022 6.10053 16.9999 6.26856C16.9977 6.4366 16.9278 6.59688 16.8057 6.71418L13.1185 10.2572L13.9896 15.2602C14.0101 15.3766 13.997 15.4963 13.9519 15.6057C13.9068 15.7151 13.8315 15.8099 13.7346 15.8793C13.6376 15.9488 13.5229 15.99 13.4033 15.9984C13.2838 16.0068 13.1643 15.982 13.0583 15.9269L8.49996 13.5648L3.94162 15.9269C3.81717 15.9922 3.67265 16.0139 3.53416 15.9902C3.1849 15.9308 2.95006 15.6044 3.01028 15.2602L3.8814 10.2572L0.194184 6.71418C0.0938245 6.61724 0.0275873 6.49064 0.00751532 6.35216C-0.046679 6.00597 0.198199 5.68549 0.549458 5.63406Z" fill="#FFC226"/>
</svg>
            <span class="rating">4.52</span>
            </span>
            
        <button class="keranjang mt-12" @click.prevent="checkout('Tree Oil 30ml', 1 , 12 )">
          <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70534 0.823242H0.916672V3.65658H5.47551L9.39967 21.6171H9.41667V22.0732H27.8333V21.7219L30.9401 8.03549L31.4189 6.48991H8.92792L8.12042 2.79099L7.70534 0.823242ZM27.8149 9.32324H9.54701L11.7131 19.2399H25.5638L27.8149 9.32324Z" fill="white"/>
</svg>
        <span class="ok">Add To Card</span>
        </button>
          </label>
        </div>
    </div>
         <div class="card18"
    >
        <div class="group">
          <img class="foto" src="https://dummyjson.com/image/i/products/18/thumbnail.jpg" alt="foto">
        </div>
        <div class="rektangle ">
          <label class="smartphone ml-10 mt-1">skincare</label>
        </div>
        <div class="text">
          <label class="jenis">Oil Free Moisturizer 100ml</label>
          <label class="deskripsi">Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic ...</label>
          <label class="harga">$ 40
            <div class="flex items-center gap-2 mt-3">
            <div class="discountrektangel ">
            <p class="hargadiscount">13.1%</p>
            </div>
            <span class="potongan text-sm line-through opacity-50">$ 5,2</span>
            </div>
            <span class="flex items-center mt-6 gap-2">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.549458 5.63406L5.64573 4.90408L7.92389 0.352135C7.98612 0.227506 8.08848 0.126615 8.21494 0.0652895C8.53207 -0.0890138 8.91746 0.0395723 9.07603 0.352135L11.3542 4.90408L16.4505 5.63406C16.591 5.65384 16.7194 5.71912 16.8178 5.81803C16.9367 5.93848 17.0022 6.10053 16.9999 6.26856C16.9977 6.4366 16.9278 6.59688 16.8057 6.71418L13.1185 10.2572L13.9896 15.2602C14.0101 15.3766 13.997 15.4963 13.9519 15.6057C13.9068 15.7151 13.8315 15.8099 13.7346 15.8793C13.6376 15.9488 13.5229 15.99 13.4033 15.9984C13.2838 16.0068 13.1643 15.982 13.0583 15.9269L8.49996 13.5648L3.94162 15.9269C3.81717 15.9922 3.67265 16.0139 3.53416 15.9902C3.1849 15.9308 2.95006 15.6044 3.01028 15.2602L3.8814 10.2572L0.194184 6.71418C0.0938245 6.61724 0.0275873 6.49064 0.00751532 6.35216C-0.046679 6.00597 0.198199 5.68549 0.549458 5.63406Z" fill="#FFC226"/>
</svg>
            <span class="rating">4.56</span>
            </span>
            
        <button class="keranjang mt-12" @click.prevent="checkout('Oil Free Moisturizer 100ml', 1 , 40 )">
          <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70534 0.823242H0.916672V3.65658H5.47551L9.39967 21.6171H9.41667V22.0732H27.8333V21.7219L30.9401 8.03549L31.4189 6.48991H8.92792L8.12042 2.79099L7.70534 0.823242ZM27.8149 9.32324H9.54701L11.7131 19.2399H25.5638L27.8149 9.32324Z" fill="white"/>
</svg>
        <span class="ok">Add To Card</span>
        </button>
          </label>
        </div>
    </div>
         <div class="card19"
    >
        <div class="group">
          <img class="foto" src="https://dummyjson.com/image/i/products/19/thumbnail.jpg" alt="foto">
        </div>
        <div class="rektangle ">
          <label class="smartphone ml-10 mt-1">skincare</label>
        </div>
        <div class="text">
          <label class="jenis">Skin Beauty Serum.</label>
          <label class="deskripsi">Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m</label>
          <label class="harga">$ 46
            <div class="flex items-center gap-2 mt-3">
            <div class="discountrektangel ">
            <p class="hargadiscount">10.68%</p>
            </div>
            <span class="potongan text-sm line-through opacity-50">$ </span>
            </div>
            <span class="flex items-center mt-6 gap-2">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.549458 5.63406L5.64573 4.90408L7.92389 0.352135C7.98612 0.227506 8.08848 0.126615 8.21494 0.0652895C8.53207 -0.0890138 8.91746 0.0395723 9.07603 0.352135L11.3542 4.90408L16.4505 5.63406C16.591 5.65384 16.7194 5.71912 16.8178 5.81803C16.9367 5.93848 17.0022 6.10053 16.9999 6.26856C16.9977 6.4366 16.9278 6.59688 16.8057 6.71418L13.1185 10.2572L13.9896 15.2602C14.0101 15.3766 13.997 15.4963 13.9519 15.6057C13.9068 15.7151 13.8315 15.8099 13.7346 15.8793C13.6376 15.9488 13.5229 15.99 13.4033 15.9984C13.2838 16.0068 13.1643 15.982 13.0583 15.9269L8.49996 13.5648L3.94162 15.9269C3.81717 15.9922 3.67265 16.0139 3.53416 15.9902C3.1849 15.9308 2.95006 15.6044 3.01028 15.2602L3.8814 10.2572L0.194184 6.71418C0.0938245 6.61724 0.0275873 6.49064 0.00751532 6.35216C-0.046679 6.00597 0.198199 5.68549 0.549458 5.63406Z" fill="#FFC226"/>
</svg>
            <span class="rating">4.42</span>
            </span>
            
        <button class="keranjang mt-12" @click.prevent="checkout('Skin Beauty Serum.', 1 , 46 )">
          <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70534 0.823242H0.916672V3.65658H5.47551L9.39967 21.6171H9.41667V22.0732H27.8333V21.7219L30.9401 8.03549L31.4189 6.48991H8.92792L8.12042 2.79099L7.70534 0.823242ZM27.8149 9.32324H9.54701L11.7131 19.2399H25.5638L27.8149 9.32324Z" fill="white"/>
</svg>
        <span class="ok">Add To Card</span>
        </button>
          </label>
        </div>
    </div>
         <div class="card20"
    >
        <div class="group">
          <img class="foto" src="https://dummyjson.com/image/i/products/20/thumbnail.jpg" alt="foto">
        </div>
        <div class="rektangle ">
          <label class="smartphone ml-10 mt-1">skincare</label>
        </div>
        <div class="text">
          <label class="jenis">Freckle Treatment Cream- 15gm</label>
          <label class="deskripsi">Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments...</label>
          <label class="harga">$ 70
            <div class="flex items-center gap-2 mt-3">
            <div class="discountrektangel ">
            <p class="hargadiscount">16.99%</p>
            </div>
            <span class="potongan text-sm line-through opacity-50">$ 12</span>
            </div>
            <span class="flex items-center mt-6 gap-2">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.549458 5.63406L5.64573 4.90408L7.92389 0.352135C7.98612 0.227506 8.08848 0.126615 8.21494 0.0652895C8.53207 -0.0890138 8.91746 0.0395723 9.07603 0.352135L11.3542 4.90408L16.4505 5.63406C16.591 5.65384 16.7194 5.71912 16.8178 5.81803C16.9367 5.93848 17.0022 6.10053 16.9999 6.26856C16.9977 6.4366 16.9278 6.59688 16.8057 6.71418L13.1185 10.2572L13.9896 15.2602C14.0101 15.3766 13.997 15.4963 13.9519 15.6057C13.9068 15.7151 13.8315 15.8099 13.7346 15.8793C13.6376 15.9488 13.5229 15.99 13.4033 15.9984C13.2838 16.0068 13.1643 15.982 13.0583 15.9269L8.49996 13.5648L3.94162 15.9269C3.81717 15.9922 3.67265 16.0139 3.53416 15.9902C3.1849 15.9308 2.95006 15.6044 3.01028 15.2602L3.8814 10.2572L0.194184 6.71418C0.0938245 6.61724 0.0275873 6.49064 0.00751532 6.35216C-0.046679 6.00597 0.198199 5.68549 0.549458 5.63406Z" fill="#FFC226"/>
</svg>
            <span class="rating">4.06</span>
            </span>
            
        <button class="keranjang mt-12" @click.prevent="checkout('Freckle Treatment Cream- 15gm', 1 , 70 )">
          <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70534 0.823242H0.916672V3.65658H5.47551L9.39967 21.6171H9.41667V22.0732H27.8333V21.7219L30.9401 8.03549L31.4189 6.48991H8.92792L8.12042 2.79099L7.70534 0.823242ZM27.8149 9.32324H9.54701L11.7131 19.2399H25.5638L27.8149 9.32324Z" fill="white"/>
</svg>
        <span class="ok">Add To Card</span>
        </button>
          </label>
        </div>
    </div>
         <div class="card21"
    >
        <div class="group">
          <img class="foto" src="https://dummyjson.com/image/i/products/21/thumbnail.png" alt="foto">
        </div>
        <div class="rektangle ">
          <label class="smartphone ml-10 mt-1">groceries</label>
        </div>
        <div class="text">
          <label class="jenis">Daal Masoor 500 grams</label>
          <label class="deskripsi">Fine quality Branded Product Keep in a cool and dry place</label>
          <label class="harga">$ 20
            <div class="flex items-center gap-2 mt-3">
            <div class="discountrektangel ">
            <p class="hargadiscount">4.81%</p>
            </div>
            <span class="potongan text-sm line-through opacity-50">$ 1</span>
            </div>
            <span class="flex items-center mt-6 gap-2">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.549458 5.63406L5.64573 4.90408L7.92389 0.352135C7.98612 0.227506 8.08848 0.126615 8.21494 0.0652895C8.53207 -0.0890138 8.91746 0.0395723 9.07603 0.352135L11.3542 4.90408L16.4505 5.63406C16.591 5.65384 16.7194 5.71912 16.8178 5.81803C16.9367 5.93848 17.0022 6.10053 16.9999 6.26856C16.9977 6.4366 16.9278 6.59688 16.8057 6.71418L13.1185 10.2572L13.9896 15.2602C14.0101 15.3766 13.997 15.4963 13.9519 15.6057C13.9068 15.7151 13.8315 15.8099 13.7346 15.8793C13.6376 15.9488 13.5229 15.99 13.4033 15.9984C13.2838 16.0068 13.1643 15.982 13.0583 15.9269L8.49996 13.5648L3.94162 15.9269C3.81717 15.9922 3.67265 16.0139 3.53416 15.9902C3.1849 15.9308 2.95006 15.6044 3.01028 15.2602L3.8814 10.2572L0.194184 6.71418C0.0938245 6.61724 0.0275873 6.49064 0.00751532 6.35216C-0.046679 6.00597 0.198199 5.68549 0.549458 5.63406Z" fill="#FFC226"/>
</svg>
            <span class="rating">4.44</span>
            </span>
            
        <button class="keranjang mt-12" @click.prevent="checkout('Daal Masoor 500 grams', 1 , 20 )">
          <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70534 0.823242H0.916672V3.65658H5.47551L9.39967 21.6171H9.41667V22.0732H27.8333V21.7219L30.9401 8.03549L31.4189 6.48991H8.92792L8.12042 2.79099L7.70534 0.823242ZM27.8149 9.32324H9.54701L11.7131 19.2399H25.5638L27.8149 9.32324Z" fill="white"/>
</svg>
        <span class="ok">Add To Card</span>
        </button>
          </label>
        </div>
    </div>
         <div class="card22"
    >
        <div class="group">
          <img class="foto" src="https://dummyjson.com/image/i/products/22/thumbnail.jpg" alt="foto">
        </div>
        <div class="rektangle ">
          <label class="smartphone ml-10 mt-1">groceries</label>
        </div>
        <div class="text">
          <label class="jenis">Elbow Macaroni - 400 gm</label>
          <label class="deskripsi">Product details of Bake Parlor Big Elbow Macaroni - 400 gm</label>
          <label class="harga">$14
            <div class="flex items-center gap-2 mt-3">
            <div class="discountrektangel ">
            <p class="hargadiscount">15.58%</p>
            </div>
            <span class="potongan text-sm line-through opacity-50">$ 2.2</span>
            </div>
            <span class="flex items-center mt-6 gap-2">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.549458 5.63406L5.64573 4.90408L7.92389 0.352135C7.98612 0.227506 8.08848 0.126615 8.21494 0.0652895C8.53207 -0.0890138 8.91746 0.0395723 9.07603 0.352135L11.3542 4.90408L16.4505 5.63406C16.591 5.65384 16.7194 5.71912 16.8178 5.81803C16.9367 5.93848 17.0022 6.10053 16.9999 6.26856C16.9977 6.4366 16.9278 6.59688 16.8057 6.71418L13.1185 10.2572L13.9896 15.2602C14.0101 15.3766 13.997 15.4963 13.9519 15.6057C13.9068 15.7151 13.8315 15.8099 13.7346 15.8793C13.6376 15.9488 13.5229 15.99 13.4033 15.9984C13.2838 16.0068 13.1643 15.982 13.0583 15.9269L8.49996 13.5648L3.94162 15.9269C3.81717 15.9922 3.67265 16.0139 3.53416 15.9902C3.1849 15.9308 2.95006 15.6044 3.01028 15.2602L3.8814 10.2572L0.194184 6.71418C0.0938245 6.61724 0.0275873 6.49064 0.00751532 6.35216C-0.046679 6.00597 0.198199 5.68549 0.549458 5.63406Z" fill="#FFC226"/>
</svg>
            <span class="rating">4.57</span>
            </span>
            
        <button class="keranjang mt-12"  @click.prevent="checkout('Elbow Macaroni - 400 gm', 1 , 14 )">
          <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70534 0.823242H0.916672V3.65658H5.47551L9.39967 21.6171H9.41667V22.0732H27.8333V21.7219L30.9401 8.03549L31.4189 6.48991H8.92792L8.12042 2.79099L7.70534 0.823242ZM27.8149 9.32324H9.54701L11.7131 19.2399H25.5638L27.8149 9.32324Z" fill="white"/>
</svg>
        <span class="ok">Add To Card</span>
        </button>
          </label>
        </div>
    </div>
         <div class="card23"
    >
        <div class="group">
          <img class="foto" src="https://dummyjson.com/image/i/products/23/thumbnail.jpg" alt="foto">
        </div>
        <div class="rektangle ">
          <label class="smartphone ml-10 mt-1">groceries</label>
        </div>
        <div class="text">
          <label class="jenis">Orange Essence Food Flavou</label>
          <label class="deskripsi">Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item</label>
          <label class="harga">$ 14
            <div class="flex items-center gap-2 mt-3">
            <div class="discountrektangel ">
            <p class="hargadiscount">8.04%</p>
            </div>
            <span class="potongan text-sm line-through opacity-50">$ 1.13</span>
            </div>
            <span class="flex items-center mt-6 gap-2">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.549458 5.63406L5.64573 4.90408L7.92389 0.352135C7.98612 0.227506 8.08848 0.126615 8.21494 0.0652895C8.53207 -0.0890138 8.91746 0.0395723 9.07603 0.352135L11.3542 4.90408L16.4505 5.63406C16.591 5.65384 16.7194 5.71912 16.8178 5.81803C16.9367 5.93848 17.0022 6.10053 16.9999 6.26856C16.9977 6.4366 16.9278 6.59688 16.8057 6.71418L13.1185 10.2572L13.9896 15.2602C14.0101 15.3766 13.997 15.4963 13.9519 15.6057C13.9068 15.7151 13.8315 15.8099 13.7346 15.8793C13.6376 15.9488 13.5229 15.99 13.4033 15.9984C13.2838 16.0068 13.1643 15.982 13.0583 15.9269L8.49996 13.5648L3.94162 15.9269C3.81717 15.9922 3.67265 16.0139 3.53416 15.9902C3.1849 15.9308 2.95006 15.6044 3.01028 15.2602L3.8814 10.2572L0.194184 6.71418C0.0938245 6.61724 0.0275873 6.49064 0.00751532 6.35216C-0.046679 6.00597 0.198199 5.68549 0.549458 5.63406Z" fill="#FFC226"/>
</svg>
            <span class="rating">4.85</span>
            </span>
            
        <button class="keranjang mt-12" @click.prevent="checkout('Orange Essence Food Flavou', 1 , 14 )">
          <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70534 0.823242H0.916672V3.65658H5.47551L9.39967 21.6171H9.41667V22.0732H27.8333V21.7219L30.9401 8.03549L31.4189 6.48991H8.92792L8.12042 2.79099L7.70534 0.823242ZM27.8149 9.32324H9.54701L11.7131 19.2399H25.5638L27.8149 9.32324Z" fill="white"/>
</svg>
        <span class="ok">Add To Card</span>
        </button>
          </label>
        </div>
    </div>
         <div class="card24"
    >
        <div class="group">
          <img class="foto" src="https://dummyjson.com/image/i/products/24/thumbnail.jpg" alt="foto">
        </div>
        <div class="rektangle ">
          <label class="smartphone ml-10 mt-1">groceries</label>
        </div>
        <div class="text">
          <label class="jenis">cereals muesli fruit nuts</label>
          <label class="deskripsi">original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts...</label>
          <label class="harga">$ 46
            <div class="flex items-center gap-2 mt-3">
            <div class="discountrektangel ">
            <p class="hargadiscount">16.8%</p>
            </div>
            <span class="potongan text-sm line-through opacity-50">$ 7.73</span>
            </div>
            <span class="flex items-center mt-6 gap-2">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.549458 5.63406L5.64573 4.90408L7.92389 0.352135C7.98612 0.227506 8.08848 0.126615 8.21494 0.0652895C8.53207 -0.0890138 8.91746 0.0395723 9.07603 0.352135L11.3542 4.90408L16.4505 5.63406C16.591 5.65384 16.7194 5.71912 16.8178 5.81803C16.9367 5.93848 17.0022 6.10053 16.9999 6.26856C16.9977 6.4366 16.9278 6.59688 16.8057 6.71418L13.1185 10.2572L13.9896 15.2602C14.0101 15.3766 13.997 15.4963 13.9519 15.6057C13.9068 15.7151 13.8315 15.8099 13.7346 15.8793C13.6376 15.9488 13.5229 15.99 13.4033 15.9984C13.2838 16.0068 13.1643 15.982 13.0583 15.9269L8.49996 13.5648L3.94162 15.9269C3.81717 15.9922 3.67265 16.0139 3.53416 15.9902C3.1849 15.9308 2.95006 15.6044 3.01028 15.2602L3.8814 10.2572L0.194184 6.71418C0.0938245 6.61724 0.0275873 6.49064 0.00751532 6.35216C-0.046679 6.00597 0.198199 5.68549 0.549458 5.63406Z" fill="#FFC226"/>
</svg>
            <span class="rating">4.94</span>
            </span>
            
        <button class="keranjang mt-12" @click.prevent="checkout('cereals muesli fruit nuts', 1 , 46 )">
          <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70534 0.823242H0.916672V3.65658H5.47551L9.39967 21.6171H9.41667V22.0732H27.8333V21.7219L30.9401 8.03549L31.4189 6.48991H8.92792L8.12042 2.79099L7.70534 0.823242ZM27.8149 9.32324H9.54701L11.7131 19.2399H25.5638L27.8149 9.32324Z" fill="white"/>
</svg>
        <span class="ok">Add To Card</span>
        </button>
          </label>
        </div>
    </div>
         <div class="card25"
    >
        <div class="group">
          <img class="foto" src="https://dummyjson.com/image/i/products/25/thumbnail.jpg" alt="foto">
        </div>
        <div class="rektangle ">
          <label class="smartphone ml-10 mt-1">groceries</label>
        </div>
        <div class="text">
          <label class="jenis">Gulab Powder 50 Gram</label>
          <label class="deskripsi">Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds</label>
          <label class="harga">$ 70
            <div class="flex items-center gap-2 mt-3">
            <div class="discountrektangel ">
            <p class="hargadiscount">13.58%</p>
            </div>
            <span class="potongan text-sm line-through opacity-50">$ 9.5</span>
            </div>
            <span class="flex items-center mt-6 gap-2">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.549458 5.63406L5.64573 4.90408L7.92389 0.352135C7.98612 0.227506 8.08848 0.126615 8.21494 0.0652895C8.53207 -0.0890138 8.91746 0.0395723 9.07603 0.352135L11.3542 4.90408L16.4505 5.63406C16.591 5.65384 16.7194 5.71912 16.8178 5.81803C16.9367 5.93848 17.0022 6.10053 16.9999 6.26856C16.9977 6.4366 16.9278 6.59688 16.8057 6.71418L13.1185 10.2572L13.9896 15.2602C14.0101 15.3766 13.997 15.4963 13.9519 15.6057C13.9068 15.7151 13.8315 15.8099 13.7346 15.8793C13.6376 15.9488 13.5229 15.99 13.4033 15.9984C13.2838 16.0068 13.1643 15.982 13.0583 15.9269L8.49996 13.5648L3.94162 15.9269C3.81717 15.9922 3.67265 16.0139 3.53416 15.9902C3.1849 15.9308 2.95006 15.6044 3.01028 15.2602L3.8814 10.2572L0.194184 6.71418C0.0938245 6.61724 0.0275873 6.49064 0.00751532 6.35216C-0.046679 6.00597 0.198199 5.68549 0.549458 5.63406Z" fill="#FFC226"/>
</svg>
            <span class="rating">4.87</span>
            </span>
            
        <button class="keranjang mt-12" @click.prevent="checkout('Gulab Powder 50 Gram', 1 , 70 )">
          <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70534 0.823242H0.916672V3.65658H5.47551L9.39967 21.6171H9.41667V22.0732H27.8333V21.7219L30.9401 8.03549L31.4189 6.48991H8.92792L8.12042 2.79099L7.70534 0.823242ZM27.8149 9.32324H9.54701L11.7131 19.2399H25.5638L27.8149 9.32324Z" fill="white"/>
</svg>
        <span class="ok">Add To Card</span>
        </button>
          </label>
        </div>
    </div>
         <div class="card26"
    >
        <div class="group">
          <img class="foto" src="https://dummyjson.com/image/i/products/26/thumbnail.jpg" alt="foto">
        </div>
        <div class="rektangle ">
          <label class="smartphone ml-10 mt-1">home-decoration</label>
        </div>
        <div class="text">
          <label class="jenis">Plant Hanger For Home</label>
          <label class="deskripsi">Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf</label>
          <label class="harga">$ 41
            <div class="flex items-center gap-2 mt-3">
            <div class="discountrektangel ">
            <p class="hargadiscount">17.86%</p>
            </div>
            <span class="potongan text-sm line-through opacity-50">$ 7.3</span>
            </div>
            <span class="flex items-center mt-6 gap-2">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.549458 5.63406L5.64573 4.90408L7.92389 0.352135C7.98612 0.227506 8.08848 0.126615 8.21494 0.0652895C8.53207 -0.0890138 8.91746 0.0395723 9.07603 0.352135L11.3542 4.90408L16.4505 5.63406C16.591 5.65384 16.7194 5.71912 16.8178 5.81803C16.9367 5.93848 17.0022 6.10053 16.9999 6.26856C16.9977 6.4366 16.9278 6.59688 16.8057 6.71418L13.1185 10.2572L13.9896 15.2602C14.0101 15.3766 13.997 15.4963 13.9519 15.6057C13.9068 15.7151 13.8315 15.8099 13.7346 15.8793C13.6376 15.9488 13.5229 15.99 13.4033 15.9984C13.2838 16.0068 13.1643 15.982 13.0583 15.9269L8.49996 13.5648L3.94162 15.9269C3.81717 15.9922 3.67265 16.0139 3.53416 15.9902C3.1849 15.9308 2.95006 15.6044 3.01028 15.2602L3.8814 10.2572L0.194184 6.71418C0.0938245 6.61724 0.0275873 6.49064 0.00751532 6.35216C-0.046679 6.00597 0.198199 5.68549 0.549458 5.63406Z" fill="#FFC226"/>
</svg>
            <span class="rating">4.08</span>
            </span>
            
        <button class="keranjang mt-12" @click.prevent="checkout('Plant Hanger For Home', 1 , 41 )">
          <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70534 0.823242H0.916672V3.65658H5.47551L9.39967 21.6171H9.41667V22.0732H27.8333V21.7219L30.9401 8.03549L31.4189 6.48991H8.92792L8.12042 2.79099L7.70534 0.823242ZM27.8149 9.32324H9.54701L11.7131 19.2399H25.5638L27.8149 9.32324Z" fill="white"/>
</svg>
        <span class="ok">Add To Card</span>
        </button>
          </label>
        </div>
    </div>
         <div class="card27"
    >
        <div class="group">
          <img class="foto" src="https://dummyjson.com/image/i/products/27/thumbnail.webp" alt="foto">
        </div>
        <div class="rektangle ">
          <label class="smartphone ml-10 mt-1">home-decoration</label>
        </div>
        <div class="text">
          <label class="jenis">Flying Wooden Bird</label>
          <label class="deskripsi">Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds ...</label>
          <label class="harga">$ 51
            <div class="flex items-center gap-2 mt-3">
            <div class="discountrektangel ">
            <p class="hargadiscount">15.58%</p>
            </div>
            <span class="potongan text-sm line-through opacity-50">$ 7.9</span>
            </div>
            <span class="flex items-center mt-6 gap-2">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.549458 5.63406L5.64573 4.90408L7.92389 0.352135C7.98612 0.227506 8.08848 0.126615 8.21494 0.0652895C8.53207 -0.0890138 8.91746 0.0395723 9.07603 0.352135L11.3542 4.90408L16.4505 5.63406C16.591 5.65384 16.7194 5.71912 16.8178 5.81803C16.9367 5.93848 17.0022 6.10053 16.9999 6.26856C16.9977 6.4366 16.9278 6.59688 16.8057 6.71418L13.1185 10.2572L13.9896 15.2602C14.0101 15.3766 13.997 15.4963 13.9519 15.6057C13.9068 15.7151 13.8315 15.8099 13.7346 15.8793C13.6376 15.9488 13.5229 15.99 13.4033 15.9984C13.2838 16.0068 13.1643 15.982 13.0583 15.9269L8.49996 13.5648L3.94162 15.9269C3.81717 15.9922 3.67265 16.0139 3.53416 15.9902C3.1849 15.9308 2.95006 15.6044 3.01028 15.2602L3.8814 10.2572L0.194184 6.71418C0.0938245 6.61724 0.0275873 6.49064 0.00751532 6.35216C-0.046679 6.00597 0.198199 5.68549 0.549458 5.63406Z" fill="#FFC226"/>
</svg>
            <span class="rating">4.41</span>
            </span>
            
        <button class="keranjang mt-12" @click.prevent="checkout('Flying Wooden Bird', 1 , 51 )">
          <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70534 0.823242H0.916672V3.65658H5.47551L9.39967 21.6171H9.41667V22.0732H27.8333V21.7219L30.9401 8.03549L31.4189 6.48991H8.92792L8.12042 2.79099L7.70534 0.823242ZM27.8149 9.32324H9.54701L11.7131 19.2399H25.5638L27.8149 9.32324Z" fill="white"/>
</svg>
        <span class="ok">Add To Card</span>
        </button>
          </label>
        </div>
    </div>
         <div class="card28"
    >
        <div class="group">
          <img class="foto" src="https://dummyjson.com/image/i/products/28/thumbnail.jpg" alt="foto">
        </div>
        <div class="rektangle ">
          <label class="smartphone ml-10 mt-1">home-decoration</label>
        </div>
        <div class="text">
          <label class="jenis">3D Embellishment Art Lamp</label>
          <label class="deskripsi">D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)</label>
          <label class="harga">$ 20
            <div class="flex items-center gap-2 mt-3">
            <div class="discountrektangel ">
            <p class="hargadiscount">16.49%</p>
            </div>
            <span class="potongan text-sm line-through opacity-50">$ 3.3</span>
            </div>
            <span class="flex items-center mt-6 gap-2">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.549458 5.63406L5.64573 4.90408L7.92389 0.352135C7.98612 0.227506 8.08848 0.126615 8.21494 0.0652895C8.53207 -0.0890138 8.91746 0.0395723 9.07603 0.352135L11.3542 4.90408L16.4505 5.63406C16.591 5.65384 16.7194 5.71912 16.8178 5.81803C16.9367 5.93848 17.0022 6.10053 16.9999 6.26856C16.9977 6.4366 16.9278 6.59688 16.8057 6.71418L13.1185 10.2572L13.9896 15.2602C14.0101 15.3766 13.997 15.4963 13.9519 15.6057C13.9068 15.7151 13.8315 15.8099 13.7346 15.8793C13.6376 15.9488 13.5229 15.99 13.4033 15.9984C13.2838 16.0068 13.1643 15.982 13.0583 15.9269L8.49996 13.5648L3.94162 15.9269C3.81717 15.9922 3.67265 16.0139 3.53416 15.9902C3.1849 15.9308 2.95006 15.6044 3.01028 15.2602L3.8814 10.2572L0.194184 6.71418C0.0938245 6.61724 0.0275873 6.49064 0.00751532 6.35216C-0.046679 6.00597 0.198199 5.68549 0.549458 5.63406Z" fill="#FFC226"/>
</svg>
            <span class="rating">4.82</span>
            </span>
            
        <button class="keranjang mt-12" @click.prevent="checkout('3D Embellishment Art Lamp', 1 , 20 )">
          <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70534 0.823242H0.916672V3.65658H5.47551L9.39967 21.6171H9.41667V22.0732H27.8333V21.7219L30.9401 8.03549L31.4189 6.48991H8.92792L8.12042 2.79099L7.70534 0.823242ZM27.8149 9.32324H9.54701L11.7131 19.2399H25.5638L27.8149 9.32324Z" fill="white"/>
</svg>
        <span class="ok">Add To Card</span>
        </button>
          </label>
        </div>
    </div>
            <div class="card29"
    >
        <div class="group">
          <img class="foto" src="https://dummyjson.com/image/i/products/29/thumbnail.webp" alt="foto">
        </div>
        <div class="rektangle ">
          <label class="smartphone ml-10 mt-1">home-decoration</label>
        </div>
        <div class="text">
          <label class="jenis">Handcraft Chinese style</label>
          <label class="deskripsi">Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit..</label>
          <label class="harga">$ 60
            <div class="flex items-center gap-2 mt-3">
            <div class="discountrektangel ">
            <p class="hargadiscount">15.34%</p>
            </div>
            <span class="potongan text-sm line-through opacity-50">$ 9.2</span>
            </div>
            <span class="flex items-center mt-6 gap-2">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.549458 5.63406L5.64573 4.90408L7.92389 0.352135C7.98612 0.227506 8.08848 0.126615 8.21494 0.0652895C8.53207 -0.0890138 8.91746 0.0395723 9.07603 0.352135L11.3542 4.90408L16.4505 5.63406C16.591 5.65384 16.7194 5.71912 16.8178 5.81803C16.9367 5.93848 17.0022 6.10053 16.9999 6.26856C16.9977 6.4366 16.9278 6.59688 16.8057 6.71418L13.1185 10.2572L13.9896 15.2602C14.0101 15.3766 13.997 15.4963 13.9519 15.6057C13.9068 15.7151 13.8315 15.8099 13.7346 15.8793C13.6376 15.9488 13.5229 15.99 13.4033 15.9984C13.2838 16.0068 13.1643 15.982 13.0583 15.9269L8.49996 13.5648L3.94162 15.9269C3.81717 15.9922 3.67265 16.0139 3.53416 15.9902C3.1849 15.9308 2.95006 15.6044 3.01028 15.2602L3.8814 10.2572L0.194184 6.71418C0.0938245 6.61724 0.0275873 6.49064 0.00751532 6.35216C-0.046679 6.00597 0.198199 5.68549 0.549458 5.63406Z" fill="#FFC226"/>
</svg>
            <span class="rating">4.44</span>
            </span>
            
        <button class="keranjang mt-12" @click.prevent="checkout('Handcraft Chinese style', 1 , 60 )">
          <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70534 0.823242H0.916672V3.65658H5.47551L9.39967 21.6171H9.41667V22.0732H27.8333V21.7219L30.9401 8.03549L31.4189 6.48991H8.92792L8.12042 2.79099L7.70534 0.823242ZM27.8149 9.32324H9.54701L11.7131 19.2399H25.5638L27.8149 9.32324Z" fill="white"/>
</svg>
        <span class="ok">Add To Card</span>
        </button>
          </label>
        </div>
    </div>
            <div class="card30"
    >
        <div class="group">
          <img class="foto" src="https://dummyjson.com/image/i/products/30/thumbnail.jpg" alt="foto">
        </div>
        <div class="rektangle ">
          <label class="smartphone ml-10 mt-1">home-decoration</label>
        </div>
        <div class="text">
          <label class="jenis">Key Holder</label>
          <label class="deskripsi">Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality</label>
          <label class="harga">$ 30
            <div class="flex items-center gap-2 mt-3">
            <div class="discountrektangel ">
            <p class="hargadiscount">2.92%</p>
            </div>
            <span class="potongan text-sm line-through opacity-50">$ 0.9</span>
            </div>
            <span class="flex items-center mt-6 gap-2">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.549458 5.63406L5.64573 4.90408L7.92389 0.352135C7.98612 0.227506 8.08848 0.126615 8.21494 0.0652895C8.53207 -0.0890138 8.91746 0.0395723 9.07603 0.352135L11.3542 4.90408L16.4505 5.63406C16.591 5.65384 16.7194 5.71912 16.8178 5.81803C16.9367 5.93848 17.0022 6.10053 16.9999 6.26856C16.9977 6.4366 16.9278 6.59688 16.8057 6.71418L13.1185 10.2572L13.9896 15.2602C14.0101 15.3766 13.997 15.4963 13.9519 15.6057C13.9068 15.7151 13.8315 15.8099 13.7346 15.8793C13.6376 15.9488 13.5229 15.99 13.4033 15.9984C13.2838 16.0068 13.1643 15.982 13.0583 15.9269L8.49996 13.5648L3.94162 15.9269C3.81717 15.9922 3.67265 16.0139 3.53416 15.9902C3.1849 15.9308 2.95006 15.6044 3.01028 15.2602L3.8814 10.2572L0.194184 6.71418C0.0938245 6.61724 0.0275873 6.49064 0.00751532 6.35216C-0.046679 6.00597 0.198199 5.68549 0.549458 5.63406Z" fill="#FFC226"/>
</svg>
            <span class="rating">4.92</span>
            </span>
            
        <button class="keranjang mt-12" @click.prevent="checkout('Key Holder', 1 , 30 )">
          <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70534 0.823242H0.916672V3.65658H5.47551L9.39967 21.6171H9.41667V22.0732H27.8333V21.7219L30.9401 8.03549L31.4189 6.48991H8.92792L8.12042 2.79099L7.70534 0.823242ZM27.8149 9.32324H9.54701L11.7131 19.2399H25.5638L27.8149 9.32324Z" fill="white"/>
</svg>
        <span class="ok">Add To Card</span>
        </button>
          </label>
        </div>
    </div>
    <div class="table ">
      <span class="title-table flex items-center mt-10 ml-14">Shooping Card</span>
      <span class="flex items-center ml-10 mt-6 gap-4">
      <span class="name-table">Name</span>
      <span class="QTY-table">QTY</span>
      <span class="Price-table">Price</span>
      <span class="Subtotal-table">Subtotal</span>
      </span>
      <span class="flex items-center ml-10 mt-6 gap-4"
      v-for="product in this.array_chekout" :key="product.id"
      >
      <span class="name-table mt-4">{{ product.Name }}</span>
      <span class="QTY-table mt-4">{{ product.Qty }}</span>
      <span class="Price-table mt-4">{{ product.Price }}</span>
      <span class="Subtotal-table mt-4">{{ product.Subtotal }}</span>
      </span>
      <svg class="ml-14" width="396" height="2" viewBox="0 0 396 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 1H396" stroke="#E3E3E3"/>
<span class="flex items-center ml-10 mt-6 gap-2">
      <span class="total-table">Total</span>
      <span class="jumlah-table ml-40">5.000.000</span>
      
      </span>
      <button class="chekout mt-60 ml-12">
          <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70534 0.823242H0.916672V3.65658H5.47551L9.39967 21.6171H9.41667V22.0732H27.8333V21.7219L30.9401 8.03549L31.4189 6.48991H8.92792L8.12042 2.79099L7.70534 0.823242ZM27.8149 9.32324H9.54701L11.7131 19.2399H25.5638L27.8149 9.32324Z" fill="white"/>
</svg>
        <span class="ok">Checkout</span>
      </button>
</svg>
    
    </div>
    </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'
export default {
  name: 'card',
  data(){
    return{
      name:'',
      qty:'',
      price:'',
      validasi:0,
      length:'',
      array_chekout:[],
    }
  },
  setup(){
    const quote = ref('')
    axios.get('https://dummyjson.com/products').then(response=>{
      quote.value = response.data.products  
    })
    return{
      quote
    }
},
  props: {
    msg: String
  },
  methods:{
    checkout(name_product,qty_product,price_product){
      this.name = name_product
      this.qty = qty_product
      this.price = price_product
      this.length = this.array_chekout.length
      if (this.length == 0) {
        this.array_chekout.push({Name:this.name,Qty:this.qty,Price:this.price,Subtotal:(this.qty*this.price)})
      }else{
        for (let index = 0; index < this.array_chekout.length; index++) {
          if (this.array_chekout[index].Name == this.name) {
            this.array_chekout[index].Qty = this.array_chekout[index].Qty + this.qty
            this.array_chekout[index].Subtotal = this.array_chekout[index].Subtotal + (this.qty*this.price)
          }else{
            this.validasi = 1
          }
          
        }
        if (this.validasi ==1) {
          this.array_chekout.push({Name:this.name,Qty:this.qty,Price:this.price,Subtotal:(this.qty*this.price)})
        }
      }
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.card30{
  box-sizing: border-box;

position: absolute;
width: 376px;
height: 686px;
left: 416px;
top: 5600px;

background: #FFFFFF;
box-shadow: 0px 15px 50px rgba(108, 146, 181, 0.15);
border-radius: 25px;
}
.card29{
  box-sizing: border-box;

position: absolute;
width: 376px;
height: 686px;
left: 0px;
top: 5600px;

background: #FFFFFF;
box-shadow: 0px 15px 50px rgba(108, 146, 181, 0.15);
border-radius: 25px;
}
.card28{
  box-sizing: border-box;

position: absolute;
width: 376px;
height: 686px;
left: 1248px;
top: 4800px;

background: #FFFFFF;
box-shadow: 0px 15px 50px rgba(108, 146, 181, 0.15);
border-radius: 25px;
}
.card27{
  box-sizing: border-box;

position: absolute;
width: 376px;
height: 686px;
left: 832px;
top: 4800px;

background: #FFFFFF;
box-shadow: 0px 15px 50px rgba(108, 146, 181, 0.15);
border-radius: 25px;
}
.card26{
  box-sizing: border-box;

position: absolute;
width: 376px;
height: 686px;
left: 416px;
top: 4800px;

background: #FFFFFF;
box-shadow: 0px 15px 50px rgba(108, 146, 181, 0.15);
border-radius: 25px;
}
.card25{
  box-sizing: border-box;

position: absolute;
width: 376px;
height: 686px;
left: 0px;
top: 4800px;

background: #FFFFFF;
box-shadow: 0px 15px 50px rgba(108, 146, 181, 0.15);
border-radius: 25px;
}
.card24{
  box-sizing: border-box;

position: absolute;
width: 376px;
height: 686px;
left: 1248px;
top: 4000px;

background: #FFFFFF;
box-shadow: 0px 15px 50px rgba(108, 146, 181, 0.15);
border-radius: 25px;
}
.card23{
  box-sizing: border-box;

position: absolute;
width: 376px;
height: 686px;
left: 832px;
top: 4000px;

background: #FFFFFF;
box-shadow: 0px 15px 50px rgba(108, 146, 181, 0.15);
border-radius: 25px;
}
.card22{
  box-sizing: border-box;

position: absolute;
width: 376px;
height: 686px;
left: 416px;
top: 4000px;

background: #FFFFFF;
box-shadow: 0px 15px 50px rgba(108, 146, 181, 0.15);
border-radius: 25px;
}
.card21{
  box-sizing: border-box;

position: absolute;
width: 376px;
height: 686px;
left: 0px;
top: 4000px;

background: #FFFFFF;
box-shadow: 0px 15px 50px rgba(108, 146, 181, 0.15);
border-radius: 25px;
}
.card20{
  box-sizing: border-box;

position: absolute;
width: 376px;
height: 686px;
left: 1248px;
top: 3200px;

background: #FFFFFF;
box-shadow: 0px 15px 50px rgba(108, 146, 181, 0.15);
border-radius: 25px;
}
.card19{
  box-sizing: border-box;

position: absolute;
width: 376px;
height: 686px;
left: 832px;
top: 3200px;

background: #FFFFFF;
box-shadow: 0px 15px 50px rgba(108, 146, 181, 0.15);
border-radius: 25px;
}
.card18{
  box-sizing: border-box;

position: absolute;
width: 376px;
height: 686px;
left: 416px;
top: 3200px;

background: #FFFFFF;
box-shadow: 0px 15px 50px rgba(108, 146, 181, 0.15);
border-radius: 25px;
}
.card17{
  box-sizing: border-box;

position: absolute;
width: 376px;
height: 686px;
left: 0px;
top: 3200px;

background: #FFFFFF;
box-shadow: 0px 15px 50px rgba(108, 146, 181, 0.15);
border-radius: 25px;
}
.card16{
  box-sizing: border-box;

position: absolute;
width: 376px;
height: 686px;
left: 1248px;
top: 2400px;

background: #FFFFFF;
box-shadow: 0px 15px 50px rgba(108, 146, 181, 0.15);
border-radius: 25px;
}
.card15{
  box-sizing: border-box;

position: absolute;
width: 376px;
height: 686px;
left: 832px;
top: 2400px;

background: #FFFFFF;
box-shadow: 0px 15px 50px rgba(108, 146, 181, 0.15);
border-radius: 25px;
}
.card14{
  box-sizing: border-box;

position: absolute;
width: 376px;
height: 686px;
left: 416px;
top: 2400px;

background: #FFFFFF;
box-shadow: 0px 15px 50px rgba(108, 146, 181, 0.15);
border-radius: 25px;
}
.card13{
  box-sizing: border-box;

position: absolute;
width: 376px;
height: 686px;
left: 0px;
top: 2400px;

background: #FFFFFF;
box-shadow: 0px 15px 50px rgba(108, 146, 181, 0.15);
border-radius: 25px;
}
.card12{
  box-sizing: border-box;

position: absolute;
width: 376px;
height: 686px;
left: 1248px;
top: 1600px;

background: #FFFFFF;
box-shadow: 0px 15px 50px rgba(108, 146, 181, 0.15);
border-radius: 25px;
}
.card11{
  box-sizing: border-box;

position: absolute;
width: 376px;
height: 686px;
left: 832px;
top: 1600px;

background: #FFFFFF;
box-shadow: 0px 15px 50px rgba(108, 146, 181, 0.15);
border-radius: 25px;
}
.card10{
  box-sizing: border-box;

position: absolute;
width: 376px;
height: 686px;
left: 416px;
top: 1600px;

background: #FFFFFF;
box-shadow: 0px 15px 50px rgba(108, 146, 181, 0.15);
border-radius: 25px;
}
.card9{
  box-sizing: border-box;

position: absolute;
width: 376px;
height: 686px;
left: 0px;
top: 1600px;

background: #FFFFFF;
box-shadow: 0px 15px 50px rgba(108, 146, 181, 0.15);
border-radius: 25px;
}
.card8{
  box-sizing: border-box;

position: absolute;
width: 376px;
height: 686px;
left: 1248px;
top: 800px;

background: #FFFFFF;
box-shadow: 0px 15px 50px rgba(108, 146, 181, 0.15);
border-radius: 25px;
}
.card7{
  box-sizing: border-box;

position: absolute;
width: 376px;
height: 686px;
left: 832px;
top: 800px;

background: #FFFFFF;
box-shadow: 0px 15px 50px rgba(108, 146, 181, 0.15);
border-radius: 25px;
}
.card6{
  box-sizing: border-box;

position: absolute;
width: 376px;
height: 686px;
left: 416px;
top: 800px;

background: #FFFFFF;
box-shadow: 0px 15px 50px rgba(108, 146, 181, 0.15);
border-radius: 25px;
}
.card5{
  box-sizing: border-box;

position: absolute;
width: 376px;
height: 686px;
left: 0px;
top: 800px;

background: #FFFFFF;
box-shadow: 0px 15px 50px rgba(108, 146, 181, 0.15);
border-radius: 25px;
}

.card4{
  box-sizing: border-box;

position: absolute;
width: 376px;
height: 686px;
left: 1248px;
top: 0px;

background: #FFFFFF;
box-shadow: 0px 15px 50px rgba(108, 146, 181, 0.15);
border-radius: 25px;
}
.card3{
  box-sizing: border-box;

position: absolute;
width: 376px;
height: 686px;
left: 832px;;
top: 0px;

background: #FFFFFF;
box-shadow: 0px 15px 50px rgba(108, 146, 181, 0.15);
border-radius: 25px;
}
.card2{
  box-sizing: border-box;

position: absolute;
width: 376px;
height: 686px;
left: 416px;;
top: 0px;

background: #FFFFFF;
box-shadow: 0px 15px 50px rgba(108, 146, 181, 0.15);
border-radius: 25px;
}
.card1{
  box-sizing: border-box;

position: absolute;
width: 376px;
height: 686px;
left: 0px;
top: 0px;

background: #FFFFFF;
box-shadow: 0px 15px 50px rgba(108, 146, 181, 0.15);
border-radius: 25px;
}
.frame{
  display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 40px;

position: absolute;
width: 1624px;
height: 686px;
left: 275px;
top: 176px;
}
.group{
  width: 376px;
height: 686px;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
}
.foto{
  position: absolute;
width: 376px;
height: 253px;
left: 0px;
top: 0px;

border-radius: 25px 25px 0px 0px;
}
.rektangle{
  position: absolute;
width: 376px;
height: 49px;
left: 0px;
top: 253px;

background: #31C7CE;
border-radius: 0px 0px 45px 0px;
}
.smartphone{
width: 131px;
height: 20px;
left: 24px;
top: 265px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;

color: #FFFFFF;;
}
.text{
width: 327px;
height: 224px;
left: 24px;
top: 324px;
}
.jenis{
  position: absolute;
width: 350px;
height: 20px;
left: 24px;
top: 324px;

font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 21px;

color: #B6B6B6;
}
.deskripsi{
  position: absolute;
width: 327px;
height: 51px;
left: 24px;
top: 359px;

font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 22px;
line-height: 26px;

color: #404145;
}
.harga{
  position: absolute;
width: 181px;
height: 40px;
left: 24px;
top: 435px;

font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 26px;
line-height: 39px;

color: #404145;
}
.discount{
width: 40px;
height: 28px;
left: 856px;
top: 485px;
}
.discountrektangel{
width: 50px;
height: 28px;
left: 440px;
top: 485px;

background: #FFDBE2;
border-radius: 4px;
}
.hargadiscount{
position: absolute;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;

color: #ED3C47;
}
.potongan{
width: 96px;
height: 16px;
left: 488px;
top: 491px;

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;

color: #B6B6B6;
}
.groupharga{
  position: absolute;
width: 181px;
height: 78px;
left: 440px;
top: 435px;
}
.rating{
width: 32px;
height: 17px;
left: 462px;
top: 531px;

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;

color: #FFC226;
}
.keranjang{
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
gap: 15px;

width: 328px;
height: 57.98px;
left: 439px;
top: 585px;

background: linear-gradient(311.55deg, #01ACC4 7.49%, #29C7CF 50.69%, #4CCBCE 111.84%);
border-radius: 15px;
}
.ok{
  width: 106px;
height: 23px;

font-family: 'Mulish';
font-style: normal;
font-weight: 800;
font-size: 18px;
line-height: 23px;
/* identical to box height */


color: #FFFFFF;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
}
.table{
  box-sizing: border-box;

position: fixed;
width: 479px;
height: 579px;
left: 1962px;
top: 176px;

background: #FFFFFF;
box-shadow: 0px 15px 50px rgba(108, 146, 181, 0.1);
border-radius: 25px;
}
.title-table{

font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height: 33px;

color: #404145;
}
.name-table{
width: 98px;
height: 29px;
left: 2004px;
top: 315px;

font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 21px;

color: #7A7D85;

}
.QTY-table{
  width: 98px;
height: 29px;
left: 2116px;
top: 315px;

font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 21px;

color: #7A7D85;
}
.Price-table{
  width: 98px;
height: 29px;
left: 2214px;
top: 315px;

font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 21px;

color: #7A7D85;
}
.Subtotal-table{
  width: 98px;
height: 29px;
left: 2322px;
top: 315px;

font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 21px;

color: #7A7D85;
}
.total-table{
width: 80px;
height: 23px;
left: 2004px;
top: 543px;

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;

color: #B6B6B6;
}
.jumlah-table{
  
  width: 120px;
height: 23px;
left: 2280px;
top: 543px;

font-family: 'Roboto';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 23px;
text-align: right;

color: #404145;
}
.chekout{
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
gap: 15px;

width: 396px;
height: 70px;
left: 2004px;
top: 629px;

background: linear-gradient(311.55deg, #01ACC4 7.49%, #29C7CF 50.69%, #4CCBCE 111.84%);
border-radius: 15px;
}
</style>
