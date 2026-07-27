"use client";

import Link from "next/link";

export default function Login() {
  return (
    <div className="bg-surface font-sans text-on-surface min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCBC-OGH2P664mOcizJsI1gwHTTISJNgb_1cRMF8XBkNnKvmui8K7B1dKmeJwYAikUdJsJ7um3-Knfqg-uV7uGMQDQhgYagt-rBPB9fvqBW5newnSzkOPIxPZz32w8BBbQgZgcm7Rh02tuY6F-GQxrIr8G7c_-kgLTzJqKE2gIHjnTRBz_OOszMRIB5fPTxTMXvbzLG71CdORe-_x76IVl_KJzvNK5YhtbJXvGNpm8eUCYizoYZvyTZDcCVQATE5pUyo8n3u3-0WJo')" }}
      ></div>
      <div className="absolute inset-0 bg-surface/85 backdrop-blur-md z-10"></div>
      
      {/* Login Container */}
      <main className="relative z-20 w-full max-w-md px-margin-mobile md:px-0">
        <div className="bg-surface-container-lowest rounded-lg shadow-sm p-8 md:p-12 flex flex-col gap-8 w-full border border-outline-variant/30">
          
          {/* Header / Brand */}
          <div className="flex flex-col items-center text-center space-y-4">
            <Link href="/" className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: '"FILL" 1' }}>
                local_library
              </span>
            </Link>
            <div>
              <h1 className="font-headline-sm text-headline-sm text-primary">International Pastors Management Ministry</h1>
              <p className="font-label-md text-label-md text-on-surface-variant mt-1">Admin Portal</p>
            </div>
          </div>
          
          {/* Login Form */}
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="email">Email Address</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">
                  mail
                </span>
                <input 
                  className="w-full pl-10 pr-4 py-3 rounded-DEFAULT border border-outline-variant bg-transparent font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" 
                  id="email" 
                  name="email" 
                  placeholder="admin@agapeinstitute.edu" 
                  required 
                  type="email" 
                />
              </div>
            </div>
            
            {/* Password Field */}
            <div className="flex flex-col gap-2">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="password">Password</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">
                  lock
                </span>
                <input 
                  className="w-full pl-10 pr-10 py-3 rounded-DEFAULT border border-outline-variant bg-transparent font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" 
                  id="password" 
                  name="password" 
                  placeholder="••••••••" 
                  required 
                  type="password" 
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors flex items-center justify-center" type="button">
                  <span className="material-symbols-outlined text-[20px]">
                    visibility
                  </span>
                </button>
              </div>
            </div>
            
            {/* Options */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input className="w-4 h-4 rounded-sm border-outline-variant text-primary focus:ring-primary cursor-pointer" type="checkbox" />
                <span className="font-label-sm text-label-sm text-on-surface-variant group-hover:text-on-surface transition-colors">Remember Me</span>
              </label>
              <a className="font-label-sm text-label-sm text-primary hover:text-primary-fixed-variant transition-colors underline-offset-4 hover:underline" href="#">
                Forgot Password?
              </a>
            </div>
            
            {/* Submit Action */}
            <button className="w-full mt-2 py-3.5 rounded-DEFAULT bg-secondary-fixed-dim text-on-secondary-fixed font-label-md text-label-md font-bold text-center tracking-wide hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200" type="submit">
              Login to Portal
            </button>
          </form>
          
          {/* Security Footer */}
          <div className="mt-4 pt-6 border-t border-surface-container flex items-center justify-center gap-2 text-outline">
            <span className="material-symbols-outlined text-[16px]">
              shield
            </span>
            <span className="font-label-sm text-label-sm">Secured Ministry Network</span>
          </div>
        </div>
      </main>
    </div>
  );
}
