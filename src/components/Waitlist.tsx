import React from 'react';

const Waitlist: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-lavender/10 to-white dark:from-blue-900/20 dark:to-transparent" id="waitlist">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-spectral font-medium text-blue-900 dark:text-white mb-6">
            Join Our Early Access Waitlist
          </h2>
          <p className="text-lg text-blue-800/70 dark:text-lavender/80 mb-10">
            Be among the first to experience DreamNest and help shape the future of emotional wellbeing technology.
          </p>
          
          <div className="max-w-md mx-auto">
            <div id="mc_embed_signup" className="bg-white/80 dark:bg-blue-900/10 backdrop-blur-sm p-8 rounded-xl shadow-sm">
              <form 
                action="https://gmail.us9.list-manage.com/subscribe/post?u=821f365810211feda4eda67f0&amp;id=03cf894f66&amp;f_id=009cd5e3f0" 
                method="post" 
                id="mc-embedded-subscribe-form" 
                name="mc-embedded-subscribe-form" 
                className="validate" 
                target="_blank"
              >
                <div id="mc_embed_signup_scroll">
                  <div className="indicates-required mb-4">
                    <span className="asterisk text-pink-500">*</span> indicates required
                  </div>
                  
                  <div className="mc-field-group mb-6">
                    <label htmlFor="mce-EMAIL" className="block text-sm font-medium text-blue-900 dark:text-white mb-2">
                      Email Address <span className="asterisk text-pink-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      name="EMAIL" 
                      className="required email w-full px-4 py-2 rounded-lg border border-lavender/30 focus:border-blue-900 dark:border-blue-800/30 dark:focus:border-lavender bg-white/80 dark:bg-blue-900/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-lavender/50 dark:focus:ring-blue-800/50" 
                      id="mce-EMAIL" 
                      required 
                    />
                  </div>
                  
                  <div className="mc-field-group mb-6">
                    <label htmlFor="mce-FNAME" className="block text-sm font-medium text-blue-900 dark:text-white mb-2">
                      First Name
                    </label>
                    <input 
                      type="text" 
                      name="FNAME" 
                      className="text w-full px-4 py-2 rounded-lg border border-lavender/30 focus:border-blue-900 dark:border-blue-800/30 dark:focus:border-lavender bg-white/80 dark:bg-blue-900/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-lavender/50 dark:focus:ring-blue-800/50" 
                      id="mce-FNAME" 
                    />
                  </div>
                  
                  <div id="mce-responses" className="clear foot">
                    <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                    <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                  </div>
                  
                  <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                    <input type="text" name="b_821f365810211feda4eda67f0_03cf894f66" tabIndex={-1} />
                  </div>
                  
                  <div className="clear foot">
                    <button 
                      type="submit" 
                      name="subscribe" 
                      id="mc-embedded-subscribe" 
                      className="w-full px-6 py-3 rounded-full bg-blue-900 dark:bg-lavender text-white dark:text-blue-900 hover:bg-blue-800 dark:hover:bg-lavender/90 transition-all duration-300 shadow-sm hover:shadow"
                    >
                      Join Waitlist
                    </button>
                  </div>
                </div>
              </form>
              <p className="text-sm text-blue-800/60 dark:text-lavender/60 mt-4">
                We respect your privacy and will never share your information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;