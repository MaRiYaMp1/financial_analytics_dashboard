import React from 'react';
import { 
  LayoutDashboard, 
  CreditCard, 
  PieChart, 
  Users, 
  Settings, 
  MessageSquare, 
  Shield,
  LogOut
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/', current: true },
  { name: 'Transactions', icon: CreditCard, href: '/transactions', current: false },
  { name: 'Analytics', icon: PieChart, href: '/analytics', current: false },
  { name: 'Users', icon: Users, href: '/users', current: false },
  { name: 'Messages', icon: MessageSquare, href: '/messages', current: false },
  { name: 'Security', icon: Shield, href: '/security', current: false },
  { name: 'Settings', icon: Settings, href: '/settings', current: false },
];

export function Sidebar() {
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-slate-900 px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-white text-xl font-semibold">Penta</span>
          </div>
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={`
                        group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold
                        ${item.current
                          ? 'bg-emerald-700 text-white'
                          : 'text-slate-300 hover:text-white hover:bg-slate-800'
                        }
                      `}
                    >
                      <item.icon
                        className={`h-6 w-6 shrink-0 ${
                          item.current ? 'text-white' : 'text-slate-400 group-hover:text-white'
                        }`}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="mt-auto">
              <button
                onClick={handleSignOut}
                className="group -mx-2 flex w-full gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-slate-300 hover:bg-slate-800 hover:text-white"
              >
                <LogOut className="h-6 w-6 shrink-0 text-slate-400 group-hover:text-white" />
                Sign out
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}