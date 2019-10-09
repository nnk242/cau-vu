<?php


namespace App\Component;


class RefSideBar
{
    public static function ref($parent, $child = '')
    {
        $sidebar = [
            'parent' => '',
            'child' => ''
        ];
        $arr_uri = explode('?', \request()->getRequestUri());
        $string_url = $arr_uri[0];
        $arr_uri = explode('/', $string_url);
        $sidebar['parent'] = isset($arr_uri[2]) ? ($arr_uri[2] == $parent ? 'sub--on' : '') : '';
        if ($child === 'index' || $child === '') {
            $sidebar['child'] = isset($arr_uri[3]) ? ($arr_uri[3] === '' ? 'active' : '') : 'active';
        } else {
            $sidebar['child'] = isset($arr_uri[3]) ? ($arr_uri[3] === $child ? 'active' : '') : '';
        }
        return $sidebar;
    }
}
