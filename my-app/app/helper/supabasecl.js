import {createClient} from "@supabase/supabase-js";



const supabase = createClient(supabaseUrl,supabaseAnontkey);
export default supabase;
