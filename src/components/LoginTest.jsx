import { useState, useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from '../utils/supabaseClient';

export default function Logintest() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error signing out:", error.message);
    } else {
      setSession(null);
    }
  };

  if (!session) {
    return <Auth supabaseClient={supabase} providers={['google', 'github']}/>;
  } else {
    return (
      <div>
        Logged in!
        <button onClick={handleSignOut}>Sign out</button>
      </div>
    );
  }
}
