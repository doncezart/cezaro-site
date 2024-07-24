import { SB_KEY, SB_URL } from '$env/static/private';
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(SB_URL, SB_KEY)